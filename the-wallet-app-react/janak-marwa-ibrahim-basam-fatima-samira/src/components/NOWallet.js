import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import img from "../assets/Finance.png";
const NoWallet = () => {
  return (
    <div className="center">
      <div>
        <img src={img} alt="no wallet" width="500px" />
      </div>
      <div>
        <Link to="/walletform">
          <Button className="custButton">Create New Wallet</Button>
        </Link>
      </div>
    </div>
  );
};

export default NoWallet;
