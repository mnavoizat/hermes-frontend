import React, { useState, useEffect } from "react";
import FilterBar from "../components/FilterBar";
import Card from "../components/Card";
import styled from "styled-components";

import data from "../data/data.json";

const Home = () => {
  const [selectedData, setSelectedData] = useState(data);
  const [countries, setCountries] = useState();
  const [contracts, setContracts] = useState();
  const [jobs, setJobs] = useState();
  const [countriesFilters, setCountriesFilters] = useState();
  const [contractsFilters, setContractsFilters] = useState();
  const [jobsFilters, setJobsFilters] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeFilters = () => {
      let newCountriesFilters = {};
      let newContractsFilters = {};
      let newJobsFilters = {};

      for (let i = 0; i < data.length; i++) {
        if (!newCountriesFilters.hasOwnProperty(data[i].country)) {
          newCountriesFilters[data[i].country] = false;
        }
        if (!newContractsFilters.hasOwnProperty(data[i].contract)) {
          newContractsFilters[data[i].contract] = false;
        }
        if (!newJobsFilters.hasOwnProperty(data[i].title)) {
          newJobsFilters[data[i].title] = false;
        }
      }

      setCountriesFilters(newCountriesFilters);
      setContractsFilters(newContractsFilters);
      setJobsFilters(newJobsFilters);
    };

    initializeFilters();
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const selectData = () => {
      let newSelectedCountries = [];
      let newSelectedContracts = [];
      let newSelectedJobs = [];

      for (let i = 0; i < data.length; i++) {
        if (countriesFilters[data[i].country]) {
          newSelectedCountries.push(data[i]);
        }
        if (contractsFilters[data[i].contract]) {
          newSelectedContracts.push(data[i]);
        }
        if (jobsFilters[data[i].title]) {
          newSelectedJobs.push(data[i]);
        }
      }

      if (newSelectedCountries.length === 0) {
        newSelectedCountries = [...data];
      }
      if (newSelectedContracts.length === 0) {
        newSelectedContracts = [...data];
      }
      if (newSelectedJobs.length === 0) {
        newSelectedJobs = [...data];
      }

      setSelectedData(
        newSelectedCountries
          .filter((value) => newSelectedContracts.includes(value))
          .filter((value) => newSelectedJobs.includes(value))
      );
    };

    if (!isLoading) {
      selectData();
    }
  }, [isLoading, countriesFilters, contractsFilters, jobsFilters]);

  useEffect(() => {
    const displayFilters = () => {
      let newCountries = {};
      let newContracts = {};
      let newJobs = {};

      for (let i = 0; i < selectedData.length; i++) {
        if (newCountries.hasOwnProperty(selectedData[i].country)) {
          newCountries[selectedData[i].country]++;
        } else {
          newCountries[selectedData[i].country] = 1;
        }
        if (newContracts.hasOwnProperty(selectedData[i].contract)) {
          newContracts[selectedData[i].contract]++;
        } else {
          newContracts[selectedData[i].contract] = 1;
        }
        if (newJobs.hasOwnProperty(selectedData[i].title)) {
          newJobs[selectedData[i].title]++;
        } else {
          newJobs[selectedData[i].title] = 1;
        }
      }

      setCountries(newCountries);
      setContracts(newContracts);
      setJobs(newJobs);
    };
    if (!isLoading) {
      displayFilters();
    }
  }, [isLoading, selectedData]);

  return isLoading ? null : (
    <div>
      <div className="container">
        <FilterBar
          count={selectedData.length}
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
        <div className="card-container">
          {selectedData.map((item, index) => {
            return <Card key={index} index={index} item={item} />;
          })}
        </div>
        <ButtonDiv>
          <button>Voir plus d'opportunités</button>
        </ButtonDiv>
      </div>
    </div>
  );
};

export default Home;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 40px;

  button {
    background-color: #444;
    color: #fff;
    padding: 12px 40px;
    border: none;
    border-radius: 5px;
    box-sizing: border-box;
    font-family: Courier New, Courier, monospace;
    margin-top: 20px;
    cursor: pointer;
  }
`;
