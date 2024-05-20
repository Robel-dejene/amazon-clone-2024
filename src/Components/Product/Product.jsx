import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard.jsx";
import classes from "./Product.module.css";
import Loader from "../Loader/Loader.jsx";
function Product() {
	const [Products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		axios
			.get("https://fakestoreapi.com/products")
			.then((res) => {
				setIsLoading(false)
				setProducts(res.data);
				console.log(res);
			})
			.catch((err) => {
				setIsLoading(false)
				console.log(err);
			});
	}, []);
	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<div className={classes.porduct__container}>
					{Products &&
						Products?.map((singleProduct) => (
							<ProductCard product={singleProduct} key={singleProduct.id} renderAdd={true}/>
						))}
				</div>
			)}
		</>
	);
}

export default Product;
