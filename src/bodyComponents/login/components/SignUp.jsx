import React, {Component} from "react";
import {Form, Icon, Input, Button, Modal} from "antd";
import {connect} from "react-redux";
import {actionCreators} from '../store';
import {withRouter} from "react-router-dom";

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password1: '',
			password2: '',
			email: ''
		}
	}

	componentWillUnmount() {
		this.props.clearMsg();
	}

	handleChange = (name, e) => {
		this.setState({
			[name]: e.target.value
		})
	}

	toRegister = () => {
		this.props.handleRegister(this.state);
	}

	render() {
		const {isLogin, registerMsg} = this.props;
		if (isLogin) {
			this.props.history.replace('/');
		}

		return (
			<div className="signUpForm">
				<Form>
					<Form.Item className="formItem">
						<Input
							prefix={<Icon type="user" style={{color: "rgba(0,0,0,.25)"}}/>}
							placeholder="Username"
							onChange={e => this.handleChange('username', e)}
						/>
					</Form.Item>
					<Form.Item className="formItem">
						<Input
							prefix={<Icon type="lock" style={{color: "rgba(0,0,0,.25)"}}/>}
							type="password"
							placeholder="Password"
							onChange={e => this.handleChange('password1', e)}
						/>
					</Form.Item>
					<Form.Item className="formItem">
						<Input
							prefix={<Icon type="lock" style={{color: "rgba(0,0,0,.25)"}}/>}
							type="password"
							placeholder="Confirm Password"
							onChange={e => this.handleChange('password2', e)}
						/>
					</Form.Item>
					<Form.Item className="formItem">
						<Input
							prefix={<Icon type="mail" style={{color: "rgba(0,0,0,.25)"}}/>}
							placeholder="Email"
							onChange={e => this.handleChange('email', e)}
						/>
					</Form.Item>
					<Form.Item className="formItemSubmit">
						<Button
							type="danger"
							htmlType="submit"
							className="login-form-button"
							block
							shape="round"
							onClick={this.toRegister}
						>
							Register
						</Button>
					</Form.Item>
					<Form.Item>
						{registerMsg ? <div className="err-msg">{registerMsg}</div> : null}
					</Form.Item>
				</Form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		registerMsg: state.getIn(['login', 'registerMsg']),
		isLogin: state.getIn(['header', 'isLogin'])
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleRegister(user) {
			dispatch(actionCreators.handleRegisterAction(user))
		},
		clearMsg() {
			dispatch(actionCreators.handleClearMsgAction())
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(SignUp));
