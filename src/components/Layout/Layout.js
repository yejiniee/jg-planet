import Footer from "./Footer";
import Header from "./Header";
import Category from "./Category";
import Sidebar from "./Sidebar";
import Content from "./Content";
import ItemList from "./Itemlist";
import styles from "../../styles/ContentDetail.module.css";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header></Header>
      <div className={styles.divcategory}>
        <Category></Category>
      </div>
      <div className={styles.divcontent}>
        {/* 페이지 확인 */}
        {/*<Outlet></Outlet>*/}
        <ItemList></ItemList>
      </div>
      <Footer></Footer>
      <div className={styles.divsidebar}>
        <Sidebar></Sidebar>
      </div>
    </div>
  );
};

export default Layout;
