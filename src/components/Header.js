import React from "react";
import styled from "styled-components";
import logo from "../assets/hermes-logo.svg";
import house from "../assets/house.svg";
import edit from "../assets/edit.svg";

const Header = () => {
  return (
    <HeaderDiv>
      <div className="container">
        <div>
          <button className="house-text">
            <img src={house} alt="house" />
            <span>Hermes.com</span>
          </button>
        </div>
        <div>
          <img src={logo} alt="logo hermes" />
        </div>
        <div>
          <button className="cand-text">
            <img src={edit} alt="edit" />
            <span>Candidature spontannée</span>
          </button>
        </div>
      </div>
    </HeaderDiv>
  );
};

export default Header;

const HeaderDiv = styled.div`
  background-color: #f6f1eb;
  box-shadow: 0 8px 16px rgb(217, 207, 197, 0.15);
  box-sizing: border-box;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    > div {
      flex: 1;
      display: flex;
      justify-content: center;
    }
    > div:first-child {
      justify-content: start;
    }
    > div:last-child {
      justify-content: flex-end;
    }
    img {
      width: 70px;
      height: 40px;
    }
    button {
      border: none;
      background-color: transparent;
      font-family: Helvetica, Helvetica W01, Arial, sans-serif;
      font-size: 14px;
      font-weight: 400;
      color: #696969;
      cursor: pointer;
      display: flex;
      align-items: center;
      img {
        width: 16px;
        margin-right: 10px;
      }
    }
    @media (max-width: 1024px) {
      .cand-text {
        img {
          margin-right: 0px;
        }
        span {
          display: none;
        }
      }
    }
    @media (max-width: 640px) {
      .house-text {
        img {
          margin-right: 0px;
        }
        span {
          display: none;
        }
      }
    }
  }
`;
