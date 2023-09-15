import React, {Component} from 'react';
import styles from "../styles/css/ContentDetail.module.css";

class Modal extends Component {
  render() {
    const { image, onClose } = this.props;

    return (
      <div className={styles.modaloverlay}>
        <span className={styles.closebtn} onClick={onClose}>&times;</span>
        <div className={styles.modalcontent}>
          <img className={styles.modalImage} src={image} alt="Modal Image" />
        </div>
      </div>
    );
  }
}

export default Modal;
