import React, {Component} from "react";
import {connect} from "react-redux";
//import { Redirect } from "react-router-dom";
import {Modal} from "antd";
import {actionCreators} from "./store";
import PostArticle from "./components/postArticle";

class Post extends Component {
	clickOk = () => {
		this.props.handleOk();
		this.props.history.replace("/login");
	};

	clickCancel = () => {
		this.props.handleCancel();
		this.props.history.replace("/");
	};

	render() {
		const {isLogin, accessModalVisible} = this.props;

		if (!isLogin) {
			return (
				<div>
					<Modal
						title="Access Denied"
						visible={accessModalVisible}
						onOk={this.clickOk}
						onCancel={this.clickCancel}
					>
						<p>Only for registered users. Are you going to Register now ?</p>
					</Modal>
				</div>
			);
		} else {
			return <PostArticle/>;
		}
	}
}

const mapStateToProps = state => {
	return {
		isLogin: state.getIn(["header", "isLogin"]),
		accessModalVisible: state.getIn(["post", "accessModalVisible"])
	};
};

const mapDispatchToProps = dispatch => {
	return {
		handleOk() {
			dispatch(actionCreators.handleOkAction());
		},
		handleCancel() {
			dispatch(actionCreators.handleCancelAction());
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Post);
