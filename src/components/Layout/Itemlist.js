import React from "react";
import { ListItem } from "../ListItem"
import styles from "../../styles/ItemList.module.css";

const ItemList = () => {
    return (
        <div className={styles.itemlistbox}>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
        </div>
    );
};
  
export default ItemList;
  