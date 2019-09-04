
import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";


import "./App.css";

class App extends Component {
  render() {
    return ( 
        <div className="sect">
          <Route exact path='/' component={Home} />
          <Route exact path="/login" component={Login} />
        </div>
    );
  }
}

export default App;