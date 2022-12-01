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
    async function getCountriesInfo() {
      const response = await fetch(`${baseUrl}${version}/${searchType}`);
      const data = await response.json();
      SetCountriesInfo(data);
    }
    getCountriesInfo();
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
