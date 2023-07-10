import PropTypes from "prop-types"
import React from "react"
import styles from "../styles/ItemList.module.css"

export const ListItem = ({ text = "상품"}) => {
    return (
        <div className={styles.itemlistbox}>
            <div className={styles.clabel}>{text}</div>
            <button>HI</button>
        </div>
    );
};
   
ListItem.propTypes = {
    text: PropTypes.string,
}