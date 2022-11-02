import { Redux, ReactRedux, ReactReduxTodos } from "./components";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <>
      <h1>Redux overview</h1>
      <h2>Redux core</h2>
      <Redux />
      <br />
      <Provider store={store}>
        <h2>React redux</h2>
        <ReactRedux />
        <br />
        <ReactReduxTodos />
      </Provider>
    </>
  );
}

export default App;
