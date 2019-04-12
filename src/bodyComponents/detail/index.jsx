import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { ListNote } from "./style";
<<<<<<< HEAD
=======

>>>>>>> b556b4dd763e43bfc631e5bff90ce5224bbcfaa7

import {
  DetailWrapper,
  DetailTitle,
  DetailContent,
  DetailAuthor,
  DetailAuthorInfo
} from "./style";
import { Avatar, Icon, Button } from "antd";
import CommentBox from "./components/comment";

class Detail extends Component {

  render() {
    const { article, handleUpdateLikeNum} = this.props;
    console.log(article);
    return (
      <DetailWrapper>
        <span>
          <DetailTitle>{article.post_title}</DetailTitle>
          <Button type="danger" icon="heart" onClick={()=>handleUpdateLikeNum(this.props.match.params.id)} style={{marginBottom: "5%"}}>Like</Button>
        </span>
        <DetailAuthor>
          <Link to={"/author/" + article.user_id}>
            <Avatar src={article.avatar} size="large" className="icon" />
          </Link>
          <DetailAuthorInfo>
            <Link to={"/author/" + article.user_id}>{article.author} </Link>         
            <ListNote>
              {article.post_time}
              <Icon type="eye" className="Icon" />
              {article.views}
              <Icon type="message" className="Icon" />
              {article.comments}
              <Icon type="heart" className="Icon" />
              {article.likes}
            </ListNote>
          </DetailAuthorInfo>
        </DetailAuthor>
        <DetailContent
          dangerouslySetInnerHTML={{ __html: article.post_content }}
        />
        <CommentBox />
      </DetailWrapper>
    );
  }

  componentDidMount() {
    const {article, getDetail, handleUpdateViewNum} = this.props;

    //if this component is the Router component, we can get the id from this.props.match.params
    //Get the id from the router, here id is post_id
    getDetail(this.props.match.params.id);

    handleUpdateViewNum(this.props.match.params.id);
  }
}

const mapStateToProps = state => {
  return {
    article: state.getIn(["detail", "article"])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDetail(id) {
      dispatch(actionCreators.getDetailAction(id));
    },
    handleUpdateLikeNum(id) {
      dispatch(actionCreators.handleUpdateLikeNumAction(id));
    },
    handleUpdateViewNum(id) {
      dispatch(actionCreators.handleUpdateViewNumAction(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Detail));
