import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from './components/Head';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Proworker from './pages/Proworker';
import About from './pages/About';
/* import Store from './pages/Store'; */
import SectorSingle from './pages/SectorSingle';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

export default function Routes() {
  return (
    <div>
      <Header />
      <BrowserRouter>
      <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Contact" component={Contact} />
            <Route path="/signin" component={SignInPage} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/Proworker" component={Proworker} />
            <Route path="/About" component={About} />
           {/*  <Route path="/Store" component={Store} /> */}
            <Route path="/SectorSingle" component={SectorSingle} />
      </Switch>
      </BrowserRouter>
      <Footer/>
    </div>
    
  );
}