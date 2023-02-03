import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ChannelCard from "../../components/ChannelCard";

const SelectedCountry = () => {
	const { countryId } = useParams();
	const res = useLoaderData();
	const data = res.data.filter((cn) => cn.country === countryId);
	return (
		<div className="container grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 py-10">
			{data.map((channel) => (
				<ChannelCard key={channel.id} channel={channel} />
			))}
		</div>
	);
};

export default SelectedCountry;
