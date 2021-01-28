import React, { useContext, useState, useEffect } from "react";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";
import { StateContext } from "../State";
import { useParams } from "react-router-dom";
import "./WalletComponent.css";
const WalletComponent = () => {
  const [state, dispatch] = useContext(StateContext);

  let { name } = useParams();
  const [wallet, setWallet] = useState({});

  useEffect(() => {
    setWallet(state.wallets.filter((el) => el.walletname === name)[0]);
  }, [name, state.wallets]);

  function calBalance() {
    let balance = parseInt(wallet.walletBalance, 10);
    state.transactions
      .filter((el) => el.walletname === name)
      .forEach((transaction) => {
        if (transaction.type === "income") {
          balance += parseInt(transaction.trans, 10);
        } else {
          balance -= parseInt(transaction.trans, 10);
        }
      });
    return balance;
  }

  return (
    <div>
      <div className="walletDetail glass frame center right">
        <h1>{wallet.walletname}</h1>

        <h2 className="Title">
          {calBalance()}
          <span>{wallet.walletCurrency}</span>
        </h2>
        <p>
          <small>{wallet.walletdescription}</small>
        </p>
      </div>
      <div className="custRow rigthMargin">
        <div className=" glass frame">
          <TransactionForm wallet={wallet} />
        </div>
        <br />
        {state.transactions.filter((el) => el.walletname === wallet.walletname)
          .length !== 0 && (
          <div
            className=" glass frame"
            style={
              state.transactions.filter(
                (el) => el.walletname === wallet.walletname
              ).length >= 5
                ? { overflow: "scroll" }
                : {}
            }
          >
            <TransactionList wallet={wallet} />
          </div>
        )}
      </div>
    </div>
  );
};
export default WalletComponent;
