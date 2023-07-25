import React, { useState, useEffect } from "react";
import { ListItem } from "../ListItem";
import styles from "../../styles/css/ItemList.module.css";
import dummy from "../../db/data.json";
import axios from "axios";

const ItemList = () => {
  return (
    <div className={styles.itemlistcontent}>
      {dummy.products.map((item) => (
        <ListItem
          className={styles.listItem}
          key={item.id}
          id={item.id}
          store={item.store}
          price={item.price}
          title={item.title}
          src={item.thumbnail}
          heartCnt={item.heartCnt}
        />
      ))}
    </div>
  );
};

/* 백엔드랑 연동 후 제대로 상품목록(data)이 가져와지는지 확인 필요
const ItemList = () => {
  
  const [data, setData] = useState(null); //전체 상품데이터
  const fetchData = async () => {
    //백에서 중고상품 크롤링데이터 가져오기
    try {
      //응답 성공
      await axios
        .get("http//localhost:8080/main/list") //api문서 참고했는데 url 이거 맞는지..
        .then((response) => {
          console.log(response.data);
          setData(response); //setData()함수를 사용해 data로 저장
        });
    } catch (error) {
      //응답 실패
      console.error(error);
      alert("Error데이터를 불러올 수 없습니다");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.itemlistcontent}>
      {data.map((item) => (
        <ListItem
          className={styles.listItem}
          key={item.id}
          id={item.id}
          store={item.store}
          price={item.price}
          title={item.title}
          src={item.thumbnail}
          heartCnt={item.heartCnt}
        />
      ))}
    </div>
  );
};
*/

export default ItemList;
