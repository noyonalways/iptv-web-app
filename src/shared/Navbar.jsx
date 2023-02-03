import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
	let [open, setOpen] = useState(false);
	return (
		<header className="transition-colors backdrop-blur-2xl duration-300 py-3 md:py-0  bg-[#2222227c] px-3 shadow-sm sticky top-0 z-10 ">
			<nav className="flex justify-between items-center container">
				<NavLink className="text-lg font-bold" to="/">
					IPTV
				</NavLink>
				<div className="w-10 md:hidden" onClick={() => setOpen(!open)}>
					{open ? <XMarkIcon /> : <Bars3Icon />}
				</div>
				<ul
					className={` md:flex items-center md:space-x-5 lg:items-center lg:py-0 py-4 absolute lg:static left-0 w-full lg:z-auto z-[-1] lg:w-auto lg:px-0  sm:px-6 lg:space-x-5 transition-colors  duration-300  bg-[#222222d0] lg:bg-transparent dark:lg:bg-transparent rounded ${
						open ? "top-[54px]" : "top-[-490px]"
					}`}
				>
					<li className="hover:bg-gray-400 px-7 md:px-3 py-4">
						<NavLink
							className={({ isActive }) => (isActive ? "underline" : undefined)}
							to="/"
						>
							Home
						</NavLink>
					</li>
					<li className="hover:bg-gray-400 px-7 md:px-3 py-4">
						<NavLink
							className={({ isActive }) => (isActive ? "underline" : undefined)}
							to="/about"
						>
							About
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
