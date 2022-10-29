import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export function ReactRedux() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const [amount, setAmount] = useState(0);
  const [initialState] = useState(counter);

  const handleChange = (e) => {
    setAmount(Number(e.target.value));
  };

  const increase = () => {
    dispatch({
      type: "INCREASE",
      payload: amount,
    });
  };

  const decrease = () => {
    dispatch({
      type: "DECREASE",
      payload: amount,
    });
  };

  const set = () => {
    if (!amount) return;
    dispatch({
      type: "SET",
      payload: amount,
    });
  };

  return (
    <div style={{ border: "1px solid black", padding: "1rem" }}>
      <h2>React redux</h2>
      <h3>Counter</h3>
      <p>initial state: {initialState}</p>
      <p>current state: {counter}</p>
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
