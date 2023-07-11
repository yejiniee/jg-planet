import PropTypes from "prop-types"
import React from "react"
import styles from "../styles/ItemList.module.css"

export const ListItem = ({ text = "상품명", store = "당근"}) => {
    const renderLogo = () => {
    if (store === "당근") {
      return <img className={styles.itemstorelogo} alt="" src="/img/당근마켓 아이콘 1.png" />;
    } else if (store === "번개") {
      return <img className={styles.itemstorelogo} alt="" src="/img/번개장터 아이콘 1.png" />;
    } else if (store === "중고") {
      return <img className={styles.itemstorelogo} alt="" src="/img/중고나라 아이콘 1.png" />;
    }
      return null;
    };

    const handleImgClick = () => {
      alert("이미지 버튼 눌렸다\n(기능 추가 예정)");
    };

    const handleHeartClick = () => {
        alert("하트 버튼 눌렸다\n(기능 추가 예정)");
    };

    return (
        <div className={styles.listItem}>
          <div className={styles.imgContainer}>
            <img className={styles.itemimg} alt="" src="/img/빈 이미지.svg" onClick={handleImgClick}/>
            <button className={styles.heartButton} onClick={handleHeartClick}>
                <img className={styles.heartIcon} src="/img/heart_empty.png" alt="하트" />
            </button>
          </div>          
            {/*<HeartButton like={like} onClick={toggleLike}/>*/}
            <div className={styles.iteminfo}>
              {renderLogo()}
              {/*<img className={styles.itemstorelogo} alt="" src="/img/당근마켓 아이콘 1.png" />*/}
              <div className={styles.itemname}>{text}</div>
              <div className={styles.itempick}>찜 횟수</div>
              <div className={styles.itemprice}>가격</div> 
            </div>            
        </div>
    );
};
   
ListItem.propTypes = {
    text: PropTypes.string,
    store: PropTypes.string,
}