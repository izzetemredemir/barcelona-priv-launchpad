
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
function App() {
  return (
    <div> 
       <Router>
         <Header></Header>    
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
