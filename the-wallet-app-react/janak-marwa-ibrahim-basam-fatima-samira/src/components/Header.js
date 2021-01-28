import React, { useContext } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { StateContext } from "../State";
import "./Header.css";
const Header = () => {
  let { location } = useHistory();
  let nameArr = location.pathname.split("/");
  const [state, dispatch] = useContext(StateContext);

  return (
    <div className="sideNav">
      <Link to="/about">
        <OverlayTrigger
          key="right"
          placement="right"
          overlay={<Tooltip id={`tooltip-right`}>About Us</Tooltip>}
        >
          <figure className="icon">
            <img
              alt=""
              src="https://icons-for-free.com/iconfiles/png/512/cash+credit+currency+finance+payment+wallet+icon-1320086012966308148.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </figure>
        </OverlayTrigger>
      </Link>

      <br />
      {state.wallets.length !== 0 && (
        <>
          <Link to="/walletform">
            <OverlayTrigger
              key="right"
              placement="right"
              overlay={
                <Tooltip id={`tooltip-right`}>Create New Wallet</Tooltip>
              }
            >
              <figure className="icon">
                <img
                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00OTIsMjM2SDI3NlYyMGMwLTExLjA0Ni04Ljk1NC0yMC0yMC0yMGMtMTEuMDQ2LDAtMjAsOC45NTQtMjAsMjB2MjE2SDIwYy0xMS4wNDYsMC0yMCw4Ljk1NC0yMCwyMHM4Ljk1NCwyMCwyMCwyMGgyMTYNCgkJCXYyMTZjMCwxMS4wNDYsOC45NTQsMjAsMjAsMjBzMjAtOC45NTQsMjAtMjBWMjc2aDIxNmMxMS4wNDYsMCwyMC04Ljk1NCwyMC0yMEM1MTIsMjQ0Ljk1NCw1MDMuMDQ2LDIzNiw0OTIsMjM2eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"
                  alt="add new"
                  height="30"
                  className="d-inline-block align-top"
                />
              </figure>
            </OverlayTrigger>
          </Link>
          {state.wallets.map((el) => {
            return (
              <Link to={"/wallet/" + el.walletname}>
                <br />
                <OverlayTrigger
                  key="right"
                  placement="right"
                  overlay={
                    <Tooltip id={`tooltip-right`}>{el.walletname}</Tooltip>
                  }
                >
                  <figure className="icon">
                    <h3 className="center">
                      {" "}
                      {el.walletname[0].toUpperCase()}{" "}
                    </h3>
                  </figure>
                </OverlayTrigger>
              </Link>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Header;
