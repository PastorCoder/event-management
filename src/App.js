import React, { useState } from "react";
import "./App.css";
import { useHistory } from "react-router-dom";

function Toggle() {
  const [isToggleOn, setIsToggleOn] = useState(true);

  const handleClick = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <>
      <button className="toggle-btn" onClick={handleClick}>
        {isToggleOn ? "ON" : "OFF"}
      </button>
      <br />
      <br />

      <a
        id="more-study"
        href="https://reactjs.org/docs/events.html"
        target="_blank"
      >
        More On React SyntheticEvents
      </a>

      <br />
      <br />
      <a
        id="more-study"
        href="https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/"
        target="_blank"
      >
        ES6 In Depth: Arrow functions
      </a>

      <br />
      <br />
      <a
        id="more-study"
        href="https://css-tricks.com/a-thorough-analysis-of-css-in-js/"
        target="_blank"
      >
        A Thorough Analysis of CSS-in-JS
      </a>
    </>
  );
}

export default Toggle;
