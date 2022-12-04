import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import SearchFilter from './components/SearchFilter';
import CountryCard from './components/CountryCard';
import './assets/scss/main.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';

function App() {
  const [countriesInfo, SetCountriesInfo] = useState([]);
  // Add searchType to all countries when calling tha api
  const [searchType, setSearchType] = useState('all');
  // Add result not found when input is wrong
  let [status, setStatus] = useState('OK');

  useEffect(() => {
    const baseUrl = 'https://restcountries.com/';
    const version = 'v3.1';
    const getData = async function getCountriesInfo() {
      const response = await fetch(`${baseUrl}${version}/${searchType}`);
      // If response.ok is true status='OK' and retrive response.json() and set it to countriesinfo
      if (response.ok) {
        setStatus(response.statusText);
        const data = await response.json();
        SetCountriesInfo(data);
      }
      // else set status ='Not Found' and reject response
      else {
        setStatus(response.statusText);
        Promise.reject(response);
      }
    };
    // Function launches after 0.5 seconds (1500 ms) of the last keystroke
    // On first render you don't want to launch anything
    // Thus, you check if the user typed a query at first
    let apiCallTimer = setTimeout(() => {
      if (searchType) getData();
    }, 100);
    // If useEffect() relaunches, you clear the function
    // That means, the previous function won't launch
    // Thus, won't send a request to the API
    return () => clearTimeout(apiCallTimer);
  }, [searchType]);

  const Countries = countriesInfo.map((countryInfo) => {
    return (
      <CountryCard
        {...countryInfo}
        // key={countryInfo.flag}
        // id={countryInfo.flag}
        // flag={countryInfo.flags.png}
        // name={countryInfo.name.common}
        // population={countryInfo.population}
        // region={countryInfo.region}
        // capital={countryInfo.capital}
      />
    );
  });
  return (
    <div className="container">
      <Navbar />
      <main className="grid-container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchFilter setSearchType={setSearchType} />
                <div className="grid-container-card">
                  {
                    // If status is 'OK' shows all the country else show status message
                    status === 'OK' ? (
                      Countries
                    ) : (
                      <span className="stat">"{status}"</span>
                    )
                  }
                </div>
              </>
            }
          ></Route>
          <Route
            path="/CountryDetails"
            element={<CountryDetails key={useLocation.key} />}
          ></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
