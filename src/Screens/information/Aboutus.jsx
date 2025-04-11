import React from "react";
import styles from "./aboutus.module.css";
import aboutBusinessList from "./data/AboutBusiness";

const AboutUs = () => {
  console.log(aboutBusinessList);

  return (
    <div style={{ display: "block" }}>
      <main className={styles.aboutUs_Background}>
        <div className={styles.aboutUs_text}>
          <h1>"창작을 선도하는 가능성의 바람"</h1>
          <p>
            스튜디오질풍은 게임, 영화, 드라마 등 문화콘텐츠 IP웹툰 제작사로
            미국, 일본, 중국, 대만, 유럽, 동남아시아 등 전 세계에 웹툰을
            서비스하고 있으며, 3D 배경 / 2D 소스 제작도 함께하고 있습니다.
          </p>
          <p>
            창작자 분들께 큰 부담이 되지 않게 3D 배경을 제공하여, 웹툰의
            완성도를 높이고 제작 환경에 도움이 되고자 합니다.
          </p>
        </div>
      </main>

      {/* ✅ 주요 사업현황 */}
      <section className={styles.businessSection}>
        <h2 className={styles.businessTitle}>주요사업현황</h2>
        <div className={styles.businessList}>
          {aboutBusinessList.map((item, idx) => (
            <div className={styles.businessItem} key={idx}>
              <div className={styles.businessText}>
                <h3 className={styles.businessItemTitle}>{item.title}</h3>
                <ul>
                  {item.desc.map((text, i) => (
                    <li key={i}>{text}</li>
                  ))}
                </ul>
                {item.button && (
                  <a
                    href={item.button.link}
                    className={styles.businessBtn}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.button.text}
                  </a>
                )}
              </div>
              <div className={styles.businessImage}>
                <img src={item.image} alt={item.title} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
