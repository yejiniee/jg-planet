import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import HeartButtonMain from "./HeartButtonMain"
import styles from "../styles/ItemList.module.css"

export const ListItem = ({ text = "상품명", store = "당근", cost = "0" }) => {
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
      {/* 기능 추가 */}
    };

    const handleHeartClick = () => {
      setLike(!like)  
    };

    const [like, setLike] = useState(false)
    {/* const [like, setLike] = useState(false)

    useEffect(async () => {
      const fetchData = async () => {
        const res = await axios.get(...)
        if (res.data.type === 'liked') setLike(true)
      }
      fetchData()
    }, []); */}
    

    return (
        <div className={styles.listItem}>
          <div className={styles.imgContainer}>
            <a href="/ContentDetail"><img className={styles.itemimg} alt="" src="/img/빈 이미지.svg" onClick={handleImgClick}/></a>
            <HeartButtonMain like={like} onClick={handleHeartClick}/>
            {/* <button className={styles.heartButton} onClick={handleHeartClick}>
                <img className={styles.heartIcon} src="/img/heart_empty.png" alt="하트" />
            </button>*/}
            
          </div>          
            <div className={styles.iteminfo}>
              {renderLogo()}
              <div className={styles.itemname}>{text}</div>
              <div className={styles.itempick}>찜 횟수</div>
              <div className={styles.itemprice}>{cost} 원</div> 
            </div>            
        </div>
    );
};
   
ListItem.propTypes = {
    text: PropTypes.string,
    store: PropTypes.string,
}