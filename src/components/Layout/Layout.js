import Footer from "./Footer";
import Header from "./Header";
import Category from "./Category";
import Sidebar from "./Sidebar";
import Content from "./Content";
import ItemList from "./Itemlist";
import styles from "../../styles/ContentDetail.module.css";
import { Outlet } from "react-router-dom";
import Home from "./Home";

const Layout = () => {
  return (
    <div>
      <Header></Header>
      <Footer></Footer>
      <Outlet></Outlet>
      <div className={styles.divsidebar}>
        <Sidebar></Sidebar>
      </div>
    </div>
  );
};

export default Layout;
