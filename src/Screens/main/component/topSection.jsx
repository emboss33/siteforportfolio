import React from "react";
import styles from "./topSection.module.css"; // CSS Module 사용

const TopSection = () => {
  return (
    <main className={styles.mainBackground}>
      <div className={styles.mainText}>
        <h1>데이터바우처 지원사업</h1>
        <p>
          데이터 기반 서비스 개발, 분석 등에 필요한 데이터 구매
          <br />
          또는 가공(일반/AI)서비스를 전문기업으로부터
          <br />
          제공받을 수 있도록 정부가 데이터 구매비용을
          <br />
          지원하는 사업입니다.
        </p>
        <div className={styles.mainButtons}>
          <a
            href="https://kdata.or.kr/datavoucher/index.do"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            자세히 보기
          </a>
          <a href="/apply" className={styles.buttonPrimary}>
            신청하기
          </a>
        </div>
      </div>
    </main>
  );
};

export default TopSection;
