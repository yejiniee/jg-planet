import Category from "./Category";
import ItemList from "./Itemlist";
import styles from "../../styles/ContentDetail.module.css";

const Home = () => {
  return (
    <div>
      <div className={styles.divcategory}>
        <Category></Category>
      </div>
      <div className={styles.divcontent}>
        <ItemList></ItemList>
      </div>
    </div>
  );
};
export default Home;
