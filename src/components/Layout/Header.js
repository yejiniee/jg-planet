import styles from "../../styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.planetParent}>
        <img className={styles.planet} alt="" src="/img/임시로고.svg" />
      </div>
      <img
        className={styles.basketAlt3Icon}
        alt=""
        src="/img/basket-alt-3.svg"
      />
      <img
        className={styles.userCicrleDuotoneIcon}
        alt=""
        src="/img/user-cicrle-duotone.svg"
      />
      <div className={styles.line} />
      <div className={styles.groupItem} />
      <img className={styles.searchAltIcon} alt="" src="/img/search-alt.svg" />
      <div className={styles.div16}>상품명 입력</div>
    </div>
  );
};

export default Header;
