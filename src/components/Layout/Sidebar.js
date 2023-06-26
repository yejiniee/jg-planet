import styles from "../../styles/Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.div10}>
      <div className={styles.item}>
        <div className={styles.div11}>최근 본 상품</div>
        <img className={styles.icon} alt="" src="/1.svg" />
      </div>
    </div>
  );
};
export default Sidebar;
