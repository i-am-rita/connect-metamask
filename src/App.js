import "./index.css";
import styled from "@emotion/styled";
import { Navbar } from "./components/Navbar";
// import Button from "@mui/material/Button";
// import image from "../src/images/bitcoin-toon.jpg";
import { Link } from "react-router-dom";
function App() {
  return (
    <App.Wrapper className="container">
      <div className="initial-div">
        <div className="second-div">
          <Navbar />
        </div>
        <div className="hero-section">
          <div className="description-section">
            <h1>
              Discover the digital art <br />
              NFT marketplace
            </h1>
            <p>
              Lorem Icons can convey all sorts of meaningful information, so
              it's important to
              <br /> ensure they are accessible where appropriate.
            </p>
            <div className="learn">
              <button className="button-section">
                <Link to="/">Explore</Link>
              </button>
              <h4 className="learn-more">
                <Link to="/">Learn More</Link>
              </h4>
            </div>
          </div>
          <div className="image-section">
            {/* <h3>nbkbf v</h3> */}
            {/* <img src={image} alt="/" 
              style={{
                width: '100%',
                marginRight: '20px'

              }}
            /> */}
          </div>
        </div>
        <h2>Companies that trust Us</h2>
        <div className="middle-section">
          <p>Binance</p>
          <p>BitMex</p>
          <p>Blockport</p>
          <p>Coinbase</p>
        </div>
      </div>
    </App.Wrapper>
  );
}

export default App;

App.Wrapper = styled.div`
  @media and screen(max-width: 768px){
    width: 100%;
  }
  .initial-div {
    ${"" /* background: black; */}
    margin: 0 100px;
    height: 100vh;

    .second-div {
      border-bottom: 2px solid grey;
    }

    .hero-section {
      display: flex;
      flex-direction: row;
      margin-top: 50px;

      .description-section {
        h1 {
          font-size: 65px;
          text-transform: capitalize;
          line-height: 4rem;
          font-family: "Rubik Moonrocks", cursive;
          margin-top: 80px;
          color: #545454;
        }
        p {
          font-size: 20px;
          font-family: cursive;
          margin-bottom: 50px;
          font-family: 'Rubik Glitch', cursive;
          color: #545454;
        }
        .learn{
          display: flex;
          margin-bottom: 50px;
          align-items: center;

          .button-section{
            margin-right: 35px;
            padding: 15px 40px;
          font-size: 20px;
          font-weight: 700;
          border: none;
          color: #000;
        background-color: #545454;
        text-decoration: none;

        a{
          color: #000;
        background-color: #545454;
        text-decoration: none;
        }
          }
          .learn-more a{
            text-decoration: none;
            font-size: 20px;
            color:#545454;
          }
        }
      }
    }
        .middle-section{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      ${'' /* gap: 5rem; */}
      background:grey;
      padding: 40px 30px;
    
      width: 100%;
      p{
        ${'' /* font-size: 30px; */}
      font-family: 'Bungee', cursive;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      }
    }
    }
  }

`;
