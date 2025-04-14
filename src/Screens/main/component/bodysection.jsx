import React from "react";
import num1 from "../../../Image/main/dava-m-num01.png";
import num2 from "../../../Image/main/dava-m-num02.png";
import num3 from "../../../Image/main/dava-m-num03.png";
import num5 from "../../../Image/main/dava-m-num05.png";
import num6 from "../../../Image/main/dava-m-num06.png";
import sectionImage2 from "../../../Image/main/dava-m-img01.png";
import flowImage from "../../../Image/main/dava-m-img02.png";
import styles from "./bodysection.module.css";
import Datatable from "./DataTable";
import section05_items from "./bodysection_05.js";

const Bodysection = ({ handleToggleCalendar }) => {
  return (
    <div className={styles.mainContainer}>
      {/* 🔹 헤더 영역 */}
      <div className={styles.sectionHeader}>
        <h4>
          2025 데이터바우처 지원사업 <br />
          <span>스튜디오질풍</span>과 함께!
        </h4>
      </div>

      {/* 🔹 첫 번째 정보 섹션 */}
      <div className={styles.sectionContainer}>
        {/* 왼쪽 숫자 아이콘 */}
        <div className={styles.sectionNumber}>
          <img src={num1} alt="섹션 번호 1" />
        </div>

        {/* 오른쪽 콘텐츠 */}
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>데이터바우처 지원사업이란?</h2>

          <p className={styles.sectionText}>
            국내 중소기업, 스타트업, 1인 창조기업 등을 대상으로, 데이터 기반
            서비스 개발, 분석 등에 필요한
            <br />
            데이터 구매 또는 가공(일반/AI) 서비스를 전문기업으로부터 제공받을 수
            있도록 정부가 데이터
            <br />
            구매비용을 지원하는 사업입니다.
          </p>

          <p className={styles.sectionText}>
            웹툰 3D배경, 소품, 모델링 구매비용이 부담되는 웹툰 창작자 및 관련
            기업 분들에게는&nbsp;
            <span>데이터바우처 지원 사업</span>에 참여하여 <br /> 구매비용에
            대한 부담을 크게 줄일 수 있습니다.
          </p>

          {/* 버튼 */}
          <div className={styles.buttonGroup}>
            <a
              href="https://kdata.or.kr/datavoucher/index.do"
              target="_blank"
              rel="noreferrer"
            >
              <button className={styles.primaryButton}>자세히 보기</button>
            </a>
            <button
              className={styles.secondaryButton}
              onClick={handleToggleCalendar}
            >
              사업 일정 확인하기
            </button>
          </div>
        </div>
      </div>

      {/* 🔹 두 번째 정보 섹션 */}
      <div className={styles.section02_Container}>
        {/* 왼쪽: 이미지 */}
        <div className={styles.sectionImage}>
          <img src={sectionImage2} alt="도시 배경 이미지" />
        </div>

        {/* 오른쪽: 텍스트 영역 */}
        <div className={styles.sectionContent}>
          <div className={styles.section2_Number}>
            <img src={num2} alt="섹션 번호 2" />
          </div>
          <h2 className={styles.section2_Title}>상품정보</h2>
          <p className={styles.sectionSmallText}>
            현대시대 1440종, 판타지 111종, 조선시대 365종,
            <br />
            근대시대 150종, 일제강점기 95종으로,
            <br />총 2161종의 3D배경 모델링 어셋을 지원하고 있습니다.
          </p>
          <div className={styles.buttonGroup}>
            <a href="/product-detail" className={styles.primaryButton}>
              상품 상세보기
            </a>
          </div>
        </div>
      </div>

      {/* 🔹 세 번째 정보 섹션 */}
      <div className={styles.section03_Container}>
        {/* 왼쪽: 숫자 아이콘 */}
        <div className={styles.sectionNumber}>
          <img src={num3} alt="섹션 번호 3" />
        </div>

        {/* 오른쪽: 텍스트 + 이미지 플로우 */}
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>진행과정</h2>
          <div className={styles.processFlowImage}>
            <img src={flowImage} alt="진행과정 플로우" />
          </div>
        </div>
      </div>

      {/* 🔹 네 번째 정보 섹션 */}
      <Datatable />

      {/* 다섯번째 섹션 */}
      <div className={styles.sectionContainer}>
        {/* 왼쪽: 숫자 아이콘 */}
        <div className={styles.sectionNumber}>
          <img src={num5} alt="섹션 번호 5" />
        </div>
        <h2 className={styles.sectionTitle}>진행과정</h2>
        {/* 오른쪽: 텍스트 + 이미지 플로우 */}
        <div className={styles.supportGrid}>
          {section05_items.map((item, idx) => (
            <div className={styles.supportItem} key={idx}>
              <img src={item.icon} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6번째 섹션 */}
      <div className={styles.sectionContainer}>
        {/* 왼쪽: 숫자 아이콘 */}
        <div className={styles.sectionNumber}>
          <img src={num6} alt="섹션 번호 6" />
        </div>

        {/* 오른쪽: 텍스트 + 이미지 플로우 */}
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>지원요건</h2>
          <p
            className={styles.sectionSmallText}
            style={{ fontSize: "19px", margin: 10 }}
          >
            데이터바우처를 제공받은 수요기업은 데이터활용을 통한 마케팅 전략
            수립, 비즈니스 모델개발, 데이터 기반의 <br /> 제품 및 서비스 등의
            산출물을 사업수행 결과로 제시하여야 함.
          </p>

          <span
            className={styles.sectionSmallText}
            style={{ fontSize: "12px", color: "#00328c" }}
          >
            * 예비창업자는 사업계획서의 창업 아이템 관련 업종으로 협약종료일
            2개월 이전에 중소기업 기본법 상의 창업(사업자등록)을 이행하여야 함.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Bodysection;
