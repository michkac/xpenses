import React, { useState } from "react";
import Auth from "./Auth";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import Button from "@material-ui/core/Button";
import landingImg from "./mock.png";

function Landing() {
  return (
    <div className="container">
      <div className="header">
        <div className="brand">
          <h1>
            <span className="logo">
              <AccountBalanceIcon />
            </span>
            XPENSES
          </h1>
        </div>
        <Button variant="outlined" color="primary">
          <a href="/signin" role="button">
            Sign in
          </a>
        </Button>
      </div>
      <div className="main">
        <div className="blurb">
          <h2>Better view of spending habits.</h2>
          <h3>
            A striped down expense tracker to help keep your spending habits in
            check.
          </h3>
          <Button variant="contained" color="primary" size="large">
            <a href="/register">GET STARTED</a>
          </Button>
        </div>
        <div className="img">
          <img src={landingImg} alt="Flat Capture of Application" />
        </div>
      </div>
    </div>
  );
}

export default Landing;
