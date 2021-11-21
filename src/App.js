import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/nav';
import SideBar from './components/sidebar';
import ContactForm from './components/contactform';
import Home from './pages/home';
import Resume from './pages/resume';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Footer from './components/footer';

import firebase from "firebase";
import "firebase/firestore";
import axios from "axios";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyBP5irIMqqbygH8YR_4fc2q_87DIoTdvtk",
    authDomain: "mainlogs-745df.firebaseapp.com",
    projectId: "mainlogs-745df",
    storageBucket: "mainlogs-745df.appspot.com",
    messagingSenderId: "294939388548",
    appId: "1:294939388548:web:3b9c82799456accd0330d1",
  });
} else {
  firebase.app(); // if already initialized, use that one
}

const firestore = firebase.firestore();

function App() {
	const dataRef = firestore.collection("logs");

  // INSERT DATA
  const insertRecord = async (title, myip) => {
    const timestamp = Date.now(); // This would be the timestamp you want to format
    var time = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(timestamp);

    var url = window.location.href;
    var route = window.location.pathname;

    var path = url.substr(0, url.length - 1);
    path += route;

    var webdata = {
      url: url,
      route: route,
      path: path,
      title: title,
      timestamp: time,
      ip: myip,
    };

    await dataRef.add(webdata);
  };

  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    return res.data.IPv4;
  };

  useEffect(async () => {
    var title = document.title;
    var myip = await getData();
    insertRecord(title, myip);
  }, []);
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
    </Router >
  );
}

export default App;
