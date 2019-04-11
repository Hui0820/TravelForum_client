import React, { Component } from "react";
import { Modal, Input } from "antd";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { get } from "immutable";
import { actionCreators } from "../store";

class MessageModal extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  };

  handleOk = () => {
    const { handleMsgWinShow } = this.props;
    console.log(this.input.value);
    handleMsgWinShow(false);
  };

  handleCancel = () => {
    const { handleMsgWinShow } = this.props;
    handleMsgWinShow(false);
  };

  render() {
    const { articles, msgWindowVisible } = this.props;
    return (
      <div>
        <Modal
          title={get(articles[0], "username")}
          visible={msgWindowVisible}
          onOk={this.handleOk.bind(this)}
          onCancel={this.handleCancel.bind(this)}
          okText="Send"
        >
          <textArea
            rows={4}
            ref={input => (this.input = input)}
            className="col-12"
          />
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    msgWindowVisible: state.getIn(["message", "msgWindowVisible"])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleMsgWinShow(visible) {
      dispatch(actionCreators.handleMsgWinShowAction(visible));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageModal);
