import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Checkbox = ({ item, counts, filters, setFilters }) => {
  return (
    <CheckboxDiv>
      <button
        onClick={() => {
          const newFilters = { ...filters };
          newFilters[item] = !newFilters[item];
          setFilters(newFilters);
        }}
      >
        {filters[item] && <FontAwesomeIcon icon="check" size="xs" />}
      </button>
      <p>
        {item} ({counts[item]})
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
