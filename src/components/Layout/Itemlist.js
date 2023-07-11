import React from "react";
import { ListItem } from "../ListItem"
import styles from "../../styles/ItemList.module.css";

const ItemList = () => {
    return (
        <div className={styles.itemlistcontent}>
            <ListItem className={styles.listItem} store="번개" cost="23000" />
            <ListItem className={styles.listItem} store="중고" cost="34200"/>
            <ListItem className={styles.listItem} store="당근" cost="8000"/>
            <ListItem className={styles.listItem} store="번개" cost="72000"/>
            <ListItem className={styles.listItem} store="당근" cost="30000"/>          
            <ListItem className={styles.listItem} store="당근" cost="18000"/>
        </div>
    );
};
  
export default ItemList;
  