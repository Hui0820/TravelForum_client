import React, {Component} from 'react';
import PropTypes from "prop-types";
import "../message.css";

export default class ReceiveMsg extends Component {
    // static propTypes = {
    //     chatData: PropTypes.array.isRequired
    // };

    render() {
        return (
            <div>
                <img src="https://res.cloudinary.com/xiong1028/image/upload/v1554173545/kq9kf4co9mpxlenvlwky.png"
                     className="card-img rounded-circle msgAvatar" alt="avartar"
                     style={{width: 50, height: 50}}/>
                <span className="msg">Hello there</span>
            </div>
        );
    }
}