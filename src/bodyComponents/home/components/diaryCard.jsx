import React, {Component} from "react";
import {connect} from "react-redux";
import {Card, Row, Col} from 'antd';
import {MDBMask, MDBView, MDBIcon, MDBBtn} from "mdbreact";
import {Button} from "react-bootstrap";
import {actionCreators} from "../store";
import '../home.css';
import {Link} from 'react-router-dom';

const {Meta} = Card;

class DiaryCard extends Component {

	getDiaryCardList() {
		const {diaryCardList, page} = this.props;

		const newDiaryCardList = diaryCardList.toJS();

		console.log(1, newDiaryCardList);

		//diplayed card in each page
		let cardPerPageList = [];

		if (newDiaryCardList.length) {
			for (let i = page * 6; i < (page + 1) * 6; i++) {
				if (newDiaryCardList[i]) {
					cardPerPageList.push(
						<Col className="gutter-row" span={5} offset={2} key={i}>
							<Link to={'/detail/' + newDiaryCardList[i]['id']}>
								<Card
									hoverable
									style={{width: 350, height: 330, padding: '2.5%', borderRadius: '8px', margin: 10}}
									cover={<MDBView hover zoom>
										<img alt="diary pic" src={newDiaryCardList[i]['cover_imgUrl']}
										     style={{height: 250}}/>
										<MDBMask overlay="stylish-light">
											<MDBBtn color="danger" rounded size="xl">
												<MDBIcon fas='true' icon="thumbtack" className="left"/><b> Save</b>
											</MDBBtn>
										</MDBMask>
									</MDBView>}
								>
									<Meta
										avatar={<img src={newDiaryCardList[i]['user_imgUrl']} alt="userAvatar"
										             className="rounded-circle"
										             style={{width: '40px'}}/>}
										style={{fontFamily: "'Indie Flower', cursive", fontSize: '18px', fontWeight: 700, color: 'black'}}
										description={<p style={{color: 'black'}}>{newDiaryCardList[i]['title']}</p>}
									/>
								</Card>
							</Link>
						</Col>
					)
				}
			}
		}
		return cardPerPageList;
	}

	render() {
		const {page, totalPage, handlePageChange} = this.props;
		return (
			<div>
				<Row className="titleRow">
					Most Recent Diaries
				</Row>
				<Row style={{marginBottom: 28}}>
					<
						Button
						className="btn btn btn-outline-info"
						style={{display: 'block', margin: '0 auto'}}
						onClick={() => handlePageChange(page, totalPage)}
					>
						More Diaries
					</Button>
				</Row>
				<Row>
					{this.getDiaryCardList()}
				</Row>
			</div>
		);
	}

	componentDidMount() {
		const {diaryCardList, handleGetCard} = this.props;
		handleGetCard();
	}
}

// data transfer from reducer to component
const mapStateToProps = state => {
	return {
		diaryCardList: state.getIn(['home', 'diaryCardList']),
		page: state.getIn(['home', 'page']),
		totalPage: state.getIn(['home', 'totalPage'])
	};
};

// data transfer from component to reducer
const mapDispatchToProps = dispatch => {
	return {
		handleGetCard() {
			dispatch(actionCreators.handleGetCardsAction());
		},
		handlePageChange(page, totalPage) {
			if (page < totalPage - 1) {
				dispatch(actionCreators.pageChangeAction(page + 1))
			} else {
				dispatch(actionCreators.pageChangeAction(0));
			}
		}
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DiaryCard);