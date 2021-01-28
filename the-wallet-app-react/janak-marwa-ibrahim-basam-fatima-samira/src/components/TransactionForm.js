import React, { useState, useContext, useRef, useEffect } from "react";
import {
  Form,
  Button,
  InputGroup,
  FormControl,
  ButtonGroup,
  ToggleButton
} from "react-bootstrap";
import { StateContext } from "../State";
const TransactionForm = ({ wallet }) => {
  const [state, dispatch] = useContext(StateContext);
  const radios = [
    { name: "income", value: "income", color: "#40CB56" },
    { name: "expenses", value: "expenses", color: "#FB7070" }
  ];
  const [type, setType] = useState("");

  const trans = useRef(null);
  const notes = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    dispatch({
      type: "SET_TRANSACTIONS",
      payload: [
        ...state.transactions,
        {
          trans: trans.current.value,
          notes: notes.current.value,
          type: type,
          date: new Date(),
          walletname: wallet.walletname
        }
      ]
    });
    e.target.reset();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Make a Transaction</Form.Label>

        <InputGroup className="mb-3">
          <FormControl
            type="number"
            ref={trans}
            placeholder="make a transaction"
            aria-label="Amount (to the nearest dollar)"
            required
          />
          <InputGroup.Append>
            <InputGroup.Text>{wallet && wallet.walletCurrency}</InputGroup.Text>
            <ButtonGroup toggle>
              {radios.map((radio, idx) => (
                <ToggleButton
                  variant="dark"
                  key={idx}
                  type="radio"
                  name="radio"
                  value={radio.value}
                  style={{ backgroundColor: radio.color }}
                  onChange={() => {
                    setType(radio.value);
                  }}
                >
                  {radio.name}
                </ToggleButton>
              ))}
            </ButtonGroup>
          </InputGroup.Append>
        </InputGroup>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Transaction Notes</Form.Label>
        <Form.Control
          ref={notes}
          type="text"
          required
          placeholder="Transaction Notes"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Transaction
      </Button>
    </Form>
  );
};

export default TransactionForm;
