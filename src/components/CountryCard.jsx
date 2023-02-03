import React from "react";
import ReactCountryFlag from "react-country-flag";
import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
	return (
		<Link to={`/${country.code}`} className="shadow p-3 bg-lightBlack rounded flex flex-col justify-center items-center">
			<ReactCountryFlag className="text-9xl" countryCode={country.code && country.code} svg />
			{/* <sup className="mr-2 text-lg">{country.flag}</sup> */}
			<span className="text-lg font-semibold">{country.name}</span>
		</Link>
	);
};

export default CountryCard;
