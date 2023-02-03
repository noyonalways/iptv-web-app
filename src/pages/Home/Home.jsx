import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import CountryCard from "../../components/CountryCard";

const Home = () => {
	const { data } = useLoaderData();

	return (
		<div className="container grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 py-10">
			{data.slice(0, 100).map((country) => (
				<CountryCard country={country} key={country.code} />
			))}
		</div>
	);
};

export default Home;
