import logo from './logo.svg';
import './App.css';
import Header from "./Header"
import {
  BrowserRouter, Route, Switch
}from "react-router-dom"
import About from "./About"
import Portfolio from "./Portfolio"
import Resume from  "./Resume"
import Contact from "./Contact"
import Footer from "./Footer"
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
        <Route path="/resume">
            <Resume/>
          </Route>
        <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/portfolio">
            <Portfolio/>
          </Route>
          <Route path="/">
            <About/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
