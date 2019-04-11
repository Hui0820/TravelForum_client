import React, { Component } from "react";
import { Tabs } from "antd";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import "./login.css";

const TabPane = Tabs.TabPane;

export default class Login extends Component {
  render() {
    return (
      <div className="loginWrapper wrap">
        <div className="loginForm">
          <Tabs defaultActiveKey="1" tabBarGutter={50}>
            <TabPane tab="Sign In" key="1">
              <SignIn />
            </TabPane>
            <TabPane tab="Sign Up" key="2">
              <SignUp />
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}
