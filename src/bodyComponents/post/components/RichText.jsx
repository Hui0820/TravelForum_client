import React, { Component } from "react";
import { Button, Modal } from "antd";
import { Editor } from "react-draft-wysiwyg";
import draftjs from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../post.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import EditableTagGroup from "./postTags";
import { actionCreators } from "../store";

class RichText extends Component {
  state = {
    showRichText: false,
    editorContent: "",
    editorState: "",
    postTitle: "",
    postContent: "",
    postImgUrl: []
  };
  handleClearContent = () => {
    //clear content
    this.setState({
      editorState: ""
    });
  };
  handleGetText = () => {
    //get the content
    this.setState({
      showRichText: true,
      postContent: draftjs(this.state.editorContent),
      postImgUrl: this.getImgUrl(draftjs(this.state.editorContent))
    });
  };
  onEditorStateChange = editorState => {
    //set the editor status
    this.setState({
      editorState
    });
  };
  onEditorChange = editorContent => {
    //the content editor
    this.setState({
      editorContent
    });
  };
  handleTitleInput = e => {
    this.setState({
      postTitle: e.target.value
    });
  };

  getImgUrl = contentStr => {
    const imgUrlList = contentStr.match(
      /<img[\s]*src=[\s]*[\'\"]?([^\'\"]*)\.(jpg|png|gif|svg|webp|bmp)/gi
    );
    let newImgURLArr = [];
    if (imgUrlList) {
      imgUrlList.map((item, index) => {
        newImgURLArr.push(item.substring(item.indexOf("http"), item.length));
      });
    }
    return newImgURLArr;
  };

  handlePostOk = () => {
    const { diaryCardList } = this.props;
    this.setState({
      showRichText: false
    });
    this.props.handlePostOk(
      {
        title: this.state.postTitle,
        tags: this.props.tagsList,
        content: this.state.postContent,
        postImgUrl: this.state.postImgUrl
      },
      diaryCardList
    );
    this.props.history.replace("/");
  };

  render() {
    const { editorState } = this.state;
    return (
      <div className="postArticle">
        <h3 className="postTitle">
          <i>your story on your trip</i>
        </h3>
        <input
          type="text"
          placeholder="Title"
          className="title"
          onChange={this.handleTitleInput}
        />
        <EditableTagGroup />
        <Editor
          editorState={editorState}
          onEditorStateChange={this.onEditorStateChange}
          onContentStateChange={this.onEditorChange}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName editor"
        />
        <Modal
          title="Your story on your trip"
          visible={this.state.showRichText}
          onCancel={() => {
            this.setState({
              showRichText: false
            });
          }}
          onOk={this.handlePostOk}
        >
          Are you ready to post?
        </Modal>
        <div className="postBtn">
          <Button type="primary" onClick={this.handleClearContent}>
            Clear
          </Button>
          <Button
            type="primary"
            onClick={this.handleGetText}
            style={{ marginLeft: 10 }}
          >
            Post
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tagsList: state.getIn(["post", "tagsList"]),
  diaryCardList: state.getIn(["home", "diaryCardList"])
});

const mapDispatchToProps = dispatch => ({
  handlePostOk(postData, diaryCardList) {
    dispatch(actionCreators.handlePostOkAction(postData, diaryCardList));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(RichText));
