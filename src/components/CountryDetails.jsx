import React, { useState } from 'react';
import Language from './Language';
import BorderingCountry from './BorderingCountry';
import BackIcon from '../assets/icons/arrow-back.svg';
import { Link, useLocation } from 'react-router-dom';

function CountryDetails() {
  const countryDetailObj = useLocation().state;
  console.log(countryDetailObj);

  // For native name
  let commonNativeName, officialNativeName;
  const nativeName = countryDetailObj.name.nativeName;
  Object.entries(nativeName).forEach(([key, value]) => {
    officialNativeName = value.official;
    commonNativeName = value.common;
  });
  // For currency
  const currencyObj = countryDetailObj.currencies;
  let currencyName, currencySymbol;
  Object.entries(currencyObj).forEach(([key, value]) => {
    currencyName = value.name;
    currencySymbol = value.symbol;
  });

  // For Languages
  const languageObj = countryDetailObj.languages;
  // let languages = countryDetailObj{{key,value}};
  const languages = Object.values(languageObj).map((item, index) => (
    <Language key={index} number={index} name={item} />
  ));
  // Ror bordering countries
  let borderingCountries;
  if (countryDetailObj.borders === undefined) {
  } else {
    borderingCountries = countryDetailObj.borders.map((countryCode, index) => (
      <BorderingCountry key={index} countryCode={countryCode} />
    ));
  }
  return (
    <section id={countryDetailObj.name.common}>
      <Link to="/">
        <img src={BackIcon} alt="" /> Back
      </Link>
      <article>
        <img src={countryDetailObj.flag} alt="" />
        <h2>{countryDetailObj.name.common}</h2>
        <dl>
          <dt>Native Name:</dt>
          <dd>
            {officialNativeName} ({commonNativeName})
          </dd>
          <dt>Population:</dt>
          <dd>{countryDetailObj.population}</dd>
          <dt>Region:</dt>
          <dd>{countryDetailObj.region}</dd>
          <dt>Sub Region:</dt>
          <dd>{countryDetailObj.subRegion}</dd>
          <dt>Capital:</dt>
          <dd>{countryDetailObj.capital}</dd>
        </dl>
        <dl>
          <dt>Top Level Doamin:</dt>
          <dd>{countryDetailObj.topLevelDomain}</dd>
          <dt>Currencies:</dt>
          <dd>
            {currencyName} ({currencySymbol})
          </dd>
          <dt>Languages</dt>
          {languages}
        </dl>
        {<div className="bordering-countries">{borderingCountries}</div>}
      </article>
    </section>
  );
}
export default CountryDetails;
