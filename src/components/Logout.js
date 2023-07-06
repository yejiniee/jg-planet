import React, { Component } from "react";
import styles from "../styles/Logout.module.css";
import Planet from "../assets/Planet.svg";

class Logout extends Component {

  //로그아웃 페이지
  render() {
    return (
      <div className = {styles.container}>

      <span className={styles.planet}>중고PLANET</span>
      <img
          className={styles.planetIcon}
          alt=""
          src={Planet}/><br></br><br></br>
      <div className = {styles.h2}> 로그아웃 하시겠습니까? </div><br></br>
            <div><button className = {styles.no}> 취소 </button>
            <button className = {styles.yes}> 확인 </button></div>
      </div>
    );
  }
}

export default Logout;

