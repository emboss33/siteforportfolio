// src/components/MainPage.js
import React, { useState } from "react";
import Bodysection from "./component/bodysection";
import TopSection from "./component/topSection";
import PopupModal from "./component/popupmodal";

const MainPage = () => {
  const [showCalendar, setShowCalendar] = useState(false); // 팝업 상태 관리

  const handleToggleCalendar = () => {
    console.log("팝업 활성화?", showCalendar);
    setShowCalendar(!showCalendar);
  };

  return (
    <div>
      <PopupModal
        handleToggleCalendar={handleToggleCalendar}
        showCalendar={showCalendar}
      ></PopupModal>
      <TopSection />
      <Bodysection handleToggleCalendar={handleToggleCalendar} />
    </div>
  );
};

export default MainPage;
