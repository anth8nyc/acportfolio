import React from "react";
import Nav from "./components/Nav/index";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Wrapper from "./components/Wrapper";


import './App.css';

function App() {
  return (
    <Router>
    <div>
        <Nav/>
      <Wrapper>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/contact" component={Contact} />
      </Wrapper>
    </div>
  </Router>
  );
}

export default App;
