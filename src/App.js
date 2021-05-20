import React from "react";
import Nav from "./components/Nav/index";
import { HashRouter as Router, Route } from "react-router-dom";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Wrapper from "./components/Wrapper";
import Workpage from "./components/Workpage";
import Footer from "./components/Footer";


import './App.css';

function App() {
  return (
    <Router basename="/acportfolio">
    <div>
        <Nav/>
      <Wrapper>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/work/:id" component={Workpage} />
      </Wrapper>
      <Footer/>
    </div>
  </Router>
  );
}

export default App;
