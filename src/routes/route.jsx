import axios from "axios";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import SelectedCountry from "../pages/SelectedCountry/SelectedCountry";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [
			{
				path: "/",
				loader: async () =>
					await axios.get("https://iptv-org.github.io/api/countries.json"),
				element: <Home />,
			},
			{
				path: "/:countryId",
				loader: async () =>
					await axios.get("https://iptv-org.github.io/api/channels.json"),
				element: <SelectedCountry />,
			},
			{
				path: "/about",
				element: <About />,
			},
		],
	},
]);

export default router;
