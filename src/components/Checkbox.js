import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Checkbox = ({ item, object, setObject }) => {
  return (
    <CheckboxDiv>
      <button
        onClick={() => {
          const newObject = { ...object };
          newObject[item].filter = !newObject[item].filter;
          setObject(newObject);
        }}
      >
        {object[item].filter && <FontAwesomeIcon icon="check" size="xs" />}
      </button>
      <p>
        {item} ({object[item].count})
      </p>
    </CheckboxDiv>
  );
};

export default Checkbox;

const CheckboxDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  button {
    width: 22px;
    height: 22px;
    border: 1px solid black;
    outline: none;
    background-color: transparent;
  }
  p {
    font-family: Helvetica, Helvetica W01, Arial, sans-serif;
    font-size: 14px;
    margin-left: 15px;
    color: #4a4a4a;
  }
`;
