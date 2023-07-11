import React from "react";
import { ListItem } from "../ListItem"
import styles from "../../styles/ItemList.module.css";

const ItemList = () => {
    return (
        <div className={styles.itemlistcontent}>
            <ListItem className={styles.listItem} store="번개"/>
            <ListItem className={styles.listItem} store="중고"/>
            <ListItem className={styles.listItem} store="당근"/>
            <ListItem className={styles.listItem} store="번개"/>
            <ListItem className={styles.listItem} store="당근"/>          
            <ListItem className={styles.listItem} store="당근"/>
        </div>
    );
};
  
export default ItemList;
  