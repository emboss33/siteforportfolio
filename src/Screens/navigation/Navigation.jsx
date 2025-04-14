// src/components/Navigation.js
import React, { useEffect, useState } from "react";
import "../../styles/Navigation.css";
import logo from "../../Image/navigationBar/dava-logo-w.png";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navigation ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <a href="/">
            <img src={logo} alt="Studio Zilpung Logo" />
          </a>
        </div>

        <div
          className={`nav-toggle ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="/aboutus">회사소개</a>
          </li>
          <li>
            <a href="/Mainpage">상품소개</a>
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
      </div>
    </nav>
  );
};

export default Navigation;
