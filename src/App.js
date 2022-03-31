import "./styles.css";
import React, { useState } from "react"


export default function App() {
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

        {/* <button class="green image"></button> */}
      </div>
    </div>
  );
}

function Timer(props) {
  const [timer, setTimer] = useState(120);
  function countdown(){
    setTimer(timer-1);
  }
  // let secore = 0;
  return (
    <div>
      {timer}
    <button class="green image" onClick={() => setInterval(countdown, 1000)}>Click to Start</button>
    </div>
    // {props.place} - {population} residents{" "}

    // <div>
    //   {props.place} - {population} residents{" "}
    //   <button onClick={() => setPopulation(population + 1)}>+</button>
    // </div>

    //{/* NYC - {population} residents <button onClick={() => null}>+</button> */}
  );
}

//edit later, use to keep track of scoreboard
function Score(props) {
  const [score, setScore] = useState(0);
  // let secore = 0;
  return (
    //have to make sure button cannot be clicked on
    <button class="green image" onClick={() => setScore(score + 1)}>Button</button>
    // <div>
    //   {props.place} - {population} residents{" "}
    //   <button onClick={() => setPopulation(population + 1)}>+</button>
    // </div>

    //{/* NYC - {population} residents <button onClick={() => null}>+</button> */}
  );
}

