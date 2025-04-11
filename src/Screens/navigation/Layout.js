// src/components/Layout.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = ({ children }) => {
  const location = useLocation();

  // 특정 경로에서는 레이아웃 사용하지 않음
  const hideLayoutRoutes = ['/introduction'];

  if (hideLayoutRoutes.includes(location.pathname)) {
    return (<>
    <Navigation />
    {children}
    <Footer />
    </>)
  }

  return (
    <>
      <div>
        <Navigation />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
