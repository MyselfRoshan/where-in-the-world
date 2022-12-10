import React, { useState } from 'react';

function SearchFilter({ setSearchType }) {
  const [regionFilter, setRegionFilter] = useState({
    icon: 'expand_more',
    itemsStatus: '',
  });
  function searchFilter(name) {
    name === '' ? setSearchType('all') : setSearchType(`name/${name}`);
  }

  function regionSearch(region) {
    if (region === 'All Region') region = 'all';
    region === 'all' ? setSearchType('all') : setSearchType(`region/${region}`);
  }

  function toggleFilterItems() {
    if (regionFilter.itemsStatus === '') {
      setRegionFilter({ icon: 'expand_less', itemsStatus: 'active' });
    } else {
      setRegionFilter({ icon: 'expand_more', itemsStatus: '' });
    }
  }

  return (
    <div className="grid-container-search-filter">
      <div className="search-container">
        <span className="search-icon material-icons">search</span>
        <input
          type="text"
          name="search-bar"
          id="search-bar"
          className="search-bar"
          placeholder=" Search for a country... "
          onChange={(e) => searchFilter(e.target.value)}
        />
      </div>
      <div className="filter">
        <button className="filter-btn" onClick={toggleFilterItems}>
          <span>Filter by Region</span>
          <span className="material-icons">filter_list</span>
          <span className="material-icons">{regionFilter.icon}</span>
        </button>
        <div
          className={`filter-items ${regionFilter.itemsStatus}`}
          onClick={(e) => (
            regionSearch(e.target.textContent),
            (regionFilter.itemsStatus = ''),
            (regionFilter.icon = 'expand_more')
          )}
        >
          <span className="filter-item">All Region</span>
          <span className="filter-item">Africa</span>
          <span className="filter-item">America</span>
          <span className="filter-item">Asia</span>
          <span className="filter-item">Europe</span>
          <span className="filter-item">Oceania</span>
        </div>
      </div>
    </div>
  );
}
export default SearchFilter;
