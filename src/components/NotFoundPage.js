import React, { Component } from "react";
import styles from "./NotFoundPage.module.css";

class NotFound extends Component {
  render() {
    return (
      <div className={styles.div}>
        <div className={styles.div1}>
          <span>게시글이</span>
          <span className={styles.span}> 삭제</span>
          <span className={styles.span1}>되었거나</span>
          <span className={styles.span}>{` 존재하지 않아요 `}</span>
          <span>:(</span>
        </div>
        <div className={styles.div2}>새로고침을 눌러 홈으로 돌아가주세요.</div>
      </div>
    );
  }
}

export default NotFound;
