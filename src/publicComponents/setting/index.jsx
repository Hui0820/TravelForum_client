import React, {Component} from "react";
import { Tab, ListGroup, Row, Col } from 'react-bootstrap';
import {Icon} from 'antd';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


import Profile from './components/profile';
import PassReset from "./components/passRst";

// react-bootstrap list group
class Setting extends Component {
    render() {
        return ( 
            <div className="container">
                <Tab.Container id="list-group-tabs-example" defaultActiveKey="#profile">
                    <Row>
                        <Col sm={4}>
                            <ListGroup style={{fontSize: "17px"}}>
                                <ListGroup.Item action href="#profile"><Icon type="user" style={{float: 'left', margin:'2.5%'}} />Update Profile</ListGroup.Item>
                                <ListGroup.Item action href="#password"><Icon type="unlock" style={{float: 'left', margin:'2.5%'}} />Reset Password</ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col sm={8}>
                            <Tab.Content>
                                <Tab.Pane eventKey="#profile">
                                    <Profile />
                                </Tab.Pane>
                                <Tab.Pane eventKey="#password">
                                    <PassReset />
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>   
            </div>      
               
        );
    }
}

export default Setting;
