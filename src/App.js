import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  // x and y for main button
  const [placeX, setplaceX] = useState(700);
  const [placeY, setplaceY] = useState(200);
  // set score to 0
  const [score, setScore] = useState(0);

  //function for xy movement
  function buttonRandom() {
    setplaceX(Math.floor(Math.random() * 1400) + 1);
    setplaceY(Math.floor(Math.random() * 300) + 1);
    setScore(addScore, 0);
  }

  //function for adding score
  function addScore() {
    setScore(score + 1);
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      {/* box for timer and scoreboard */}
      <div class="tracker">
        <h1>Timer:</h1>
        <Timer />
        <h1>Score: </h1>
        {score}
      </div>

      <div class="mainbox">
        {/* main button that user clicks on */}
        <button
          class="green image area"
          style={{ top: placeY, left: placeX }}
          onClick={buttonRandom}
        ></button>
      </div>
    </div>
  );
}

//function for making timer
function Timer() {
  const [time, setTime] = useState(60);
  const [start, setStart] = useState(false);

  const countdown = () => {
    if (start && time >= 1) {
      setTime(time - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(countdown, 1000);
    return () => clearInterval(interval);
  }, [countdown]);

  const startTimer = () => {
    setStart(true);
  };

  return (
    <>
      <p>Counting down: {time}</p>
      <button onClick={startTimer}>Click me</button>
    </>
  );
}
