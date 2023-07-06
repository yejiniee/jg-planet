import PropTypes from "prop-types"
import React from "react"
import styles from "../styles/Category.module.css"

export const CategoryItem = ({ text = "여성패션"}) => {
    return (
        <div className={styles.categoryItem}>
            <input type="checkbox" />
            <div className={styles.clabel}>{text}</div>
        </div>
    );
};

CategoryItem.propTypes = {
    text: PropTypes.string,
}