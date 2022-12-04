import React from 'react';
import BackIcon from '../assets/icons/arrow-back.svg';
import { Link, useLocation } from 'react-router-dom';

function CountryDetails() {
  const countryDetailObj = useLocation().state;
  console.log(countryDetailObj);
  // ?For native name
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
  // ? Soesn't work for multi languages
  const languageObj = countryDetailObj.languages;
  let languageName;
  Object.entries(languageObj).forEach(([key, value]) => {
    languageName = value;
    console.log(languageName);
  });

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
          {/* <dd>{countryDetailObj.name.nativeName.ara.common}</dd> */}
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
          <dd>{languageName[1]}</dd>
        </dl>
        {/* <dt>Languages</dt>
          <dd>{countryDetailObj.languages}</dd> */}
        <div className="bordering-countries">
          <span>France</span>
          <span>Germany</span>
          <span>Netherlands</span>
        </div>
      </article>
    </section>
  );
}
export default CountryDetails;
