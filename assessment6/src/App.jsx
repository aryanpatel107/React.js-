import { useState } from "react";
import "./App.css";

function App() {
  // 🔹 State Management
  const [count, setCount] = useState(0);

  const LIMIT = 10;

  // 🔹 Event Handlers
  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Counter App</h1>

        {/* JSX Display */}
        <h2 className="count">{count}</h2>

        {/* Buttons */}
        <div className="buttons">
          <button onClick={increase}>Increase</button>

          <button 
            onClick={decrease} 
            disabled={count === 0}
          >
            Decrease
          </button>

          <button onClick={reset}>Reset</button>
        </div>

        {/* 🔹 Conditional Rendering */}
        {count > LIMIT && (
          <p className="warning">
            ⚠ Warning: Counter exceeded limit of {LIMIT}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;