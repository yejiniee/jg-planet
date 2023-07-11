import React from "react";
import { ListItem } from "../ListItem"
import styles from "../../styles/ItemList.module.css";

const ItemList = () => {
    return (
        <div className={styles.itemlistcontent}>
            <ListItem className={styles.listItem}/>
            <ListItem className={styles.listItem}/>
            <ListItem className={styles.listItem}/>
            <ListItem className={styles.listItem}/>
            <ListItem className={styles.listItem}/>          
            <ListItem className={styles.listItem}/>
        </div>
    );
};
  
export default ItemList;
  