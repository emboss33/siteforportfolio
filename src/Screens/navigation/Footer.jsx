import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      {/* CTA 영역 */}
      <div className={styles.ctaSection}>
        <h2>3D모델링 어셋 빅데이터 보유</h2>
        <p>데이터바우처 지원사업으로 3D모델링 구매비용 최대 1000만원 지원</p>
        <a
          href="http://zilpungdatavoucher.com/bbs/write.php?bo_table=question"
          className={styles.ctaButton}
        >
          신청하기
        </a>
      </div>

      {/* 하단 Footer 정보 */}
      <div className={styles.infoSection}>
        <div className={styles.left}>
          <img
            src="https://zilpungdatavoucher.com/theme/basic/img/dava-logo-w.png"
            alt="STUDIO ZILPUNG"
            className={styles.logo}
          />
          <p>대표 이호</p>
          <p>광주광역시 수완로 12번길 30, 경승빌딩 2층</p>
          <div className={styles.sns}>
            <a href="#">
              <img
                src="https://zilpungdatavoucher.com/theme/basic/img/ft-insta-icon.png"
                alt="인스타그램"
              />
            </a>
            <a href="#">
              <img
                src="https://zilpungdatavoucher.com/theme/basic/img/ft-twitter-icon.png"
                alt="트위터"
              />
            </a>
            <a href="#">
              <img
                src="https://zilpungdatavoucher.com/theme/basic/img/ft-face-icon.png"
                alt="페이스북"
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <h4>공지사항</h4>
          <p className={styles.noticeEmpty}>게시물이 없습니다.</p>
        </div>

        <div className={styles.right}>
          <h4>Contact Us</h4>
          <ul>
            <li>
              <strong>연락처</strong> 010-9887-4717
            </li>
            <li>
              <strong>E-mail</strong> 3d@zilpung.com
            </li>
            <li>
              <strong>Fax</strong> 062-951-4717
            </li>
          </ul>
        </div>
      </div>

      <button onClick={handleScrollTop} className={styles.topBtn}>
        ▲
      </button>
    </footer>
  );
};

export default Footer;
