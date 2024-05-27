import React, { useState, useContext } from "react";
import classes from "./Auth.module.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../Utility/firebase";
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utility/Action.type";
import { HashLoader } from "react-spinners";

function Auth() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState({
		signin: false,
		signup: false,
	});

	const [{ user }, dispatch] = useContext(DataContext);
	const navigate = useNavigate();
	const navStateData = useLocation();
	console.log(navStateData);

	// console.log(user);

	const authHandler = async (e) => {
		e.preventDefault();
		console.log(e.target.name);
		if (e.target.name == "signin") {
			// firebase autentication
			setLoading({ ...loading, signin: true });
			signInWithEmailAndPassword(auth, email, password)
				.then((userInfo) => {
					// console.log(userInfo);
					dispatch({
						type: Type.SET_USER,
						user: userInfo.user,
					});
					setLoading({ ...loading, signin: false });
					navigate(navStateData?.state?.redirect || "/");
				})
				.catch((err) => {
					// console.log(err);
					setError(err.message);
					setLoading({ ...loading, signin: false });
				});
		} else {
			setLoading({ ...loading, signup: true });
			createUserWithEmailAndPassword(auth, email, password)
				.then((userInfo) => {
					// console.log(userInfo);
					dispatch({
						type: Type.SET_USER,
						user: userInfo.user,
					});
					setLoading({ ...loading, signup: false });
					navigate(navStateData?.state?.redirect || "/");
				})
				.catch((err) => {
					// console.log(err);
					setError(err.message);
					setLoading({ ...loading, signup: false });
				});
		}
	};

	// console.log(password, email);

	return (
		<section className={classes.login}>
			{/* logo */}
			<Link to="/">
				<img
					src="https://pngimg.com/uploads/amazon/amazon_PNG3.png"
					alt="amazon logo"
				/>
			</Link>
			{/* form  */}
			<div className={classes.login__container}>
				<h1>Sign-In</h1>
				{navStateData?.state?.msg && (
					<small
						style={{
							padding: "5px",
							textAlign: "center",
							color: "red",
							fontWeight: "bold",
						}}
					>
						{navStateData?.state?.msg}
					</small>
				)}
				<form action="">
					<div>
						<label htmlFor="email">E-mail</label>
						<input
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							type="email"
							id="email"
						/>
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							type="password"
							id="password"
						/>
					</div>
					<button
						type="submitt"
						name="signin"
						onClick={authHandler}
						className={classes.login__signinButton}
					>
						{loading.signin ? (
							<HashLoader color="#000" size={15} speedMultiplier={3} />
						) : (
							"Sign In"
						)}
					</button>
				</form>
				{/* agreement */}
				<p>
					By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
					Sale. Please see our Privacy Notice, our Cookies Notice and our
					Interest-Based Ads Notice.
				</p>
				{/* create account button */}
				<button
					type="submitt"
					name="signup"
					onClick={authHandler}
					className={classes.login__registerButton}
				>
					{loading.signup ? (
						<HashLoader color="#000" size={15} speedMultiplier={3} />
					) : (
						"Create your Amazon Account"
					)}
				</button>
				{error && (
					<small style={{ paddingTop: "15px", color: "red" }}>{error}</small>
				)}
			</div>
		</section>
	);
}

export default Auth;
