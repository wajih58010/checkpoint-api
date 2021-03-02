import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Home from "./Components/Home/Home";
import ListUsers from "./Components/ListUsers/ListUsers";
import User from "./Components/User/User";
import Navbar from "./Components/Navbar/Navbar";
import error from "./Assets/404.jpg";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={ListUsers} />
        <Route path="/users/user/:id" component={User} />
        <Route
          path="/*"
          component={() => (
            <img src={error} alt="error" style={{ width: "40%" }} />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
