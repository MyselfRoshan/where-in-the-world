import React, { useContext, useEffect } from 'react';
import Language from './Language';
import BorderingCountry from './BorderingCountry';
import { useLocation, useNavigate } from 'react-router-dom';
import { searchTypeContext } from '../App';

function CountryDetails(props) {
  const setSearchType = useContext(searchTypeContext);
  const countryDetailObj = useLocation().state;
  const navigate = useNavigate();

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
  // For bordering countries
  let borderingCountries;
  if (countryDetailObj.borders === undefined) {
  } else {
    // Converting borderingcountry code name to string separated by comma
    let countryCodes = '';
    countryDetailObj.borders.forEach((countryCode, index) =>
      !index
        ? (countryCodes += countryCode)
        : (countryCodes += `,${countryCode}`),
    );
    /* To remove Warning: Cannot update a component (`App`) 
       while rendering a different component (`CountryDetails`).
       To locate the bad setState() call inside `CountryDetails` */
    useEffect(() => {
      setSearchType(`alpha?codes=${countryCodes}`);
    }, [countryCodes]);
    borderingCountries = props.borderingCountries.map(
      (borderingCountry, index) => (
        <BorderingCountry key={index} {...borderingCountry} />
      ),
    );
  }
  return (
    <article
      id={countryDetailObj.name.common}
      className="grid-container-details country-details"
    >
      <div className="back-btn__wrapper">
        <button
          className="back-btn"
          onClick={() => {
            // To go back to the main Page
            setSearchType('all');
            navigate('/');
          }}
        >
          <span className="material-icons">keyboard_backspace</span> Back
        </button>
      </div>
      <img
        className="country-details__flag"
        src={countryDetailObj.flag}
        alt={countryDetailObj.name.common}
      />
      <div className="country-details__body">
        <h2>{countryDetailObj.name.common}</h2>
        <section>
          <ul className="equal-columns">
            <li>
              <h3 className="country-details__body-heading">Native Name:</h3>
              <span className="country-details__body-info">
                {officialNativeName} ({commonNativeName})
              </span>
            </li>
            <li>
              <h3 className="country-details__body-heading">Population:</h3>
              <span className="country-details__body-info">
                {countryDetailObj.population}
              </span>
            </li>
            <li>
              <h3 className="country-details__body-heading">Region:</h3>
              <span className="country-details__body-info">
                {countryDetailObj.region}
              </span>
            </li>
            <li>
              <h3 className="country-details__body-heading">Sub Region:</h3>
              <span className="country-details__body-info">
                {countryDetailObj.subRegion}
              </span>
            </li>
            <li>
              <h3 className="country-details__body-heading">Capital: </h3>
              <span className="country-details__body-info">
                {countryDetailObj.capital}
              </span>
            </li>
          </ul>
          <ul className="equal-columns">
            <li>
              <h3 className="country-details__body-heading">
                Top Level Doamin:
              </h3>
              <span className="country-details__body-info">
                {countryDetailObj.topLevelDomain}
              </span>
            </li>
            <li>
              <h3 className="country-details__body-heading">Currencies:</h3>
              <span className="country-details__body-info">
                {currencyName} ( {currencySymbol} )
              </span>
            </li>
            <li>
              <h3 className="country-details__body-heading">Languages:</h3>{' '}
              {languages}
            </li>
          </ul>
        </section>
        <div className="bordering-countries">
          <h3 className="country-details__body-heading">Border Countries:</h3>
          {borderingCountries}
        </div>
      </div>
    </article>
  );
}
export default CountryDetails;
