import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import {withRouter} from "react-router-dom";
import {
	DetailWrapper,
	DetailTitle,
	DetailContent
} from "./style";
import { Divider } from 'antd';
import CommentBox from "./components/comment";


class Detail extends Component {

	render() {
		const {title, content} = this.props;
		return (
			<DetailWrapper>
				<DetailTitle>{title}</DetailTitle>
				<DetailContent
					dangerouslySetInnerHTML={{__html: content}}
				/>
				<Divider/>
				<CommentBox/>
			</DetailWrapper>
		)
	}

	componentDidMount() {
		this.props.getDetail(this.props.match.params.id);
	}

}


const mapStateToProps = (state) => {
	return {
		title: state.getIn(['detail', 'title']),
		content: state.getIn(['detail', 'content'])
	}
}


const mapDispatchToProps = (dispatch) => {
	return {
		getDetail(id) {
			dispatch(actionCreators.getDetailAction(id));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));