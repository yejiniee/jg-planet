import Footer from "./Footer";
import Header from "./Header";
import Category from "./Category";
import Sidebar from "./Sidebar";
import Content from "./Content";
import styles from "../../styles/ContentDetail.module.css";

const Layout = () => {
  return (
    <div>
      <Header></Header>
      <div className={styles.divcategory}>
        <Category></Category>
      </div>
      <div className={styles.divcontent}>
        <Content></Content>
      </div>
      <div className={styles.divsidebar}>
        <Sidebar></Sidebar>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
