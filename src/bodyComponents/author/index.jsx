import React, { Component } from "react";
import { connect } from "react-redux";
import { AuthorComponentWrapper, AuthorDetailWrapper } from "./style";
import { actionCreators } from "./store";
import { get } from "immutable";
import { Divider, Icon, Button } from "antd";
import ArticleList from "./components/articleList";
import MessageModal from "../message/components/messageModal";

class Author extends Component {
  componentDidMount() {
    const { handleGetAuthor } = this.props;
    handleGetAuthor(this.props.match.params.user_id);
  }

  handleSubscribe() {
    const { isLogin } = this.props;
    if (!isLogin) {
      this.props.history.push("/login");
    }
  }

  handleMsg() {
    const { isLogin, handleShowMsgWindow } = this.props;
    if (!isLogin) {
      this.props.history.push("/login");
    } else {
      handleShowMsgWindow();
    }
  }

  render() {
    const { articles } = this.props;
    let totalLikes = 0;
    let totalViews = 0;
    let totalComments = 0;

    articles.forEach(item => {
      totalLikes += item.likes;
      totalViews += item.views;
      totalComments += item.comments;
    });

    return (
      <div className="wrap">
        <AuthorComponentWrapper>
          <AuthorDetailWrapper className="row">
            <div className="col-sm-2">
              <img
                src={get(articles[0], "avatar")}
                alt="author_avatar"
                className="rounded-circle"
                style={{ width: 80, height: 80 }}
              />
            </div>
            <div className="col-sm-4 offset-sm-2 authorInfo">
              <h3>{get(articles[0], "username")}</h3>
              <div className="metaData">
                <span className="icon">
                  <Icon type="eye" theme="twoTone" />
                </span>
                {totalViews}
                <Divider type="vertical" />
                <span className="icon">
                  <Icon type="like" theme="twoTone" />
                </span>
                {totalLikes}
                <Divider type="vertical" />
                <span className="icon">
                  <Icon type="message" theme="twoTone" />
                </span>
                {totalComments}
              </div>
            </div>
            <div className="col-sm-4 btns row">
              <Button
                type="primary"
                className="authorBtn"
                onClick={this.handleSubscribe.bind(this)}
              >
                Subscribe
              </Button>
              <Button
                type="danger"
                className="authorBtn"
                onClick={this.handleMsg.bind(this)}
              >
                Message
              </Button>
            </div>
          </AuthorDetailWrapper>
          <Divider>Author Articles</Divider>
          <ArticleList articles={articles} />
          <MessageModal articles={articles} />
        </AuthorComponentWrapper>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    articles: state.getIn(["author", "articles"]),
    isLogin: state.getIn(["header", "isLogin"]),
    msgWindowVisible: state.getIn(["message", "msgWindowVisible"])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleGetAuthor(userid) {
      dispatch(actionCreators.handleGetAuthorAction(userid));
    },
    handleShowMsgWindow() {
      dispatch(actionCreators.handleShowMsgWindowAction());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Author);
