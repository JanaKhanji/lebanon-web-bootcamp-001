import React, { useContext, useRef, useState } from "react";
import {
  Form,
  Button,
  InputGroup,
  ButtonGroup,
  ToggleButton
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { StateContext } from "../State";
import "./WalletForm.css";

export default function WalletForm() {
  const [state, dispatch] = useContext(StateContext);
  const radios = [
    { name: "dollar $", value: "$" },
    { name: "LBP", value: "LBP" }
  ];
  const name = useRef(null);
  const balance = useRef(null);
  const description = useRef(null);
  const [currency, setCurrency] = useState("");
  let history = useHistory();

  function addWallet(e) {
    e.preventDefault();
    if (
      state.wallets.filter(
        (element) => element.walletname === name.current.value
      ).length !== 0
    ) {
      alert("wallet name already exsit, change wallet name");
    } else {
      if (!balance.current.value) {
        balance.current.value = 0;
      }

      dispatch({
        type: "SET_WALLETS",
        payload: [
          ...state.wallets,
          {
            walletname: name.current.value,
            walletBalance: balance.current.value,
            walletdescription: description.current.value,
            walletCurrency: currency,
            id: new Date()
          }
        ]
      });

      history.push("/wallet/" + name.current.value);
    }
  }

  return (
    <div className=" glass frame">
      <Form
        style={{ width: "50%", margin: "auto" }}
        onSubmit={(e) => {
          addWallet(e);
        }}
      >
        <Form.Group>
          <Form.Label>Wallet name</Form.Label>
          <Form.Control
            required
            ref={name}
            type="text"
            placeholder="Wallet Name"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Description </Form.Label>
          <Form.Control
            required
            ref={description}
            type="text"
            placeholder="description"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Balance </Form.Label>
          <InputGroup>
            <Form.Control
              required
              ref={balance}
              type="number"
              placeholder="balance"
            />
            <InputGroup.Append>
              <ButtonGroup toggle>
                {radios.map((radio, idx) => (
                  <ToggleButton
                    required
                    key={idx}
                    type="radio"
                    name="radio"
                    value={radio.value}
                    onChange={() => {
                      setCurrency(radio.value);
                    }}
                  >
                    {radio.name}
                  </ToggleButton>
                ))}
              </ButtonGroup>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
        <Button className="custButton" type="submit">
          Add wallet
        </Button>
      </Form>
    </div>
  );
}
