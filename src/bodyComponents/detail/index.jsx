import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  DetailWrapper,
  DetailTitle,
  DetailContent,
  DetailAuthor,
  DetailAuthorInfo
} from "./style";
import { Avatar, Icon } from "antd";
import CommentBox from "./components/comment";

class Detail extends Component {
  render() {
    const { article } = this.props;
    return (
      <DetailWrapper>
        <DetailTitle>{article.post_title}</DetailTitle>
        <DetailAuthor>
          <Link to={"/author/" + article.user_id}>
            <Avatar src={article.avatar} size="large" className="icon" />
          </Link>
          <DetailAuthorInfo>
            <Link to={"/author/" + article.user_id}>{article.author} </Link>
            <div>
              {article.post_time}
              <Icon type="eye" className="Icon" />
              {article.views}
              <Icon type="message" className="Icon" />
              {article.comments}
              <Icon type="like" className="Icon" />
              {article.likes}
            </div>
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
    //if this component is the Router component, we can get the id from this.props.match.params
    //Get the id from the router
    this.props.getDetail(this.props.match.params.id);
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
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Detail));
