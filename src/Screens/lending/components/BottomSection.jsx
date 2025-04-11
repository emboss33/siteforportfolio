import React, { useEffect, useRef, useState } from "react";
import styles from "./BottomSection.module.css";
import Icon1 from "../images/aboutus_img01.png";
import Icon2 from "../images/aboutus_img02.png";
import Icon3 from "../images/aboutus_img03.png";

const BottomSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("동작중");
          setIsVisible(true);
          observer.unobserve(entry.target); // 1번만 실행하고 멈춤
        }
      },
      {
        threshold: 0.05, // 30% 보이면 작동
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ backgroundColor: "#1d1f26" }}>
      <section
        ref={sectionRef}
        className={`${styles.middleSection} ${isVisible ? styles.visible : ""}`}
      >
        <div className={styles.heading}>
          <h2>우리가 만드는 세계는 다릅니다</h2>
          <p>
            기획부터 제작까지, 하나의 세계관을 완성하는
            <br />
            스튜디오질풍만의 콘텐츠 프로세스를 소개합니다.
          </p>
        </div>

        <div className={styles.cardContainer}>
          <div className={`${styles.card} ${styles.card1}`}>
            <img src={Icon1} alt="IP 개발" />
            <h3>오리지널 IP 기획</h3>
            <p>스토리 중심의 기획으로 세계관부터 구축합니다.</p>
          </div>

          <div className={`${styles.card} ${styles.card2}`}>
            <img src={Icon2} alt="2D 3D 제작" />
            <h3>2D+3D 영상 제작</h3>
            <p>다양한 스타일의 애니메이션을 제공합니다.</p>
          </div>

          <div className={`${styles.card} ${styles.card3}`}>
            <img src={Icon3} alt="글로벌 유통" />
            <h3>글로벌 콘텐츠 유통</h3>
            <p>다국어/다채널로 IP를 확장시킵니다.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BottomSection;
