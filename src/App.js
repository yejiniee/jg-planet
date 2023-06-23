import "./App.css";
import React, { Component } from "react";
import NotFoundPage from "./components/NotFoundPage";

class App extends Component {
  //컴포넌트를 만드는 코드
  render() {
    return (
      <div className="App">
        <NotFoundPage></NotFoundPage>
      </div>
    );
  }
}

export default App;
