import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import SearchFilter from './components/SearchFilter';
import CountryCard from './components/CountryCard';
import './assets/scss/main.scss';

function App() {
  const [countriesInfo, SetCountriesInfo] = useState([]);
  const [searchType, setSearchType] = useState('all');
  // Add result not found when input is wrong
  const [resultNotFound, setResultNotFound] = useState(false);

  useEffect(() => {
    const baseUrl = 'https://restcountries.com/';
    const version = 'v3.1';
    const getData = async function getCountriesInfo() {
      const response = await fetch(`${baseUrl}${version}/${searchType}`);
      const data = await response.json();
      SetCountriesInfo(data);
    };
    // Function launches after 0.5 seconds (1500 ms) of the last keystroke
    // On first render you don't want to launch anything
    // Thus, you check if the user typed a query at first
    let apiCallTimer = setTimeout(() => {
      if (searchType) getData();
    }, 500);
    // If useEffect() relaunches, you clear the function
    // That means, the previous function won't launch
    // Thus, won't send a request to the API
    return () => clearTimeout(apiCallTimer);
  }, [searchType]);

  const Countries = countriesInfo.map((countryInfo) => {
    return (
      <CountryCard
        key={countriesInfo.ccn3}
        flag={countryInfo.flags.png}
        name={countryInfo.name.common}
        population={countryInfo.population}
        region={countryInfo.region}
        capital={countryInfo.capital}
      />
    );
  });

  return (
    <div className="container">
      <Navbar />
      <main className="grid-container">
        <SearchFilter
          setSearchType={setSearchType}
          reslutNotFound={setResultNotFound}
        />
        {searchType && <div className="grid-container-card">{Countries}</div>}
      </main>
    </div>
  );
}

export default App;
