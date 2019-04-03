import React, { Component } from "react";
import { connect } from "react-redux";
import Cookies from "js-cookie";
import "./header.css";
import { Link, withRouter } from "react-router-dom";
import { Menu, Icon, Input, Avatar, Badge } from "antd";
import { Logo } from "./style";
import { actionCreators } from "./store";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Search = Input.Search;

class Header extends Component {
  state = {
    searchVal: ""
  };

  componentWillMount() {
    if (Cookies.get("userid")) {
      this.props.setLogin();
    }

    this.props.handleUpdateAvatar(Cookies.get("userid"));
  }

  handleSearch = function(value) {
    const { handleSearch } = this.props;
    handleSearch(value);
    this.props.history.push("/search");
  };

  handleLogout = function() {
    const { handleLogout } = this.props;
    handleLogout();
    this.props.history.push("/login");
  };

  render() {
    const { isLogin, showAccessModal, avatar } = this.props;
    return (
      <Menu mode="horizontal" theme="dark" className="header_menu">
        <Menu.Item key="logo">
          <Link to="/">
            <Logo />
          </Link>
        </Menu.Item>
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="diary">Daries</Menu.Item>
        <SubMenu
          title={<span className="submenu-title-wrapper">Destination</span>}
        >
          <MenuItemGroup title="Americas">
            <Menu.Item key="canada">Canada</Menu.Item>
            <Menu.Item key="america">America</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Asia">
            <Menu.Item key="china">China</Menu.Item>
            <Menu.Item key="korea">Korea</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="community">Community</Menu.Item>
        <Menu.Item key="searchBox" style={{ marginLeft: "30%" }}>
          <Search
            placeholder="search"
            style={{ width: 200 }}
            onSearch={value => this.handleSearch(value)}
            allowClear={true}
          />
        </Menu.Item>
        <Menu.Item key="Post" onClick={showAccessModal}>
          <Link to="/post">
            <Icon type="edit" />
            Post
          </Link>
        </Menu.Item>
        {!isLogin ? (
          <Menu.Item key="login">
            <Link to="/login">
              <span>Login</span>
            </Link>
          </Menu.Item>
        ) : (
          <SubMenu
            title={
              <span style={{ marginRight: 24 }}>
                <Badge count={8}>
                  <Avatar src={avatar} />
                </Badge>
              </span>
            }
          >
            <MenuItemGroup title="Article">
              <Menu.Item key="setting:1">My Article</Menu.Item>
              <Menu.Item key="setting:2">My Favorite</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="Comment">
              <Menu.Item key="setting:3">Likes</Menu.Item>
              <Menu.Item key="setting:4">@Me</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="Setting">
              <Menu.Item key="setting:5">
                <Link to="/setting">Setting</Link>
              </Menu.Item>
              <Menu.Item key="setting:6" onClick={this.handleLogout.bind(this)}>
                Logout
              </Menu.Item>
            </MenuItemGroup>
          </SubMenu>
        )}
      </Menu>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogin: state.getIn(["header", "isLogin"]),
    accessModalVisible: state.getIn(["post", "accessModalVisible"]),
    avatar: state.getIn(["setting", "avatar"])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLogin() {
      dispatch(actionCreators.setLoginAction());
    },
    showAccessModal() {
      dispatch(actionCreators.showAccessModal());
    },
    handleLogout() {
      dispatch(actionCreators.handleLogoutAction());
    },
    handleSearch(value) {
      dispatch(actionCreators.handleSearchValAction(value));
    },
    handleUpdateAvatar(userid) {
      dispatch(actionCreators.handleUpdateAvatarAction(userid));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Header));
