import React from "react";
import styled from "styled-components";
import Checkbox from "./Checkbox";

const FiltersMenu = ({
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
  return (
    <FiltersMenuDiv>
      <div>
        <div>
          <h2>Pays/Région</h2>
          {Object.keys(countries).map((item, index) => {
            return (
              <Checkbox
                item={item}
                key={index}
                counts={countries}
                filters={countriesFilters}
                setFilters={setCountriesFilters}
              />
            );
          })}
        </div>
        <div>
          <h2>Type de contrat</h2>
          {Object.keys(contracts).map((item, index) => {
            return (
              <Checkbox
                item={item}
                key={index}
                counts={contracts}
                filters={contractsFilters}
                setFilters={setContractsFilters}
              />
            );
          })}
        </div>
      </div>
      <div>
        <h2>Métier</h2>
        {Object.keys(jobs).map((item, index) => {
          return (
            <Checkbox
              item={item}
              key={index}
              counts={jobs}
              filters={jobsFilters}
              setFilters={setJobsFilters}
            />
          );
        })}
      </div>
    </FiltersMenuDiv>
  );
};

export default FiltersMenu;

const FiltersMenuDiv = styled.div`
  margin-top: 40px;
  width: 100%;
  background-color: #fffcf7;
  display: flex;

  > div:first-child {
    flex: 1;
    padding: 40px 25px;
    padding-right: 0px;
    display: flex;
    justify-content: space-between;
    > div {
      flex: 1;
    }
    > div:first-child {
      margin-right: 25px;
    }
  }

  > div:last-child {
    flex: 1;
    padding: 40px 25px;
  }
  h2 {
    font-family: Orator W01;
    font-size: 21px;
    line-height: 20px;
    padding-bottom: 25px;
    border-bottom: solid 1px lightgrey;
  }

  @media (max-width: 1680px) {
    > div:first-child {
      flex-direction: column;

      > div:first-child {
        margin-right: 0px;
        margin-bottom: 50px;
      }
    }
    > div:last-child {
      flex: 3;
    }
  }
  @media (max-width: 1024px) {
    > div:last-child {
      flex: 1;
    }
  }
  @media (max-width: 640px) {
  }
`;
