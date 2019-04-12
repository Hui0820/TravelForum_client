import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { Tab, ListGroup, Row, Col } from "react-bootstrap";
import { Icon } from "antd";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MessageList from "./components/MessageList";

class Message extends Component {
  
  render() {
    return (
      <div className="container wrap">
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#message">
          <Row>
            <Col sm={4}>
              <ListGroup style={{ fontSize: "17px" }}>
                <ListGroup.Item action href="#message">
                  <Icon
                    type="wechat"
                    style={{ float: "left", margin: "2.5%" }}
                  />
                  Message
                </ListGroup.Item>
                <ListGroup.Item action href="#likes">
                  <Icon
                    type="heart"
                    style={{ float: "left", margin: "2.5%" }}
                  />
                  Likes
                </ListGroup.Item>
                <ListGroup.Item action href="#favorite">
                  <Icon type="star" style={{ float: "left", margin: "2.5%" }} />
                  Favorite
                </ListGroup.Item>
                <ListGroup.Item action href="#watch">
                  <Icon
                    type="user-add"
                    style={{ float: "left", margin: "2.5%" }}
                  />
                  Watch
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={8}>
              <Tab.Content>
                <Tab.Pane eventKey="#message">
                  <MessageList />
                </Tab.Pane>
                <Tab.Pane eventKey="#likes">Likes</Tab.Pane>
                <Tab.Pane eventKey="#favorite">Favorite</Tab.Pane>
                <Tab.Pane eventKey="#watch">Watch</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userList: state.getIn(["message", "userList"])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleGetUserList() {
      dispatch(actionCreators.getUserListAction());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Message);
