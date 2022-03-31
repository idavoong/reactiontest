import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <div class="tracker">
        <h1>Timer:</h1>
        <h1>Score:</h1>
      </div>
      <div class="mainbox">
        {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Red_Color.jpg/1536px-Red_Color.jpg" class="red image" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Libya_%281977%E2%80%932011%2C_3-2%29.svg/1200px-Flag_of_Libya_%281977%E2%80%932011%2C_3-2%29.svg.png" class="green image" /> */}

        <button class="green image"></button>
      </div>
    </div>
  );
}

//edit later, use to keep track of scoreboard
function Score(props) {
  const [score, setScore] = useState(0);
  // let secore = 0;
  return (
    <button class="green image" onClick={() => setScore(score + 1)}></button>
    // <div>
    //   {props.place} - {population} residents{" "}
    //   <button onClick={() => setPopulation(population + 1)}>+</button>
    // </div>

    //{/* NYC - {population} residents <button onClick={() => null}>+</button> */}
  );
}
