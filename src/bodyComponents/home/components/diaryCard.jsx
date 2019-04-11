import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Row, Col, Avatar, Icon } from "antd";
import { MDBCard, MDBRow, MDBMask, MDBView, MDBIcon, MDBBtn, MDBCardBody, MDBCardTitle, MDBContainer, MDBCol } from "mdbreact";
import { Button } from "react-bootstrap";
import { actionCreators } from "../store";
import "../home.css";
import { Link } from "react-router-dom";

class DiaryCard extends Component {
  getDiaryCardList() {
    const { diaryCardList, page } = this.props;

    const newDiaryCardList = diaryCardList.toJS();

    //diplayed card in each page
    let cardPerPageList = [];

    if (newDiaryCardList.length) {
      for (let i = page * 9; i < (page + 1) * 9; i++) {
        if (newDiaryCardList[i]) {
          cardPerPageList.push(
            <Col className="gutter-row" span={6} key={i}>
              <MDBCard className="diaryCard">
                <MDBView hover zoom className="cardView">
                  <img alt="diary pic" src={newDiaryCardList[i]["cover_imgURL"]} style={{ width: "320px", height: "220px" }} />
                  <MDBMask overlay="stylish-light">
                    <MDBBtn color="danger" rounded size="xl">
                      <MDBIcon fas="true" icon="thumbtack" className="left" />
                      <b> Save</b>
                    </MDBBtn>
                    <span className="spanIcon">
                      <MDBIcon icon="heart" size="lg" color="white" className="ml-2" />
                      {}
                    </span>
                  </MDBMask>
                </MDBView>
                <MDBCardBody>
                  <MDBRow style={{ textAlign: "center" }}>
                    <Link to={"/author/" + newDiaryCardList[i]["user_id"]}>
                      <Avatar
                        src={newDiaryCardList[i]["avatar"]}
                        alt="userAvatar"
                        style={{ width: "40px", height: "40px", marginLeft: "15px" }}
                      />
                    </Link>
                    <Link className="titleLink" to={"/detail/" + newDiaryCardList[i]["post_id"]}>
                      <MDBCardTitle className="cardTitle">
                        {newDiaryCardList[i]["post_title"]}
                      </MDBCardTitle>
                    </Link>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard >
            </Col >
          );
        }
      }
    }
    return cardPerPageList;
  }

  render() {
    const { page, totalPage, handlePageChange } = this.props;
    return (
      <div>
        <Row className="mdbRow">{this.getDiaryCardList()}</Row>
        <Row style={{ marginTop: 28 }}>
          <Button
            className="btn btn btn-outline-info"
            style={{ display: "block", margin: "0 auto" }}
            onClick={() => handlePageChange(page, totalPage)}
          >
            More Diaries
          </Button>
        </Row>
      </div>
    );
  }

  componentDidMount() {
    const { handleGetCard } = this.props;
    handleGetCard();
  }
}

// data transfer from reducer to component
const mapStateToProps = state => {
  return {
    diaryCardList: state.getIn(["home", "diaryCardList"]),
    page: state.getIn(["home", "page"]),
    totalPage: state.getIn(["home", "totalPage"])
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
        dispatch(actionCreators.pageChangeAction(page + 1));
      } else {
        dispatch(actionCreators.pageChangeAction(0));
      }
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiaryCard);
