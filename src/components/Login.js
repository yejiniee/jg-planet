import React, { Component } from "react";
import styles from "../styles/Login.module.css";
import Planet from "../assets/Planet.svg";
import googlebtn from "../assets/googlebtn.png"
import kakaobtn from "../assets/kakaobtn.png"


class Login extends Component {

  //로그인페이지
  render() {
    return (
      <div className = {styles.container}>
      <div><button /*onClick={}*/ className = {styles.exit}>X</button></div><br></br>
      <span className={styles.planet}>중고PLANET</span>
      <img
          className={styles.planetIcon}
          alt=""
          src={Planet}/><br></br><br></br>
      <div className = {styles.h2}> 로그인하여 더 많은 서비스를 이용하기 </div><br></br>
            <div><button className = {styles.kakao}>{/*onClick={kakaoLogin}>*/}
              <img
                src={kakaobtn}
                width="222"
                alt="카카오 로그인 버튼"
              />
            </button>
            </div><br></br><div>
            <button className = {styles.google}>{/*onClick={googleLogin}>*/}
              <img
                src={googlebtn}
                width="222"
                alt="구글 로그인 버튼"
              />
            </button></div>
            <div className={styles.guideline}>______________________________________________________</div>
            <span className={styles.guide}> 도움이 필요하시면 </span>
            <span className={styles.guide2}>이메일</span>
            <span className={styles.guide}>로 연락 부탁드립니다. </span>
      </div>
    );
  }
}

export default Login;
