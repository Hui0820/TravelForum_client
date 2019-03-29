import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { withRouter } from "react-router-dom";
import { DetailWrapper, DetailTitle, DetailContent } from "./style";
import CommentBox from "./components/comment";

class Detail extends Component {
  render() {
    const { article } = this.props;
    return (
      <DetailWrapper>
        <DetailTitle>{article.post_title}</DetailTitle>

        <DetailContent
          dangerouslySetInnerHTML={{ __html: article.post_content }}
        />
        <CommentBox />
      </DetailWrapper>
    );
  }

  componentDidMount() {
    //if this component is the Router component, we can get the id from this.props.match.params
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
