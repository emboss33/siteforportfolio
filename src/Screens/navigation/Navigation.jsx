// src/components/Navigation.js
import React, { useEffect, useState } from "react";
import "../../styles/Navigation.css";
import logo from "../../Image/navigationBar/dava-logo-w.png"; // 이미지 경로 맞게 조정!

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 10); // 스크롤이 10px 이상이면 상태 변경
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navigation ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-logo">
        <a href="/">
          <img src={logo} alt="Studio Zilpung Logo" />
        </a>
      </div>

      <ul>
        <li>
          <a href="/aboutus">회사소개</a>
        </li>
        <li>
          <a href="test1">상품소개</a>
        </li>
        <li>
          <a href="https://kdata.or.kr/datavoucher/index.do">데이터바우처</a>
        </li>
        <li>
          <a href="test3">문의하기</a>
        </li>
        <li>
          <a href="test4">공지사항</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
