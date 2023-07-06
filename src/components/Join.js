import React, { Component } from "react";
import styles from "../styles/Join.module.css";
import Planet from "../assets/Planet.svg";

class Join extends Component {

  //로그아웃 페이지
  render() {
    return (
      <div className = {styles.container}>

      <span className={styles.planet}>중고PLANET</span>
      <img
          className={styles.planetIcon}
          alt=""
          src={Planet}/><br></br><br></br>
      <div className = {styles.h2}> 로그인/가입완료 </div><br></br>
      <div className = {styles.h3}> 환영합니다! </div><br></br>
            <div><button className = {styles.cont}> 계속하기 </button></div>
      </div>
    );
  }
}

export default Join;

