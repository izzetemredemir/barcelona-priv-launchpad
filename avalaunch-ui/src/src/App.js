
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
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from '@web3-react/core'



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

const Injected = new InjectedConnector({
 supportedChainIds: [1, 3, 4, 5, 42]
})




function App() {
  return (
    
    <div className="background">
       <Router>
         <Header />
         <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/staking" element={<Staking />} />
         <Route path="/sales" element={<Sales />} />
         <Route path="/project" element={<Project />} />
        </Routes>
        </Router>
      
    </div>
   
  );
}

export default App;
