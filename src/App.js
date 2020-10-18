import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Sponsor from "./pages/Sponsor";
import FAQ from "./pages/FAQ";
import Error from "./pages/Error";
// import About from "./pages/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sponsors" exact component={Sponsor} />
          <Route path="/faq" exact component={FAQ} />
          {/* <Route path="/about" exact component={About} /> */}
          <Route exact component={Error} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
