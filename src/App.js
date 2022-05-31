
import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/layout/Navbar";
import {
  BrowserRouter, Routes,
  Route,
} from "react-router-dom";
import Tool from "./components/Tool";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      <Routes>
      <Route exact path="/" component ={<Home/>} />
          <Route exact path="/about" component={<About/>} />
          <Route exact path="/contact" component={<Contact/>} />
      </Routes>
        
      </div>
    <Tool/>
    </BrowserRouter>
  );
}
 

export default App;
