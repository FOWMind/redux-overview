import { useEffect, useRef, useState } from "react";
import { store } from "./store";

function App() {
  const [initialState] = useState(store.getState());
  const [currentState, setCurrentState] = useState(initialState);
  const increasePayload = useRef();
  const decreasePayload = useRef();

  useEffect(() => {
    store.subscribe(() => {
      setCurrentState(store.getState());
    });
  }, []);

  const increase = () => {
    const payload = Number(increasePayload.current.value);
    store.dispatch({
      type: "INCREASE",
      payload,
    });
  };

  const decrease = () => {
    const payload = Number(decreasePayload.current.value);
    store.dispatch({
      type: "DECREASE",
      payload,
    });
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>initial state: {initialState}</p>
      <p>current state: {currentState}</p>
      <div>
        <label>Increase amount: </label>
        <input ref={increasePayload} type="number" />
      </div>
      <div>
        <label>Decrease amount: </label>
        <input ref={decreasePayload} type="number" />
      </div>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
    </div>
  );
}

export default App;
