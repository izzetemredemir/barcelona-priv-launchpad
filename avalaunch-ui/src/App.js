
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

import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";


import { useWeb3React } from '@web3-react/core'




function getLibrary(provider) {

return new Web3Provider(provider);

}
const CoinbaseWallet = new WalletLinkConnector({
  url: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
  appName: "Web3-react Demo",
  supportedChainIds: [1, 3, 4, 5, 42],
 });
 
 const WalletConnect = new WalletConnectConnector({
  rpcUrl: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
 });
 
 

function App() {

  const { activate, deactivate } = useWeb3React();
  return (
    <Web3ReactProvider getLibrary={getLibrary}>


    <div> 

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
        
      
    </div>
    </Web3ReactProvider>

  );
}

export default App;
