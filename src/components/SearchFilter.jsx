import React, { useState } from 'react';

function SearchFilter({ setSearchType }) {
  function searchFilter(name) {
    name === '' ? setSearchType('all') : setSearchType(`name/${name}`);
  }

  function regionFilter(region) {
    region === 'all' ? setSearchType('all') : setSearchType(`region/${region}`);
  }

  return (
    <div className="grid-container-search-filter">
      <div className="search-container">
        <span className="search-icon material-icons">search</span>
        <input
          type="text"
          name=""
          id=""
          className="search-bar"
          placeholder=" Search for a country... "
          onChange={(e) => searchFilter(e.target.value)}
        />
      </div>
      <select
        className="filter"
        name=""
        id=""
        onChange={(e) => regionFilter(e.target.value)}
      >
        {/* ? Change color and icon on click */}
        {/* <span className="material-icons">expand_less</span> */}
        <option value="all">Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
}
export default SearchFilter;
