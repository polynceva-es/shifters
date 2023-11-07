// import { useState } from 'react'
import "./App.css";
import { Cards } from "./components/Cards/Cards";

function App() {
  // const [count, setCount] = useState(0)

  function getHiddenCard(text?: string, count: number = 4): string {
    return "*".repeat(count) + (text ? text.slice(-4) : "");
  }

  return (
    <>
      <h1 id="title">Shifters</h1>
      {/* <h1 id='title2'>0</h1> */}
      {/* <p>count is {count}</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
        count +1  
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
        count -1  
        </button>
      </div> */}
      <Cards />
    </>
  );
}

export default App;
