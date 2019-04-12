import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import "../home.css";
import { RecommendWrapper } from "../style"; 

class AuthorRecommend extends Component {
  render(){
    return(
      <RecommendWrapper>
        
      </RecommendWrapper>
    );
  }
}


// data transfer from reducer to component
const mapStateToProps = state => {
    return {
      
    };
};

// data transfer from component to reducer
const mapDispatchToProps = dispatch => {
    return {
      
    };
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AuthorRecommend);