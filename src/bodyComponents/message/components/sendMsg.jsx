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
                <span className="msg">how are you doing?</span>
            </div>
        );
    }
}