import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from "react-dom";

const rootElement = document.getElementById("root");
render(<App />, rootElement);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);