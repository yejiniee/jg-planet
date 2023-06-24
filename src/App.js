import "./App.css";
import React, { Component } from "react";
import NotFoundPage from "./components/NotFoundPage";
import ContentDetail from "./components/ContentDetail";
import Layout from "./components/Layout/Layout";

class App extends Component {
  //컴포넌트를 만드는 코드
  render() {
    return (
      <div className="App">
        <Layout></Layout>
      </div>
    );
  }
}

export default App;
