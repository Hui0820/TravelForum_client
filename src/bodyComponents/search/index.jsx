import React, {Component} from 'react';
import {ListGroup, Figure, Row, Col, Container, Image} from 'react-bootstrap';
import {Icon} from 'antd';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import {toJS} from 'immutable';
import {ListItem, ListInfo, ListNote} from "./style";
import "./search.css";


class Search extends Component {
	render() {
		const {searchVal, diaryCardList} = this.props;
		const searchList = diaryCardList.toJS();
		const searchResultList = [];

		if (searchVal) {
			searchList.filter((value, index) => {
				var re = new RegExp(searchVal, 'g');
				if (re.test(value.title) || re.test(value.author) || re.test(value.desc)) {
					value.title = value.title.replace(re, `<span class="keyword">${searchVal}</span>`);
					value.author = value.author.replace(re, `<span class="keyword">${searchVal}</span>`);
					value.desc = value.desc.replace(re, `<span class="keyword">${searchVal}</span>`);
					searchResultList.push(value);
				}
			})
		} else {
			this.props.history.push('/');
		}

		return (
			<Container className="searchInfo">
				<span className="feedbackMsg">About {searchResultList.length} results</span>
				<ListGroup variant="flush">
					{searchResultList.map((value, key) => {
						return (
							<ListGroup.Item key={value + key}>
								<Row>
									<Col sm={3}>
										<Link to={'/detail/' + value.id}>
											<Figure.Image
												width={120}
												height={80}
												alt="171x180"
												src={value.cover_imgUrl}
											/>
										</Link>
									</Col>
									<Col sm={9}>
										<div>
											<Image src={value.user_imgUrl} roundedCircle style={{width: 30, height: 30}}/>
											<span
												dangerouslySetInnerHTML={{__html: value.author}}
											/>&nbsp;&nbsp;<span>{value.postTime}</span>
										</div>
										<Link to={'/detail/' + value.id}>
											<h5
												dangerouslySetInnerHTML={{__html: value.title}}
											/>
										</Link>
										<ListInfo>
											<p
												dangerouslySetInnerHTML={{__html: value.desc.length > 200 ? value.desc : value.desc.substr(0, 300) + "..."}}
											/>
										</ListInfo>
										<ListNote>
											<span><Icon type="eye"/>{value.views}</span>
											<span><Icon type="message"/>{value.comments}</span>
											<span><Icon type="like"/>{value.likes}</span>
										</ListNote>
									</Col>
								</Row>
							</ListGroup.Item>
						)
					})}
				</ListGroup>
			</Container>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		searchVal: state.getIn(['header', 'searchVal']),
		diaryCardList: state.getIn(['home', 'diaryCardList'])
	}
}

const mapDispatchToProps = (dispatch) => {
	return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(Search);