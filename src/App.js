import "./App.css";
import React, { useContext, useEffect } from "react";
import CarouselEffect from "./Components/Carousel/Carousel";
import Category from "./Components/Category/Category.jsx";
import Header from "./Components/Header/Header";
import Product from "./Components/Product/Product.jsx";
import LandingPage from "./Pages/LandingPage/LandingPage.jsx";
import Routing from "./Router.jsx";
import { DataContext } from "./Components/DataProvider/DataProvider.jsx";
import { Type } from "./Utility/Action.type.jsx";
import { auth } from "./Utility/firebase.jsx";

function App() {
	const [{ user }, dispatch] = useContext(DataContext);
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				// console.log(authUser);
				dispatch({
					type: Type.SET_USER,
					user: authUser,
				});
			} else {
				dispatch({
					type: Type.SET_USER,
					user: null,
				});
			}
		});
	}, []);
	return (
		<div>
			<Routing />
		</div>
	);
}

export default App;
