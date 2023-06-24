import React, { Component } from "react";
import styles from "../styles/ContentDetail.module.css";

class ContentDetail extends Component {
  //제품상세페이지
  render() {
    return (
      <div className={styles.div}>
        <img className={styles.icon} alt="" src="/.svg" />
        <div className={styles.parent}>
          <b className={styles.b}>어쩌구 저쩌구 신발</b>
          <b className={styles.b1}>140,000원</b>
          <div className={styles.div1}>{`홈 > 여성의류 > 신발`}</div>
          <div className={styles.div2}>바나나맛맛있어요</div>
          <div className={styles.div3}>2023-02-25</div>
          <div className={styles.div4}>조회 20000</div>
          <div className={styles.div5}>찜 100+</div>
        </div>
        <img className={styles.imgBoxFillIcon} alt="" src="/img-box-fill.svg" />
        <img
          className={styles.imgBoxFillIcon1}
          alt=""
          src="/img-box-fill.svg"
        />

        <div className={styles.div6}>
          <div className={styles.child} />
        </div>
        <div className={styles.div7}>보러 가기</div>
        <div className={styles.div8}>여기는 본문 긁어온 것...</div>
        <div className={styles.div9}>
          <p className={styles.p}>거래거래</p>
          <p className={styles.p}>대충 거래글 끝</p>
        </div>
        <img className={styles.lineIcon} alt="" src="/line.svg" />
        <div className={styles.group}>
          <img className={styles.icon5} alt="" src="/5.svg" />
          <div className={styles.div12}>
            <div className={styles.inner} />
            <div className={styles.div13}>{`>`}</div>
          </div>
          <div className={styles.div14}>
            <div className={styles.inner} />
            <div className={styles.div15}>{`<`}</div>
          </div>
        </div>

        <div className={styles.state}>
          <div className={styles.property1default}>
            <div className={styles.property1defaultChild} />
            <div className={styles.div17}>찜해제</div>
          </div>
          <div className={styles.property1default1}>
            <div className={styles.property1defaultItem} />
            <div className={styles.div17}>찜하기</div>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.div20}>중고나라</div>
          <div className={styles.div21}>
            <img className={styles.icon6} alt="" src="/--1@2x.png" />
          </div>
        </div>
      </div>
    );
  }
}

export default ContentDetail;
