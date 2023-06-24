import React, { Component } from "react";
import styles from "../../styles/ContentDetail.module.css";

class Header extends Component {
  render() {
    return (
      <div className={styles.groupParent}>
        <div className={styles.planetParent}>
          <div className={styles.planet}>중고PLANET</div>
          <img className={styles.planetIcon} alt="" src="/planet.svg" />
        </div>
        <img className={styles.basketAlt3Icon} alt="" src="/basket-alt-3.svg" />
        <img
          className={styles.userCicrleDuotoneIcon}
          alt=""
          src="/user-cicrle-duotone.svg"
        />
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <img className={styles.searchAltIcon} alt="" src="/search-alt.svg" />
        <div className={styles.div16}>상품명 입력</div>
      </div>
    );
  }
}
/*
const Header = () => {
  return (
    <Header>
      <div className={styles.groupParent}>
        <div className={styles.planetParent}>
          <div className={styles.planet}>중고PLANET</div>
          <img className={styles.planetIcon} alt="" src="/planet.svg" />
        </div>
        <img className={styles.basketAlt3Icon} alt="" src="/basket-alt-3.svg" />
        <img
          className={styles.userCicrleDuotoneIcon}
          alt=""
          src="/user-cicrle-duotone.svg"
        />
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <img className={styles.searchAltIcon} alt="" src="/search-alt.svg" />
        <div className={styles.div16}>상품명 입력</div>
      </div>
    </Header>
  );
};
*/
export default Header;
