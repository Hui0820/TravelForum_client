import React, { Component } from "react";
import { connect } from "react-redux";
import Divider from '@material-ui/core/Divider';
import { Form, Input, Icon, Button, message } from 'antd';
import { actionCreators } from '../store';

class PassReset extends Component {
    
    state = {
        password1: '',
        password2: ''
    }

    handleChange = (name, e) => {
		this.setState({
			[name]: e.target.value
		})
    }
    
    toRstPswd = () => {
        this.props.handleResetPswd(this.state);
	}

    render() {
        const {msg} = this.props;
        if(msg !== ""){
            message.info(msg);
        }

        return (
            <div>
                <h4 style={{ marginBottom: '5%' }}>Reset Password</h4>
                <Divider style={{ width: '150%', marginBottom: '5%' }} />

                <Form>
                    <Form.Item>
                        <Input
                            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                            type="password"
                            placeholder="New Password"
                            style={{width: "70%"}}
                            onChange={e => this.handleChange('password1', e)}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                            type="password"
                            placeholder="Confirm Password"
                            style={{width: "70%"}}
                            onChange={e => this.handleChange('password2', e)}
                        />                    
                    </Form.Item>
                    <Form.Item>
						<Button
							type="primary"
							htmlType="submit"
							block
                            shape="round"
                            style={{width: "70%"}}
							onClick={this.toRstPswd}
						>
							Reset
						</Button>
					</Form.Item>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        msg: state.getIn(["setting", "msg"])
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleResetPswd(pswd) {
			dispatch(actionCreators.handleResetPswdAction(pswd))
        },
        clearMsg(){
            dispatch(actionCreators.handleClearMsgAction())
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PassReset);
