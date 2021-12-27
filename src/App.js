import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/nav";
import SideBar from "./components/sidebar";
import ContactForm from "./components/contactform";
import Home from "./pages/home";
import Resume from "./pages/resume";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <div className="container mb-5">
        <div className="row">
          <div className="col-lg-3 col-md-4 mt-dynamic rp-md-0">
            <SideBar />
            <div className="hidden-md w-100">
              <ContactForm />
            </div>
          </div>
          <div className="col-lg-9 col-md-8 rp-md-0">
            <div className="glass-card bg-white mt-dynamic" id="res-nav">
              <Nav />
            </div>

            <div className="glass-card mt-4 content bg-white rm-md-0">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/resume" component={Resume} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/contact" component={Contact} />
              </Switch>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
