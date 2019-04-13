import React, { Component } from "react";
import { ListGroup, Figure, Row, Col, Container } from "react-bootstrap";
import PropTypes from "prop-types";
import { Icon, Tag } from "antd";
import { Link } from "react-router-dom";
import { ListNote } from  "../style";
import "../../search/search.css";
import {List} from "immutable";


export default class FavoriteList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    render() {
        const { articles } = this.props;

        return (
            <Container className="searchInfo">
                <ListGroup variant="flush">
                    {List(articles).map((value, key) => {
                        return (
                            <ListGroup.Item key={value + key}>
                                <Row>
                                    <Col sm={3}>
                                        <Link to={"/detail/" + value.post_id}>
                                            <Figure.Image
                                                width={120}
                                                height={80}
                                                alt="171x180"
                                                src={value.cover_imgURL}
                                            />
                                        </Link>
                                    </Col>
                                    <Col sm={9}>
                                        <Link to={"/detail/" + value.post_id}>
                                            <h5
                                                dangerouslySetInnerHTML={{ __html: value.post_title }}
                                            />
                                        </Link>
                                        <span>
                                            <Link to={"/author/" + value.user_id}>
                                                <img
                                                    src={value.avatar}
                                                    alt="author_avatar"
                                                    className="rounded-circle"
                                                    style={{ width: 30, height: 30, float: "left", marginRight: "3%" }}
                                                />
                                            </Link>
                                            <Link to={"/author/" + value.user_id}>
                                                <p style={{fontSize: "16px"}}
                                                    dangerouslySetInnerHTML={{ __html: value.username }}
                                                />
                                            </Link>
                                        </span>
                                        <ListNote>
                                            <span>
                                                <Icon type="eye" />
                                                {value.views}
                                            </span>
                                            <span>
                                                <Icon type="message" />
                                                {value.comments}
                                            </span>
                                            <span>
                                                <Icon type="heart" />
                                                {value.likes}
                                            </span>
                                            <span>{value.postTime}</span>
                                        </ListNote>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        );
                    })}
                </ListGroup>
            </Container>
        );
    }
}