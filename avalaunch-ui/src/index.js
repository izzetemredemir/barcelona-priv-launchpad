import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from "react-dom";
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from "@ethersproject/providers";

function getLibrary(provider) {
  return new Web3Provider(provider);
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
