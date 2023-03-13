
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar placeholder='search uforumit'/>
      <Routes>

        <Route path='/' exact component={Home}/>
      </Routes>

    </Router>
  );
}

export default App;
