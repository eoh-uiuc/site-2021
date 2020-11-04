import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Sponsor from "./pages/Sponsor";
import Error from "./pages/Error";
import Visitors from "./pages/Visitors";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sponsors" exact component={Sponsor} />
          <Route path="/visitors" exact component={Visitors} />
          <Route path="/about" exact component={About} />
          <Route exact component={Error} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
