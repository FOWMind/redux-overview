import { useEffect, useState } from "react";
import { store } from "../store";

export function Redux() {
  const [initialState] = useState(store.getState().counter);
  const [currentState, setCurrentState] = useState(initialState);
  const [amount, setAmount] = useState();

  useEffect(() => {
    store.subscribe(() => {
      const { counter } = store.getState();
      setCurrentState(counter);
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
    <div style={{ border: "1px solid black", padding: "1rem" }}>
      <h2>Redux core</h2>
      <h3>Counter</h3>
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
