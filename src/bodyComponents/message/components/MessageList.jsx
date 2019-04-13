import React, {Component} from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import { Map,Seq } from "immutable";

export default class MessageList extends Component {
    static propTypes = {
        msgList: PropTypes.object.isRequired,
        loginUser:PropTypes.object.isRequired
    };

    render() {
    const {msgList,loginUser} = this.props;
    const {chatMsgs,users} = msgList;
    
    const  newUsers = Map(users).filter((v,k)=> v != loginUser._id);
    console.log(newUsers);

        return (
            <div>
                <div className="card mb-12" style={{maxWidth: '100%',margin: "10px 0"}}>
                    <div className="row no-gutters">
                        <div className="col-md-3">
                            <img
                                src="https://res.cloudinary.com/xiong1028/image/upload/v1554173545/kq9kf4co9mpxlenvlwky.png"
                                className="card-img rounded-circle msgAvatar" alt="avartar"
                                style={{width: 100, height: 100, margin: "30px"}}/>

                        </div>
                        <div className="col-md-9">
                            <div className="card-body">
                                <h5 className="card-title">
                                    Hui
                                   

                                </h5>
                                <p className="card-text">This is a wider card with supporting text below as a
                                    natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                    <Link to={"/chat/" + "5ca17fb190e7086fd8a5c1ef"}>
                                    <button type="button" className="btn btn-link">reply</button>
                                    </Link>
                                    <button type="button" className="btn btn-link">delete</button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <nav aria-label="Page navigation example">
                    <ul className="pagination" style={{float:"right"}}>
                        <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
