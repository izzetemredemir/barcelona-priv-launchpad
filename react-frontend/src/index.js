import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from "react-dom";
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from "@ethersproject/providers";






const rootElement = document.getElementById("root");
render(<App />, rootElement);

function getLibrary(provider) {
  return new Web3Provider(provider);
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


