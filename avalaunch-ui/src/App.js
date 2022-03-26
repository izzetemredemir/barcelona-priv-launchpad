
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home'
import Staking from './components/Staking'
import Sales from './components/Sales'
import Project from "./components/Project";
import TokenInfo from "./components/TokenInfo";
import { Web3ReactProvider } from '@web3-react/core'

import { Web3Provider } from "@ethersproject/providers";

function getLibrary(provider) {

return new Web3Provider(provider);

}
function App() {
  return (
    <div> 
      <Web3ReactProvider getLibrary={getLibrary}>
       <Router>
         <Header></Header>    
         <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/staking" element={<Staking />} />
         <Route path="/sales" element={<Sales />} />
         <Route path="/project" element={<Project />} />
         <Route path="/token-info" element={<TokenInfo />} />
        </Routes>
        </Router>
        </Web3ReactProvider>
      
    </div>
   
  );
}

export default App;
