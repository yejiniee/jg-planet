import React, { Component } from "react";
import styles from "../../styles/ContentDetail.module.css";

class Sidebar extends Component {
  render() {
    return (
      <div className={styles.div10}>
        <div className={styles.item} />
        <div className={styles.div11}>최근 본 상품</div>
        <img className={styles.icon1} alt="" src="/1.svg" />
        <img className={styles.icon2} alt="" src="/2.svg" />
        <img className={styles.icon3} alt="" src="/3.svg" />
        <img className={styles.icon4} alt="" src="/4.svg" />
      </div>
    );
  }
}
/*
const Sidebar = () => {
  return (
    <Sidebar>
      <div className={styles.div10}>
        <div className={styles.item} />
        <div className={styles.div11}>최근 본 상품</div>
        <img className={styles.icon1} alt="" src="/1.svg" />
        <img className={styles.icon2} alt="" src="/2.svg" />
        <img className={styles.icon3} alt="" src="/3.svg" />
        <img className={styles.icon4} alt="" src="/4.svg" />
      </div>
    </Sidebar>
  );
};
*/
export default Sidebar;
