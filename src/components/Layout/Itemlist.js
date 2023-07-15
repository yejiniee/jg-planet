import React from "react";
import { ListItem } from "../ListItem";
import styles from "../../styles/ItemList.module.css";
import dummy from "../../db/data.json";

const ItemList = () => {
  return (
    <div className={styles.itemlistcontent}>
      {dummy.products.map((item) => (
        <ListItem
          className={styles.listItem}
          key={item.id}
          store={item.store}
          price={item.price}
          title={item.title}
          src={item.thumbnail}
        />
      ))}
    </div>
  );
};

export default ItemList;
