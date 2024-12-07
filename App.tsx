import "./App.css";
import Carousel from "./layouts/HomePage/Carousel";
import Books from "./layouts/HomePage/Books";
import Navbar from "./layouts/NavbarAndFooter/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./layouts/HomePage/Home";

function App() {
  return (
    <Router>
    <div>
  <Navbar></Navbar>
  <Routes>
    <Route  path="/" element={<Home></Home>}></Route>
    </Routes>
    

    <Routes>
    <Route path="/topbooks" element={<Books></Books>}></Route>
    </Routes>
    
    
</div>
    </Router>
  );
}

export default App;
