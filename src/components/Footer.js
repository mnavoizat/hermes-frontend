import React from "react";
import styled from "styled-components";
import logo from "../assets/hermes-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <FooterDiv>
      <div className="container">
        <div>
          <div>
            <h2>FR</h2>
            <FontAwesomeIcon icon="angle-down" size="lg" />
          </div>
          <div>
            <button>Politique de confidentialité</button>
            <button>Mentions légales & CGU</button>
            <button>Cookies</button>
            <button>FAQ</button>
            <button>Accessibilité : partiellement conforme</button>
          </div>
        </div>
        <div>
          <div>© Hermès 2021. Tous droits réservés.</div>
          <div className="icon">
            <FontAwesomeIcon icon={["fab", "linkedin-in"]} size="lg" />
            <FontAwesomeIcon icon={["fab", "facebook-f"]} size="lg" />
            <FontAwesomeIcon icon={["fab", "instagram"]} size="lg" />
            <FontAwesomeIcon icon={["fab", "twitter"]} size="lg" />
            <FontAwesomeIcon icon={["fab", "youtube"]} size="lg" />
          </div>
        </div>
        <div>
          <img src={logo} alt="logo hermes" />
        </div>
      </div>
    </FooterDiv>
  );
};

export default Footer;

const FooterDiv = styled.div`
  background-color: #ffffff;
  color: #444;

  > div {
    > div:first-child {
      height: 80px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: Helvetica, Helvetica W01, Arial, sans-serif;
      border-bottom: 1px solid lightgray;

      div {
        display: flex;
      }

      h2 {
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        margin-right: 10px;
      }

      button {
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 14px;
        line-height: 24px;
        padding-left: 100px;
      }
    }
    > div:nth-child(2) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: Helvetica, Helvetica W01, Arial, sans-serif;
      height: 60px;

      .icon > * {
        margin-left: 40px;
      }
    }
    > div:last-child {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 90px;
    }

    @media (max-width: 1680px) {
      > div:first-child {
        button {
          padding-left: 40px;
        }
      }
      > div:nth-child(2) {
        .icon > * {
          margin-left: 30px;
        }
      }
    }
    @media (max-width: 1024px) {
      > div:first-child {
        flex-direction: column;
        height: 400px;
        align-items: start;
        padding-top: 40px;

        > div:nth-child(2) {
          flex: 1;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: start;
          button {
            padding-left: 0;
          }
        }
      }
      > div:nth-child(2) {
        justify-content: center;
        > div:first-child {
          display: none;
        }
        .icon > * {
          margin: 0 20px;
        }
      }
      > div:last-child {
        padding-top: 30px;
      }
    }
    @media (max-width: 640px) {
      padding: 0 20px;
    }
  }
`;
