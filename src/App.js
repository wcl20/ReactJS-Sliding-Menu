import React from 'react';
import { Provider } from "react-redux";
import HomePage from "./js/views/HomePage";
import configureStore from "./js/store";
import "./scss/main.scss";

const store = configureStore();

function App() {

  return (
    <Provider store={ store }>
    <div className="app">
      <HomePage />
    </div>
    </Provider>
  );
}

export default App;
