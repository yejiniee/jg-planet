import styles from "../../styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.planetParent}>
        <div className={styles.planet}>중고PLANET</div>
        <img
          className={styles.planetIcon}
          alt=""
          src="../../assets/Planet.svg"
        />
      </div>
      <img
        className={styles.basketAlt3Icon}
        alt=""
        src="../../assets/basket-alt-3.svg"
      />
      <img
        className={styles.userCicrleDuotoneIcon}
        alt=""
        src="/assets/user-cicrle-duotone.svg"
      />
      <div className={styles.line} />
      <div className={styles.groupItem} />
      <img
        className={styles.searchAltIcon}
        alt=""
        src="/assets/search-alt.svg"
      />
      <div className={styles.div16}>상품명 입력</div>
    </div>
  );
};

export default Header;
