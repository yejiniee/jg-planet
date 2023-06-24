import React, { Component } from "react";
import styles from "../../styles/ContentDetail.module.css";

class Footer extends Component {
  render() {
    return (
      <div className={styles.rectangleParent}>
        <div className={styles.groupInner} />
        <div className={styles.div19}>
          모든 상품들에 대하여 중고플래닛은 통신판매중개자로서 거래 당사자가
          아니며 판매 회원과 구매 회원 간의 상품거래 정보 및 거래에 관여하지
          않고 어떠한 의무와 책임도 부담하지 않습니다.
        </div>
        <div className={styles.tel0222875114Container}>
          <span>팀 몽실몽실</span>
          <span className={styles.tel0222875114}>
            <span className={styles.span}>{`  |  `}</span>
            <span>
              서울캠퍼스 (03016) 서울시 종로구 홍지문 2길 20 상명대학교 Tel :
              02-2287-5114
            </span>
          </span>
        </div>
      </div>
    );
  }
}
/*
const Footer = () => {
  return (
    <Footer>
      <div className={styles.rectangleParent}>
        <div className={styles.groupInner} />
        <div className={styles.div19}>
          모든 상품들에 대하여 중고플래닛은 통신판매중개자로서 거래 당사자가
          아니며 판매 회원과 구매 회원 간의 상품거래 정보 및 거래에 관여하지
          않고 어떠한 의무와 책임도 부담하지 않습니다.
        </div>
        <div className={styles.tel0222875114Container}>
          <span>팀 몽실몽실</span>
          <span className={styles.tel0222875114}>
            <span className={styles.span}>{`  |  `}</span>
            <span>
              서울캠퍼스 (03016) 서울시 종로구 홍지문 2길 20 상명대학교 Tel :
              02-2287-5114
            </span>
          </span>
        </div>
      </div>
    </Footer>
  );
};
*/
export default Footer;
