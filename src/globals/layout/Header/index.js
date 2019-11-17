import React, { Component } from "react";
import { Layout } from "antd";
import Menu from "../Sider";

import "./header.style.scss";
const { Header } = Layout;

class MainHeader extends Component {
  render() {
    return (
      <Header className="globalHeader">
        <div className="logo" />
        <Menu />
      </Header>
    );
  }
}

export default MainHeader;
