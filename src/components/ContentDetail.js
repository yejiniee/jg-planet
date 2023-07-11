import styles from "../styles/ContentDetail.module.css";
import React, { useState, useEffect } from "react";

import HeartButton from "./HeartButton";
import axios from "axios";

const url = "https://web.joongna.com/"; //상품의 원글 url-추후 수정

const ContentDetail = () => {
  const [heart, setHeart] = useState(false);

  /*
  //백에서 찜여부 데이터 받아와야 확인가능... 근데 어떻게 하죠? 으아아아
  useEffect(async () => {
    const fetchData = async () => {
      const res = await axios.get("http//localhost:8080/get");
      if (res.data.type === "heart") setHeart(true);
    };
    fetchData();
  }, []);

  const toggleLike = async (e) => {
    const res = await axios.post("http//localhost:8080/post"); // [POST] 사용자가 좋아요를 누름 -> DB 갱신
    setHeart(!heart);
  };
  */

  const toggleLike = async (e) => {
    setHeart(!heart);
  };

  return (
    <div className={styles.div}>
      <img className={styles.icon} alt="" src="/img/빈 이미지.svg" />
      <div className={styles.parent}>
        <b className={styles.title}>어쩌구 저쩌구 신발</b>
        <b className={styles.price}>140,000원</b>
        <div className={styles.category}>{`홈 > 여성의류 > 신발`}</div>
        <div className={styles.name}>바나나맛맛있어요</div>
        <div className={styles.date}>2023-02-25</div>
        <div className={styles.views}>조회 20000</div>
        <div className={styles.heart}>찜 100+</div>
      </div>
      <HeartButton heart={heart} onClick={toggleLike}></HeartButton>

      <div
        className={styles.btn_golink}
        onClick={() => {
          window.open(url);
        }}
      >
        <div className={styles.child} />
        <div className={styles.div7}>보러 가기</div>
      </div>

      <div className={styles.div8}>여기는 본문 긁어온 것...</div>
      <div className={styles.div9}>
        <p className={styles.p}>거래거래</p>
        <p className={styles.p}>대충 거래글 끝</p>
      </div>
      <div className={styles.line}></div>
      <div className={styles.group}>
        <img className={styles.icon5} alt="" src="/img/빈 이미지.svg" />
        <div className={styles.div12}>
          <div className={styles.inner} />
          <img className={styles.div13} alt="" src="/img/right-side.svg" />
        </div>
        <div className={styles.div14}>
          <div className={styles.inner} />
          <img className={styles.div15} alt="" src="/img/left-side.svg" />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.div20}>중고나라</div>
        <div className={styles.div21}>
          <img
            className={styles.icon6}
            alt=""
            src="/img/중고나라 아이콘 1.png"
          />
        </div>
      </div>
    </div>
  );
};

export default ContentDetail;
