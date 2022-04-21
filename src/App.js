import "./styles.css";
import React, { useState } from "react";

export default function App() {
  // x and y for main button
  const [placeX, setplaceX] = useState(500);
  const [placeY, setplaceY] = useState(500);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <div class="tracker">
        <h1>Timer:</h1>
        <Timer />
        <h1>Score: </h1>
        <Score />
      </div>
      <div class="mainbox">
        {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Red_Color.jpg/1536px-Red_Color.jpg" class="red image" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Libya_%281977%E2%80%932011%2C_3-2%29.svg/1200px-Flag_of_Libya_%281977%E2%80%932011%2C_3-2%29.svg.png" class="green image" /> */}

        {/* main button that user clicks on */}
        <button
          class="green image area"
          style={{ top: placeY, left: placeX }}
          onClick={() => setplaceX(Math.floor(Math.random() * 300) + 1)}
          onClick={() => setplaceY(Math.floor(Math.random() * 500) + 1)}
        ></button>
      </div>
    </div>
  );
}

//function for making timer
function Timer(props) {
  const [timer, setTimer] = useState(60);
  function countdown() {
    console.log(timer);
    setTimer(timer - 1);
    console.log(timer, "timer 2");
  }
  // let score = 0;
  return (
    <div>
      {timer}
      <button class="green image" onClick={() => setInterval(countdown, 1000)}>
        Click to Start
      </button>
    </div>

    // {props.place} - {population} residents{" "}

    // <div>
    //   {props.place} - {population} residents{" "}
    //   <button onClick={() => setPopulation(population + 1)}>+</button>
    // </div>

    //{/* NYC - {population} residents <button onClick={() => null}>+</button> */}
  );
}

/* 
- the score is updating but only 
when the button is clicked

- need to remove button onClick and replace 
it with the button/image that it is supposed 
to be clicked on -> so the button in the blue box*/

function Score(props) {
  const [score, setScore] = useState(0);
  // let score = 0;
  function addScore() {
    setScore(score + 1);
  }
  return (
    <div>
      {score}

      <button class="green image" onClick={() => setScore(addScore, 0)}>
        Click to Start
      </button>

      {/* <button class="green image" onClick={() => setScore(score + 1)}>Button</button> */}
    </div>
    // <div>
    //   {props.place} - {population} residents{" "}
    //   <button onClick={() => setPopulation(population + 1)}>+</button>
    // </div>

    //{/* NYC - {population} residents <button onClick={() => null}>+</button> */}
  );
}
