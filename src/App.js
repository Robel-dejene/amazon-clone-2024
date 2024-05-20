import "./App.css";
import React from "react";
import CarouselEffect from "./Components/Carousel/Carousel";
import Category from "./Components/Category/Category.jsx";
import Header from "./Components/Header/Header";
import Product from "./Components/Product/Product.jsx";
import LandingPage from "./Pages/LandingPage/LandingPage.jsx";
import Routing from "./Router.jsx";


function App() {
	return (
		<div>
			<Routing />
		</div>
	);
}

export default App;
