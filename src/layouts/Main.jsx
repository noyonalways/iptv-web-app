import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";

const Main = () => {
	return (
		<div className="bg-black text-white font-hindSiliguri">
			<Navbar />
			<Outlet />
		</div>
	);
};

export default Main;
