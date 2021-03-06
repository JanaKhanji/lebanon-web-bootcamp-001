import React from "react";
import { Accordion } from "react-bootstrap";
import { Card } from "react-bootstrap";
import "./TransactionItem.css";
const TransactionItem = ({ transaction, currency }) => {
  let imgSrc;
  if (transaction.type === "income") {
    imgSrc =
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDM0My4wODkgMzQzLjA4OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGcgdHJhbnNmb3JtPSJtYXRyaXgoNS41MTA5MTA1OTYxNjMwOWUtMTYsLTEsMSw1LjUxMDkxMDU5NjE2MzA5ZS0xNiwtMC4wMDA1NzIyMDQ1ODk5MDA1OTM0LDM0My4wODkyNTYyODY2MjEpIj4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxnPgoJCQk8cGF0aCBkPSJNMzQxLjUyMSwxNjcuNDE1Yy0wLjI2Ny0wLjMyMS0wLjU2My0wLjYxOC0wLjg4NS0wLjg4NWwtOTcuMTc2LTk5LjI2NWMtMi45NDItMy4xNzQtNy45MDEtMy4zNjItMTEuMDc1LTAuNDIgICAgIGMtMS41NzQsMS40NTktMi40ODEsMy40OTktMi41MDksNS42NDV2NTIuMjQ1aC0xMjUuOTFjLTQuNzAyLDAtOS45MjcsMS4wNDUtOS45MjcsNS4yMjR2ODMuNTkyICAgICBjMC42MjEsNS4zMDEsNC42NjQsOS41NTcsOS45MjcsMTAuNDQ5aDEyNS45MXY0Ny4wMmMwLjA3NiwzLjEyNiwxLjg5LDUuOTQ3LDQuNzAyLDcuMzE0aDMuMTM1ICAgICBjMi4xODMtMC4wODYsNC4yNDYtMS4wMjQsNS43NDctMi42MTJsOTcuMTc2LTk4Ljc0M0MzNDMuNTIyLDE3NC41ODIsMzQzLjkxOCwxNzAuMywzNDEuNTIxLDE2Ny40MTV6IiBmaWxsPSIjNDBjYjU2IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJCTxwYXRoIGQ9Ik03MC41MzEsMTIyLjEyMmMtNC4zMjgsMC03LjgzNywzLjUwOS03LjgzNyw3LjgzN3Y4My41OTJjMCw0LjMyOCwzLjUwOSw3LjgzNyw3LjgzNyw3LjgzN3M3LjgzNy0zLjUwOSw3LjgzNy03LjgzNyAgICAgdi04My41OTJDNzguMzY3LDEyNS42Myw3NC44NTksMTIyLjEyMiw3MC41MzEsMTIyLjEyMnoiIGZpbGw9IiM0MGNiNTYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQkJPHBhdGggZD0iTTM5LjE4NCwxMjIuMTIyYy00LjMyOCwwLTcuODM3LDMuNTA5LTcuODM3LDcuODM3djgzLjU5MmMwLDQuMzI4LDMuNTA5LDcuODM3LDcuODM3LDcuODM3czcuODM3LTMuNTA5LDcuODM3LTcuODM3ICAgICB2LTgzLjU5MkM0Ny4wMiwxMjUuNjMsNDMuNTEyLDEyMi4xMjIsMzkuMTg0LDEyMi4xMjJ6IiBmaWxsPSIjNDBjYjU2IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJCTxwYXRoIGQ9Ik03LjgzNywxMjIuMTIyYy00LjMyOCwwLTcuODM3LDMuNTA5LTcuODM3LDcuODM3djgzLjU5MmMwLDQuMzI4LDMuNTA5LDcuODM3LDcuODM3LDcuODM3ICAgICBjNC4zMjgsMCw3LjgzNy0zLjUwOSw3LjgzNy03LjgzN3YtODMuNTkyQzE1LjY3MywxMjUuNjMsMTIuMTY1LDEyMi4xMjIsNy44MzcsMTIyLjEyMnoiIGZpbGw9IiM0MGNiNTYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8L2c+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg==";
  } else {
    imgSrc =
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDM0My4wODkgMzQzLjA4OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGcgdHJhbnNmb3JtPSJtYXRyaXgoLTYuNzM1NTU3Mzk1MzEwNDQzZS0xNiwxLC0xLC02LjczNTU1NzM5NTMxMDQ0M2UtMTYsMzQzLjA4OTI1NjI4NjYyMTI2LDAuMDAwNTcyMjA0NTg5OTAwNTkzNCkiPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGQ9Ik0zNDEuNTIxLDE2Ny40MTVjLTAuMjY3LTAuMzIxLTAuNTYzLTAuNjE4LTAuODg1LTAuODg1bC05Ny4xNzYtOTkuMjY1Yy0yLjk0Mi0zLjE3NC03LjkwMS0zLjM2Mi0xMS4wNzUtMC40MiAgICAgYy0xLjU3NCwxLjQ1OS0yLjQ4MSwzLjQ5OS0yLjUwOSw1LjY0NXY1Mi4yNDVoLTEyNS45MWMtNC43MDIsMC05LjkyNywxLjA0NS05LjkyNyw1LjIyNHY4My41OTIgICAgIGMwLjYyMSw1LjMwMSw0LjY2NCw5LjU1Nyw5LjkyNywxMC40NDloMTI1LjkxdjQ3LjAyYzAuMDc2LDMuMTI2LDEuODksNS45NDcsNC43MDIsNy4zMTRoMy4xMzUgICAgIGMyLjE4My0wLjA4Niw0LjI0Ni0xLjAyNCw1Ljc0Ny0yLjYxMmw5Ny4xNzYtOTguNzQzQzM0My41MjIsMTc0LjU4MiwzNDMuOTE4LDE3MC4zLDM0MS41MjEsMTY3LjQxNXoiIGZpbGw9IiNmYjcwNzAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQkJPHBhdGggZD0iTTcwLjUzMSwxMjIuMTIyYy00LjMyOCwwLTcuODM3LDMuNTA5LTcuODM3LDcuODM3djgzLjU5MmMwLDQuMzI4LDMuNTA5LDcuODM3LDcuODM3LDcuODM3czcuODM3LTMuNTA5LDcuODM3LTcuODM3ICAgICB2LTgzLjU5MkM3OC4zNjcsMTI1LjYzLDc0Ljg1OSwxMjIuMTIyLDcwLjUzMSwxMjIuMTIyeiIgZmlsbD0iI2ZiNzA3MCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJCQk8cGF0aCBkPSJNMzkuMTg0LDEyMi4xMjJjLTQuMzI4LDAtNy44MzcsMy41MDktNy44MzcsNy44Mzd2ODMuNTkyYzAsNC4zMjgsMy41MDksNy44MzcsNy44MzcsNy44MzdzNy44MzctMy41MDksNy44MzctNy44MzcgICAgIHYtODMuNTkyQzQ3LjAyLDEyNS42Myw0My41MTIsMTIyLjEyMiwzOS4xODQsMTIyLjEyMnoiIGZpbGw9IiNmYjcwNzAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQkJPHBhdGggZD0iTTcuODM3LDEyMi4xMjJjLTQuMzI4LDAtNy44MzcsMy41MDktNy44MzcsNy44Mzd2ODMuNTkyYzAsNC4zMjgsMy41MDksNy44MzcsNy44MzcsNy44MzcgICAgIGM0LjMyOCwwLDcuODM3LTMuNTA5LDcuODM3LTcuODM3di04My41OTJDMTUuNjczLDEyNS42MywxMi4xNjUsMTIyLjEyMiw3LjgzNywxMjIuMTIyeiIgZmlsbD0iI2ZiNzA3MCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJCTwvZz4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+";
  }
  return (
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey={transaction.date}>
        <div className="custRowItem">
          <div
            style={{
              display: "flex",
              alignItems: "center"
            }}
          >
            {" "}
            <figure className="icon" style={{ margin: "0" }}>
              <img
                src={imgSrc}
                alt="add new"
                height="30"
                className="d-inline-block align-top"
              />
            </figure>
            <h4 style={{ paddingLeft: "10px" }}>
              {transaction.trans + currency}
            </h4>
          </div>
          <p>
            <small>{transaction.date.toDateString()}</small>
          </p>
        </div>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={transaction.date}>
        <Card.Body>
          <p> notes: {transaction.notes} </p>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default TransactionItem;
