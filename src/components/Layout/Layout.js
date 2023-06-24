import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

class Layout extends Component {
  //헤더, 푸터, 사이드바
  render() {
    return (
      <div>
        <Header></Header>
        <Sidebar></Sidebar>
        <Footer></Footer>
      </div>
    );
  }
}

export default Layout;
