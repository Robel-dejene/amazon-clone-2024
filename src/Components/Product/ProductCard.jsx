import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/Action.type";

function ProductCard({ product, flex, renderDesc }) {
	const { image, title, id, rating, price, description } = product;

	const [state, dispatch] = useContext (DataContext);

	console.log(state)



	const addToCart = () => {
		dispatch({
			Type: Type.ADD_TO_BASKET,
			item: {
				image,
				title,
				id,
				rating,
				price,
				description,
			},
		});
	};




	return (
		<div className={`${classes.first} ${flex ? classes.product__flexed : ""}`}>
			<Link to={`/products/${id}`}>
				<img src={image} alt="" />
			</Link>
			<div>
				<h3>{title}</h3>
				{renderDesc && <div style={{ maxWidth: "800px" }}>{description}</div>}
				<span className={classes.rating}>
					{/* rating */}
					<Rating value={rating?.rate} precision={0.1} />
					{/* rating counter */}
					<small>{rating?.count}</small>
				</span>
				<div>
					{/* price */}
					<CurrencyFormat amount={price} />
				</div>
				<button className={classes.button} onClick={addToCart}>add to cart</button>
			</div>
		</div>
	);
}

export default ProductCard;
