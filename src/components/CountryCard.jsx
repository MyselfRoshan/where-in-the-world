import React from 'react';
import { Link } from 'react-router-dom';

function CountryCard(props) {
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
    <article className="country-card" id={props.flag}>
      <Link to="/CountryDetails" state={countryDetailsObj}>
        <img className="country-flag" src={props.flags.png} alt="" />
      </Link>
      <div className="country-card-body">
        <Link
          className="country-name"
          to="/CountryDetails"
          state={countryDetailsObj}
        >
          <h2>{props.name.common}</h2>
        </Link>
        <div>
          <p className="country-population">
            Population: <span>{props.population}</span>
          </p>
          <p className="country-region">
            Region: <span>{props.region}</span>
          </p>
          <p className="country-capital">
            Capital: <span>{props.capital}</span>
          </p>
        </div>
      </div>
    </article>
  );
}
export default CountryCard;
