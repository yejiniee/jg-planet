import React, {useState} from "react";
import { CategoryItem } from "../CategoryItem"
import styles from "../../styles/Category.module.css"

/* 아코디언 컴포넌트 이용 */
const CategoryBox = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <div className={styles.categorybox}>
      
    <button onClick={toggleAccordion}>
        {isAccordionOpen ? "Close" : "Category"}
    </button>

      {isAccordionOpen && (
        <div className={styles.accordionContent}>
          {/* Add your accordion content here */}
          <CategoryItem className={styles.categoryItem-0} text="여성패션"/>
          <CategoryItem className={styles.categoryItem-1} text="남성패션"/>
          <CategoryItem className={styles.categoryItem-2} text="화장품 / 미용"/>
          <CategoryItem className={styles.categoryItem-3} text="가구 / 인테리어"/>
          <CategoryItem className={styles.categoryItem-4} text="식품"/>
          <CategoryItem className={styles.categoryItem-5} text="출산 / 유아동"/>
          <CategoryItem className={styles.categoryItem-6} text="반려동물용품"/>
          <CategoryItem className={styles.categoryItem-7} text="생활(주방/가전)"/>
          <CategoryItem className={styles.categoryItem-8} text="디지털 / 컴퓨터"/>
          <CategoryItem className={styles.categoryItem-9} text="스포츠 / 레저"/>
          <CategoryItem className={styles.categoryItem-10} text="건강 / 의료용품"/>
          <CategoryItem className={styles.categoryItem-11} text="문구류"/>
        </div>
      )}  
    </div>

    
  );
};
export default CategoryBox;