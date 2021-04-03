/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Login from "./components/Login";
import Checkout from "./components/Checkout";
import { db } from "./components/firebase";

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    db.collection("cartItems").onSnapshot((snapshot) => {
      // every time a new post is added fire this code off
      setCartItems(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          product: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
