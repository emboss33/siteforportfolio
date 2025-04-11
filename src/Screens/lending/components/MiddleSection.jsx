import React, { useRef } from "react";
import styles from "./MiddleSection.module.css";

import girlThumbnail from "../videos/cardsection/girlanimation.jpg";
import girlVideo from "../videos/cardsection/girlanimation.mp4";

import magitionThumbnail from "../videos/cardsection/magition.jpg";
import magitionVideo from "../videos/cardsection/magition.mp4";

import middleThumbnail from "../videos/cardsection/middleVideo.jpg";
import middleVideo from "../videos/cardsection/middleVideo.mp4";

const videoData = [
  {
    id: 1,
    title: "소녀 애니메이션",
    description: "따뜻한 감성의 소녀 캐릭터 애니메이션.",
    thumbnail: girlThumbnail,
    videoUrl: girlVideo,
  },
  {
    id: 2,
    title: "마법사 캐릭터",
    description: "화려한 효과와 함께한 마법 세계 속 이야기.",
    thumbnail: magitionThumbnail,
    videoUrl: magitionVideo,
  },
  {
    id: 3,
    title: "3D 시네마틱 컷",
    description: "미래 도시를 배경으로 한 몰입감 있는 장면.",
    thumbnail: middleThumbnail,
    videoUrl: middleVideo,
  },
];

const MiddleSection = () => {
  return (
    <section className={styles.bottomSection}>
      <h2 className={styles.sectionTitle}>
        about Works Portfolio
        <span className={styles.underline}></span>
      </h2>
      <div className={styles.cardContainer}>
        {videoData.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </section>
  );
};

const VideoCard = ({ video }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className={styles.card}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.thumbnailWrapper}>
        <img
          src={video.thumbnail}
          alt={video.title}
          className={styles.thumbnail}
        />
        <video
          ref={videoRef}
          src={video.videoUrl}
          className={styles.hoverVideo}
          muted
          loop
          playsInline
        />
      </div>
      <h3 className={styles.cardTitle}>{video.title}</h3>
      <p className={styles.cardDescription}>{video.description}</p>
    </div>
  );
};

export default MiddleSection;
