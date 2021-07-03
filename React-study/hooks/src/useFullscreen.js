import React, { useEffect, useState, useRef } from "react";

const useFullScreen = () => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
  };
  return { element, triggerFull, exitFull };
};

const App = () => {
  const { element, triggerFull, exitFull } = useFullScreen();
  return (
    <div className="App">
      <div ref={element}>
        <img src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="grape" />
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );
};

export default App;
