import React from 'react';
import { Link } from 'react-router-dom';
function BorderingCountry(props) {
  const countryDetailsObj = {
    flag: props.flags.svg,
    name: props.name,
    population: props.population,
    region: props.region,
    subRegion: props.subregion,
    capital: props.capital,
    topLevelDomain: props.tld,
    currencies: props.currencies,
    languages: props.languages,
    borders: props.borders,
  };

  return (
    <Link
      to="/CountryDetails"
      state={countryDetailsObj}
      className="bordering-country"
    >
      {props.name.common}
    </Link>
  );
}
export default BorderingCountry;
