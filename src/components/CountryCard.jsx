import React from 'react';

function CountryCard(props) {
  return (
    <article className="country-card">
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <img className="country-flag" src={props.flag} alt="" />
      </a>
      <div className="country-card-body">
        <h2 className="country-name">{props.name}</h2>
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
