import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Auth from "./Pages/Auth/Auth";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
const stripePromise = loadStripe(
	"pk_test_51PJbEbLUcHXuRbrWlyJTfoz5HImHEQcRxP10p29GH1oWDoOWTfQidZ2HCol3zwTf8sEL5sVAecT6KqaOiyecWRnS00otYzsoGU"
);

function Routing() {
	return (
		<div>
			<Router>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/auth" element={<Auth />} />
					<Route
						path="/payments"
						element={
							<ProtectedRoute
								msg={"you must login to pay"}
								redirect={"/payments"}
							>
								<Elements stripe={stripePromise}>
									<Payment />
								</Elements>
							</ProtectedRoute>
						}
					/>
					<Route
						path="/orders"
						element={
							<ProtectedRoute
								msg={"you must login to access your orders"}
								redirect={"/orders"}
							>
								<Orders />
							</ProtectedRoute>
						}
					/>
					<Route path="/category/:categoryName" element={<Results />} />
					<Route path="/products/:productId" element={<ProductDetail />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</Router>
		</div>
	);
}

export default Routing;
