import React, { useState } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
// import SearchIcon from '@mui/icons-material/Search';

// Using Async here because the data we're requesting here might take time
async function getAccount() {
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  const account = accounts[0];
  return account;
}
export function Navbar() {
  const [addressAccount, setAddressAccount] = useState("");
  const connectWalletOnclick = () => {
    if (window !== "undefined") {
      getAccount().then((response) => {
        setAddressAccount(response);
      });
    }
  };
  return (
    <Navbar.Wrapper className="navbar-container">
      <nav className="navbar">
        <h1>
          <Link to="/" className="logo">
            NFT.io
          </Link>
        </h1>
        <ul className="unordered-nav">
          <li className="list-nav">
            <Link to="/">Discover</Link>
            <Link to="/">Features</Link>
            <Link to="/">Market</Link>
            <Link to="/">Explore</Link>
          </li>
        </ul>
        {/* <SearchIcon className="search-icon"/> */}

        <div className="nav-buttons">
          <Button variant="outlined" className="buttonss">
            Log In
          </Button>
          <Button
            variant="contained"
            className="buttones"
            onClick={connectWalletOnclick}
          >
            {!!addressAccount ? addressAccount : "Connect Wallet"}
          </Button>
        </div>
      </nav>
    </Navbar.Wrapper>
  );
}

Navbar.Wrapper = styled.div`
  padding: 30px 0;
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin: 0;
    padding: 0;
    .logo {
      color: #545454;
      text-decoration: none;
      font-size: 30px;
      font-family: "Rubik Moonrocks", cursive;
    }

    .unordered-nav {
      display: flex;
      justify-content: space-around;
      list-style-type: none;
      margin: 0;
      padding: 0;

      a {
        text-decoration: none;
        color: #545454;
        display: inline-block;
        padding: 0 15px;
        font-size: 25px;
        font-family: "Rubik Moonrocks", cursive;
      }
    }
    .nav-buttons {
      display: inline;
      justify-content: center;
      align-items: center;
      text-align: center;
      .buttonss {
        margin-right: 20px;
        justify-content: space-between;
        font-size: 15px;
        color: #545454;
        border: 1px solid #545454;
        border-radius: 0;
        font-family: "Rubik Moonrocks", cursive;
      }
      .buttones {
        color: #000;
        background-color: #545454;
        border-radius: 0;
        font-size: 15px;
        font-family: "Rubik Moonrocks", cursive;
      }
    }
  }
  @media (max-width: 780px) {
    .navbar {
      .logo {
        font-size: 10px;
      }
      .unordered-nav {
        a {
          font-size: 10px;
          padding: 0 5px;
        }
      }
      .nav-buttons {
        font-size: 12px;
        padding: 0 5px;
      }
    }
  }
`;
