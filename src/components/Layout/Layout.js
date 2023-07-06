import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Content from "./Content";
import styles from "../../styles/ContentDetail.module.css";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header></Header>
      <div className={styles.divcontent}>
        <Outlet></Outlet>
      </div>
      <div className={styles.divsidebar}>
        <Sidebar></Sidebar>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
