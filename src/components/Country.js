import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css'; // Add this line for external styles

const Country = (props) => {
  const { name, population, flags, capital } = props.country;
  const commonName = name.common; // Access common name for display

  return (
    <div className="country-card">
      <img className="country-flag" src={flags.png} alt={`${commonName} flag`} />
      <div className="country-details">
        <h4 className="country-name">{commonName}</h4>
        <p className="country-capital">Capital: {capital ? capital : 'N/A'}</p>
        <p className="country-population">Population: {population.toLocaleString()}</p>
        <Link className="country-link" to={`/Details/${commonName}`}>
          Show details of {commonName}
        </Link>
      </div>
    </div>
  );
};

export default Country;
