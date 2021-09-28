import React, { useState } from "react";
import "./App.css";

function Toggle() {
  const [isToggleOn, setIsToggleOn] = useState(true);

  const handleClick = () => {
    setIsToggleOn(!isToggleOn);
  };

  
  return (
    <>
      <button className="toggle-btn" onClick={handleClick}>
        {isToggleOn ? "ON"  : "OFF"}
      </button>
      
    </>
  );
}

export default Toggle;
