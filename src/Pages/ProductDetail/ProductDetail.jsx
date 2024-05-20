import React, { useEffect, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader";

function ProductDetail() {
	const [product, setProduct] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const { productId } = useParams();
	console.log(productId);
	useEffect(() => {
		setIsLoading(true);
		axios
			.get(`${productUrl}/products/${productId}`)
			.then((res) => {
				console.log(`${productUrl}/products/${productId}`);
				setIsLoading(false);
				console.log(res);
				setProduct(res.data);
			})
			.catch((err) => {
				console.log(err);
				setIsLoading(false);
			});
	}, []);
	return (
		<LayOut>
			{isLoading ? (
				<Loader />
			) : (
				<ProductCard product={product} flex={true} renderDesc={true} />
			)}
		</LayOut>
	);
}

export default ProductDetail;
