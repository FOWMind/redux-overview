import { Redux, ReactRedux } from "./components";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <>
      <h1>Redux overview</h1>
      <Redux />
      <br />
      <Provider store={store}>
        <ReactRedux />
      </Provider>
    </>
  );
}

export default App;
