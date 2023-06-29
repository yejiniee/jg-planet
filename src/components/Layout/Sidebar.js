import styles from "../../styles/Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.div}>
      <div className={styles.box}>
        <div className={styles.title}>최근 본 상품</div>
        <img
          className={styles.item}
          alt=""
          src="../../assets/Img_box_fill.svg"
        />
      </div>
    </div>
  );
};
export default Sidebar;
