import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CountryDetail.css'; // Add this line to import external styles

const CountryDetail = () => {
  const { countryName } = useParams();
  const [country, setCountry] = useState({});
  
  useEffect(() => {
    const fetchCountryDetails = async () => {
      try {
        const url = `https://restcountries.com/v3.1/name/${countryName}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to fetch country details: ${response.statusText}`);
        }
        const data = await response.json();
        if (data.length > 0) {
          setCountry(data[0]);
        } else {
          console.warn(`No country found with name: ${countryName}`);
        }
      } catch (error) {
        console.error('Error fetching country details:', error);
      }
    };

    fetchCountryDetails();
  }, [countryName]);

  return (
    <div className="country-detail">
      <h1 className="country-name">Country Details Of - {countryName}</h1>

      {country.population ? (
        <div className="country-info">
          <div className="country-item">
            <h3>Population:</h3>
            <p>{country.population}</p>
          </div>
          <div className="country-item">
            <h3>Capital:</h3>
            <p>{country.capital}</p>
          </div>
          <div className="country-item">
            <h3>Coordinates:</h3>
            <p>{country.latlng ? `${country.latlng[0]}, ${country.latlng[1]}` : 'N/A'}</p>
          </div>

          <div className="country-item">
            <h3>Postal Code Format:</h3>
            {country.postalCode ? (
              <ul>
                <li>{country.postalCode.format} ({country.postalCode.regex})</li>
              </ul>
            ) : <p>N/A</p>}
          </div>

          <div className="country-item">
            <h3>Currency:</h3>
            {country.currencies ? (
              <ul>
                {Object.values(country.currencies).map((currency, index) => (
                  <li key={index}>{currency.name} ({currency.symbol})</li>
                ))}
              </ul>
            ) : <p>N/A</p>}
          </div>

          <div className="country-item">
            <h3>Region:</h3>
            <p>{country.region}</p>
          </div>

          <div className="country-item">
            <h3>SubRegion:</h3>
            <p>{country.subregion}</p>
          </div>

          <div className="country-item">
            <h3>Languages:</h3>
            {country.languages ? (
              <ul>
                {Object.values(country.languages).map((language, index) => (
                  <li key={index}>{language}</li>
                ))}
              </ul>
            ) : <p>N/A</p>}
          </div>

          <div className="country-item">
            <h3>Maps:</h3>
            {country.maps && (
              <div>
                <a href={country.maps.googleMaps} target="_blank" rel="noreferrer">
                  Google Maps
                </a>
                <br />
                <a href={country.maps.openStreetMaps} target="_blank" rel="noreferrer">
                  OpenStreetMap
                </a>
              </div>
            )}
          </div>
        </div>
      ) : (
        <p>Loading country details...</p>
      )}
    </div>
  );
};

export default CountryDetail;
