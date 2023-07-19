import styles from "../../styles/css/Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.div}>
      <div className={styles.box}>
        <div className={styles.title}>최근 본 상품</div>
        <img className={styles.item} alt="" src="/img/빈 이미지.svg" />
      </div>
    </div>
  );
};
export default Sidebar;
