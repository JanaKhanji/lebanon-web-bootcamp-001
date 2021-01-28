import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import img from "../assets/Finance.png";

const About = () => {
  return (
    <div>
      <div className="center">
        <img
          src={img}
          alt="no wallet"
          width="500px"
          style={{ zIndex: "-1", position: "fixed" }}
        />
      </div>
      <div className="glass frame right about">
        <h1 className="Title">My Wallets</h1>
        <p>
          This is a wallet management app. You can create multiple wallets and
          add transactions to each one.
        </p>
        <br />
        <p>This app was built by an amazing team :</p>
        <ul>
          <li>Jana Khanji</li>
          <li>Ibrahim Nour</li>
          <li>Marwa Al-Shahal</li>
          <li>Bassam Edelby</li>
          <li>Samira Samarji</li>
          <li>Fatime Katrib</li>
        </ul>
        <br />
        <p>This app is a part of a Front-End Bootcamp by Re-Coded</p>
      </div>
      <br />
      <div className="center">
        <Link to="/walletform">
          <Button className="custButton">Create New Wallet</Button>
        </Link>
      </div>
    </div>
  );
};

export default About;
