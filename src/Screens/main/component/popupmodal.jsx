import React from 'react';
import Modal from 'react-modal';
import styles from './popupmodal.module.css';

/**
 * @param {Object} props
 * @param {boolean} props.showCalendar
 * @param {() => void} props.handleToggleCalendar
 */
const PopupModal = ({ showCalendar, handleToggleCalendar }) => {
  return (
    <Modal
      isOpen={showCalendar}
      onRequestClose={handleToggleCalendar}
      contentLabel="사업일정 팝업"
      className={styles.customModal}
      overlayClassName={styles.customOverlay}
      closeTimeoutMS={300}
    >
      <div className={styles.cpTopBox}>
        <div className={styles.cpTitle}>사업일정</div>
        <div className={styles.cpClose}>
          <button className={styles.closeBtn} onClick={handleToggleCalendar}>
            <img
              src="https://zilpungdatavoucher.com/theme/basic/img/pop-close.png"
              alt="닫기"
            />
          </button>
        </div>
      </div>

      <div className={styles.cpInfoBox}>
        <ul className={styles.cpBulletList}>
          <li><span>구매공모</span> 2월 중순 ~ 3월 말</li>
          <li><span>일반가공 공모</span> 2월 중순 ~ 3월 말</li>
          <li><span>구매공모</span> 2월 중순 ~ 3월 말</li>
          <li><span>구매공모</span> 6월 1일 ~ 11월 30일</li>
        </ul>
      </div>
    </Modal>
  );
};

export default PopupModal;
