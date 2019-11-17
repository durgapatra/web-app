import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Icon } from "antd";
import "./sider.style.scss";
import { ReactComponent as Family } from "../../../assets/images/family.svg";
import { ReactComponent as ContentUs } from "../../../assets/images/customer-service.svg";
const { SubMenu } = Menu;

class MainMenu extends Component {
  render() {
    return (
      <Menu
        className="globalMenu"
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="1">
          <Link to="/home">
            <Icon type="home" />
            Home
          </Link>
        </Menu.Item>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Icon component={Family} />
              Family
            </span>
          }
        >
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </SubMenu>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Icon component={ContentUs} />
              contact us
            </span>
          }
        >
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default MainMenu;
