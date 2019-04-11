import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReceiveMsg from './receiveMsg';
import SendMsg from "./sendMsg";
import { Layout } from 'antd';

const {
    Header, Footer, Sider, Content,
} = Layout;




class Chat extends Component {
    render() {
        return (
            <div className="wrap chatDialogue" >
                <Header>chat with me</Header>
                <ReceiveMsg />
                <SendMsg />
            </div>
        )
    }
}

export default connect(
    state => ({}),
    {}
)(Chat);