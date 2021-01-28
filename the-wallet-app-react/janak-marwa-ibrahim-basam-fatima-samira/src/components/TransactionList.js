import React, { useContext } from "react";
import TransactionItem from "./TransactionItem";
import { Accordion } from "react-bootstrap";
import { StateContext } from "../State";

const TransactionList = ({ wallet }) => {
  const [state, dispatch] = useContext(StateContext);

  return (
    <div>
      <Accordion defaultActiveKey="0">
        {state.transactions &&
          state.transactions
            .filter((el) => el.walletname === wallet.walletname)
            .map((transaction) => (
              <TransactionItem
                key={transaction.date}
                transaction={transaction}
                currency={wallet.walletCurrency}
              />
            ))}
      </Accordion>
    </div>
  );
};

export default TransactionList;
