import { useEffect, useState } from "react";
import { store } from "./store";

function App() {
  const [initialState] = useState(store.getState());
  const [currentState, setCurrentState] = useState(initialState);
  const [amount, setAmount] = useState();

  useEffect(() => {
    store.subscribe(() => {
      setCurrentState(store.getState());
    });
  }, []);

  const handleChange = (e) => {
    setAmount(Number(e.target.value));
  };

  const increase = () => {
    store.dispatch({
      type: "INCREASE",
      payload: amount,
    });
  };

  const decrease = () => {
    store.dispatch({
      type: "DECREASE",
      payload: amount,
    });
  };

  const set = () => {
    if (!amount) return;
    store.dispatch({
      type: "SET",
      payload: amount,
    });
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>initial state: {initialState}</p>
      <p>current state: {currentState}</p>
      <div>
        <label>Amount: </label>
        <input type="number" onChange={handleChange} placeholder="example: 3" />
      </div>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={set}>set</button>
    </div>
  );
}

export default App;
