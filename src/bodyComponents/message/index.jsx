import React, { Component } from "react";
import { Drawer } from "antd";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import UserList from "./components/userList";

class Message extends Component {
  onClose = () => {
    const { handleDrawer } = this.props;
    handleDrawer(false);
  };

  componentDidMount() {
    const { handleGetUserList } = this.props;
    handleGetUserList();
  }

  render() {
    const { visible, userList } = this.props;
    return (
      <div>
        <Drawer
          title="Messager"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={visible}
        >
          <UserList userList={userList} />
        </Drawer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    visible: state.getIn(["message", "visiable"]),
    userList: state.getIn(["message", "userList"])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleDrawer(visiable) {
      dispatch(actionCreators.toggleMessageDrawerAction(visiable));
    },
    handleGetUserList() {
      dispatch(actionCreators.getUserListAction());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Message);
