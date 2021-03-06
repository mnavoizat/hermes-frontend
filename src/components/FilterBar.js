import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FiltersMenu from "./FiltersMenu";

const FilterBar = ({
  count,
  countries,
  countriesFilters,
  setCountriesFilters,
  contracts,
  contractsFilters,
  setContractsFilters,
  jobs,
  jobsFilters,
  setJobsFilters,
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
          {(Object.values(countriesFilters).includes(true) ||
            Object.values(contractsFilters).includes(true) ||
            Object.values(jobsFilters).includes(true)) && (
            <p>
              {" "}
              :{" "}
              <span>
                {[
                  Object.values(countriesFilters).includes(true),
                  Object.values(contractsFilters).includes(true),
                  Object.values(jobsFilters).includes(true),
                ].reduce((acc, curr) => {
                  if (curr) {
                    acc++;
                  }
                  return acc;
                })}{" "}
                choix
              </span>
            </p>
          )}
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
          countriesFilters={countriesFilters}
          setCountriesFilters={setCountriesFilters}
          contracts={contracts}
          contractsFilters={contractsFilters}
          setContractsFilters={setContractsFilters}
          jobs={jobs}
          jobsFilters={jobsFilters}
          setJobsFilters={setJobsFilters}
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

      span {
        text-decoration: underline;
      }
    }
  }
`;
