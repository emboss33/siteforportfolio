// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Screens/navigation/Layout';
import MainPage from './Screens/main/MainPage';
import AboutUs from './Screens/information/Aboutus'; // ✅ 대소문자 일치
import Lendingpage from './Screens/lending/lendingPage';
// import Home from './pages/Home';
// import About from './pages/About';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/introduction" element={<Lendingpage/>}/>
           {/* <Route path="/about" element={<About />} /> */}
          {/* 더 많은 페이지 추가 가능 */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;