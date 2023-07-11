import PropTypes from "prop-types"
import React from "react"
import styles from "../styles/ItemList.module.css"

export const ListItem = (props, { text = "상품"}) => {
    const handleHeartClick = () => {
        alert("버튼 눌렸다");
      };


    return (
        <div className={styles.listItem}>
          <div className={styles.imgContainer}>
            <img className={styles.itemimg} alt="" src="/img/빈 이미지.svg" />
            <button className={styles.heartButton} onClick={handleHeartClick}>
                <img className={styles.heartIcon} src="/favicon.ico" alt="하트" />
            </button>
          </div>          
            {/*<HeartButton like={like} onClick={toggleLike}/>*/}
            <div className={styles.iteminfo}>
              <div className={styles.itemname}>{text}</div>
              <div className={styles.itempick}>찜목록</div>
              <div className={styles.itemprice}>가격</div> 
            </div>

            
        </div>
    );
};
   
ListItem.propTypes = {
    text: PropTypes.string,
}