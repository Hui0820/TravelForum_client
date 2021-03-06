import React, {Component} from 'react';
import {
	Comment, Avatar, Form, Button, List, Input,
} from 'antd';
import moment from 'moment';
import {connect} from "react-redux";

const TextArea = Input.TextArea;

const CommentList = ({comments}) => (
	<List
		dataSource={comments}
		header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
		itemLayout="horizontal"
		renderItem={props => <Comment {...props} />}
	/>
);

const Editor = ({
	                onChange, onSubmit, submitting, value,
                }) => (
	<div>
		<Form.Item>
			<TextArea rows={4} onChange={onChange} value={value}/>
		</Form.Item>
		<Form.Item>
			<Button
				htmlType="submit"
				loading={submitting}
				onClick={onSubmit}
				type="primary"
			>
				Add Comment
			</Button>
		</Form.Item>
	</div>
);

class CommentBox extends Component {
	state = {
		comments: [],
		submitting: false,
		value: '',
	}

	handleSubmit = () => {
		const {avatar, username} = this.props;
		if (!this.state.value) {
			return;
		}

		this.setState({
			submitting: true,
		});

		setTimeout(() => {
			this.setState({
				submitting: false,
				value: '',
				comments: [
					{
						author: 'Han Solo',
						avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
						content: <p>{this.state.value}</p>,
						datetime: moment().fromNow(),
					},
					...this.state.comments,
				],
			});
		}, 1000);
	}

	handleChange = (e) => {
		this.setState({
			value: e.target.value,
		});
	}

	render() {
		const {comments, submitting, value} = this.state;
		const {avatar} = this.props;

		return (
			<div>
				{comments.length > 0 && <CommentList comments={comments}/>}
				<Comment
					avatar={(
						<Avatar
							src={avatar}
							alt="avatar"
						/>
					)}
					content={(
						<Editor
							onChange={this.handleChange}
							onSubmit={this.handleSubmit}
							submitting={submitting}
							value={value}
						/>
					)}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		avatar: state.getIn(['profile', 'avatar']),
		username: state.getIn(['login', 'profile'])
	}
}

const mapDispatchToProps = (dispatch) => {
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentBox);