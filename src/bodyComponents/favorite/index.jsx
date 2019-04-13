import React, { Component } from "react";
import { connect } from "react-redux";
import { AuthorComponentWrapper, AuthorDetailWrapper } from "./style";
import { actionCreators, authorActionCreators } from "./store";
import { get } from "immutable";
import { Divider, Icon, Button } from "antd";
import FavoriteList from "./components/favoriteList";


class Favorite extends Component {
    
    render() {
        const { articles, favArticles } = this.props;
        let totalLikes = 0;
        let totalViews = 0;
        let totalComments = 0;

        articles.forEach(item => {
            totalLikes += item.likes;
            totalViews += item.views;
            totalComments += item.comments;
        });

        return (
            <div className="wrap">
                <AuthorComponentWrapper>
                    <AuthorDetailWrapper className="row">
                        <div className="col-sm-2">
                            <img
                                src={get(articles[0], "avatar")}
                                alt="author_avatar"
                                className="rounded-circle"
                                style={{ width: 80, height: 80 }}
                            />
                        </div>
                        <div className="col-sm-4 offset-sm-2 authorInfo">
                            <h3>{get(articles[0], "username")}</h3>
                            <div className="metaData">
                                <span className="icon">
                                    <Icon type="eye" theme="twoTone" />
                                </span>
                                {totalViews}
                                <Divider type="vertical" />
                                <span className="icon">
                                    <Icon type="heart" theme="twoTone" />
                                </span>
                                {totalLikes}
                                <Divider type="vertical" />
                                <span className="icon">
                                    <Icon type="message" theme="twoTone" />
                                </span>
                                {totalComments}
                            </div>
                        </div>
                    </AuthorDetailWrapper>
                    <Divider>My Favorite Articles</Divider>
                    <FavoriteList articles={favArticles}/>
                </AuthorComponentWrapper>
            </div>            
        );
    }

    componentDidMount() {
        const { getFavArticles, handleGetAuthor } = this.props;
        handleGetAuthor(this.props.match.params.user_id);
        getFavArticles(this.props.match.params.user_id);
    }
}


const mapStateToProps = (state) => {
    return {
        articles: state.getIn(["author", "articles"]),
        favArticles: state.getIn(["favorite", "favArticles"])
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        handleGetAuthor(userid) {
            dispatch(authorActionCreators.handleGetAuthorAction(userid));
        },
        getFavArticles(userid) {
            dispatch(actionCreators.getFavArticlesAction(userid));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Favorite);