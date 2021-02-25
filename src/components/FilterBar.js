import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FiltersMenu from "./FiltersMenu";

const FilterBar = ({
  count,
  countries,
  setCountries,
  contracts,
  setContracts,
  jobs,
  setJobs,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <FilterDiv>
        <div>
          <h1>Nos opportunités</h1>
          <p>({count})</p>
        </div>
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <p>Filtres</p>
          {isOpen ? (
            <FontAwesomeIcon icon="angle-up" size="lg" />
          ) : (
            <FontAwesomeIcon icon="angle-down" size="lg" />
          )}
        </button>
      </FilterDiv>
      {isOpen && (
        <FiltersMenu
          countries={countries}
          setCountries={setCountries}
          contracts={contracts}
          setContracts={setContracts}
          jobs={jobs}
          setJobs={setJobs}
        />
      )}
    </div>
  );
};

export default FilterBar;

const FilterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 110px;
  border-bottom: solid 1px lightgray;

  div {
    h1 {
      font-family: Orator W01;
      font-size: 32px;
      line-height: 37px;
    }
    p {
      font-family: Helvetica, Helvetica W01, Arial, sans-serif;
      font-size: 14px;
      line-height: 20px;
    }
  }
  button {
    border: none;
    outline: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    cursor: pointer;
    p {
      font-family: Orator W01;
      font-size: 20px;
      line-height: 20px;
      margin-right: 10px;
    }
  }
`;
