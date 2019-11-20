import React, { Component } from "react";
import { Layout } from "antd";
import Menu from "../Sider";

import "./header.style.scss";
const { Header } = Layout;

class MainHeader extends Component {
  render() {
    return (
      <>
        <Header className="logo-header">
          <img
            src="http://www.mehsana42golprajapatisamaj.org/wp-content/uploads/2016/12/final-web-logo.png"
            alt="Mehsana 42 Gol Prajapati Samaj"
          />
          >
        </Header>
        <Header className="globalHeader">
          <Menu />
        </Header>
      </>
    );
  }
}

export default MainHeader;
