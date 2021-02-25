import React from "react";
import styled from "styled-components";
import point from "../assets/point.svg";

const Card = ({ index, item }) => {
  return (
    <CardDiv index={index}>
      <div className="top">
        <p className="date">{item.date}</p>
        <h2>{item.title}</h2>
      </div>
      <div className="bottom">
        <ul>
          <li>{item.contract}</li>
          <li>
            <img src={point} alt="point" />
          </li>
          <li>{item.country}</li>
          <li>
            <img src={point} alt="point" />
          </li>
          <li>{item.city}</li>
        </ul>
      </div>
      <div></div>
    </CardDiv>
  );
};

export default Card;

const CardDiv = styled.div`
  height: 300px;
  width: 300px;
  background-color: #fffcf7;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
  position: relative;
  color: #4a4a4a;
  border: solid 6px #f6f1eb;
  font-family: Helvetica, Helvetica W01, Arial, sans-serif;
  margin-right: calc((70px - 8 * 6px) / 3);

  &:hover {
    color: white;
    border: solid 6px #fffcf7;
    ${({ index }) =>
      (index + 1) % 5 === 0
        ? `
        background-color: #f8c5af;`
        : (index + 1) % 5 === 4
        ? `
        background-color: #039fe3;`
        : (index + 1) % 5 === 3
        ? `
        background-color: #fe0;`
        : (index + 1) % 5 === 2
        ? `
        background-color: #3ea535;`
        : `
      background-color: #e30413;
`}
  }

  & div:first-child {
    padding: 0 20px;
    margin-top: 80px;

    p {
      font-size: 14px;
      line-height: 22px;
      font-weight: 700;
    }
    h2 {
      text-transform: uppercase;
      margin-top: 12px;
      width: 100%;
      margin-bottom: 18px;
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
    }
  }

  & div:nth-child(2) {
    padding: 0 20px;
    margin-bottom: 30px;
    ul {
      display: flex;
      flex-wrap: wrap;
      img {
        width: 4px;
        height: 4px;
        object-fit: cover;
        vertical-align: middle;
        margin: 0 5px;
      }
      li {
        font-size: 14px;
        line-height: 22px;
      }
    }
    ul li:first-child {
      text-transform: uppercase;
    }
  }
  & div:last-child {
    position: absolute;
    right: 0;
    top: 0;
    ${({ index }) =>
      (index + 1) % 5 === 0
        ? `width: 70px;
        height: 20px;
        background-color: #f8c5af;`
        : (index + 1) % 5 === 4
        ? `width: 20px;
        height: 70px;
        background-color: #039fe3;`
        : (index + 1) % 5 === 3
        ? `width: 70px;
        height: 20px;
        background-color: #fe0;`
        : (index + 1) % 5 === 2
        ? `width: 70px;
        height: 20px;
        background-color: #3ea535;`
        : `width: 20px;
      height: 70px;
      background-color: #e30413;
`}
  }

  @media (max-width: 1680px) {
    margin-right: calc((60px - 6 * 6px) / 2);
  }
  @media (max-width: 1024px) {
    margin-right: calc(30px - 4 * 6px);
  }
  @media (max-width: 640px) {
    width: 100%;
    height: 160px;
    & div:first-child {
      margin-top: 40px;
  }
`;
