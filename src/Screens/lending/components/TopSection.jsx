import React from "react";
import styles from "./TopSection.module.css";
import TopsectionVideo from "../videos/topSectionVideo.mp4";
// import TopsectionVideo1 from "../videos/background1.mp4";
// import desrtVideo from "../videos/desert.mp4";
const TopSection = () => {
  return (
    <div className={styles.Topcontainer}>
      <video autoPlay loop muted className={styles.backgroundvideo}>
        <source src={TopsectionVideo} type="video/mp4" />
      </video>
      <div className={styles.Topsection}>
        <h1>창작을 선도하는 가능성의 바람</h1>
        <p className={styles.TopSection_first_text}>
          게임, 영화, 드라마 등 문화콘텐츠 IP 웹툰 제작
        </p>
        <p className={styles.TopSection_second_text}>
          전 세계를 무대로 3D 배경과 2D 소스로 상상을 현실로
        </p>
      </div>
    </div>
  );
};

export default TopSection;
