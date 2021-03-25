import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Visitors from "./pages/Visitors";
import About from "./pages/About";
import Schedule from "./pages/Schedule";
import Cummins from "./pages/Sponsors/cummins";
import Exxon from "./pages/Sponsors/exxon";
import Synchrony from "./pages/Sponsors/synchrony";
import PG from "./pages/Sponsors/pg";
import JohnDeere from "./pages/Sponsors/johndeere";
import RollsRoyce from "./pages/Sponsors/rollsroyce";
import Chevron from "./pages/Sponsors/chevron";
import Ameren from "./pages/Sponsors/ameren";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/visitors" exact component={Visitors} />
          <Route path="/about" exact component={About} />
          <Route path="/schedule" exact component={Schedule} />
          <Route path="/cummins" exact component={Cummins} />
          <Route path="/exxon-mobil" exact component={Exxon} />
          <Route path="/synchrony" exact component={Synchrony} />
          <Route path="/pg" exact component={PG} />
          <Route path="/john-deere" exact component={JohnDeere} />
          <Route path="/rolls-royce" exact component={RollsRoyce} />
          <Route path="/chevron" exact component={Chevron} />
          <Route path="/ameren" exact component={Ameren} />
          <Route exact component={Error} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
