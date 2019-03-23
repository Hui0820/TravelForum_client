import React, {Component} from "react";
import {Form, Icon, Input, Button} from "antd";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {actionCreators} from '../store';

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
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

	toLogin = () => {
		this.props.handleLogin(this.state);
	}

	render() {
		const {isLogin, loginMsg} = this.props;
		if (isLogin) {
			this.props.history.replace('/');
		}
		return (
			<div className="signInForm">
				<Form>
					<Form.Item>
						<Input
							prefix={<Icon type="user" style={{color: "rgba(0,0,0,.25)"}}/>}
							placeholder="Username"
							onChange={e => this.handleChange('username', e)}
						/>
					</Form.Item>
					<Form.Item>
						<Input
							prefix={<Icon type="lock" style={{color: "rgba(0,0,0,.25)"}}/>}
							type="password"
							placeholder="Password"
							onChange={e => this.handleChange('password', e)}
						/>
					</Form.Item>
					<Form.Item>
						<Button
							type="primary"
							htmlType="submit"
							className="login-form-button"
							block
							shape="round"
							onClick={this.toLogin}
						>
							Log in
						</Button>
					</Form.Item>
					<Form.Item>
						{loginMsg ? <div className="err-msg">{loginMsg}</div> : null}
					</Form.Item>
				</Form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		loginMsg: state.getIn(['login', 'loginMsg']),
		isLogin: state.getIn(['header', 'isLogin'])
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleLogin(user) {
			dispatch(actionCreators.handleLoginAction(user));
		},
		clearMsg() {
			dispatch(actionCreators.handleClearMsgAction())
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(SignIn));
