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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeStates = () => {
      let newCountries = {};
      let newContracts = {};
      let newJobs = {};

      for (let i = 0; i < data.length; i++) {
        if (newCountries.hasOwnProperty(data[i].country)) {
          newCountries[data[i].country].count++;
        } else {
          newCountries[data[i].country] = { count: 1, filter: true };
        }
        if (newContracts.hasOwnProperty(data[i].contract)) {
          newContracts[data[i].contract].count++;
        } else {
          newContracts[data[i].contract] = { count: 1, filter: true };
        }
        if (newJobs.hasOwnProperty(data[i].title)) {
          newJobs[data[i].title].count++;
        } else {
          newJobs[data[i].title] = { count: 1, filter: true };
        }
      }
      console.log(newCountries);
      console.log(newContracts);
      console.log(newJobs);
      setCountries(newCountries);
      setContracts(newContracts);
      setJobs(newJobs);

      setIsLoading(false);
    };
    initializeStates();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      let newSelectedData = [];
      for (let i = 0; i < data.length; i++) {
        if (
          countries[data[i].country].filter &&
          contracts[data[i].contract].filter &&
          jobs[data[i].title].filter
        ) {
          newSelectedData.push(data[i]);
        }
      }
      setSelectedData(newSelectedData);
      console.log(newSelectedData);
    }
  }, [isLoading, countries, contracts, jobs]);

  return isLoading ? null : (
    <div className="home">
      <div className="container">
        <FilterBar
          count={selectedData.length}
          countries={countries}
          setCountries={setCountries}
          contracts={contracts}
          setContracts={setContracts}
          jobs={jobs}
          setJobs={setJobs}
        />
        <div className="card-container">
          {selectedData.map((item, index) => {
            return <Card key={index} index={index} item={item} />;
          })}
        </div>
        <div className="button-div">
          <Button>Voir plus d'opportunités</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;

const Button = styled.button`
  background-color: #444;
  color: #fff;
  padding: 12px 40px;
  border: none;
  border-radius: 5px;
  box-sizing: border-box;
  font-family: Courier New, Courier, monospace;
  margin-top: 20px;
  cursor: pointer;
`;
