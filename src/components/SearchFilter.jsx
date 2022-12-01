import React, { useState } from 'react';
import searchIcon from '../assets/icons/search.svg';

function SearchFilter({ setSearchType }) {
  function searchFilter(name) {
    console.log(name);
    name === '' ? setSearchType('all') : setSearchType(`name/${name}`);
  }

  function regionFilter(region) {
    region === 'all' ? setSearchType('all') : setSearchType(`region/${region}`);
  }

  return (
    <div className="grid-container-search-filter">
      <div className="search-container">
        <img className="search-icon" src={searchIcon} alt="" />
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
