import React, { useContext } from "react";
import classes from "./Header.module.css";
import flag from "../Header/images/flag.png";
import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import LowerHeader from "./LowerHeader";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../Utility/firebase";

function Header() {
	const [{ basket, user }, dispatch] = useContext(DataContext);
	const totalItem = basket?.reduce((amount, item) => {
		return item.amount + amount;
	}, 0);
	console.log(basket.length);
	return (
		<section className={classes.fixed}>
			<section className={classes.fixit}>
				<div className={classes.header__container}>
					{/* logo section */}
					<div className={classes.logo__container}>
						<Link to="/">
							<img
								src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
								alt="amazon logo"
							/>
						</Link>
						<div className={classes.delivery}>
							<span>
								<SlLocationPin />
							</span>
							<div>
								<p>Deliver to</p>
								<span>Ethiopia</span>
							</div>
						</div>
					</div>
					{/* search section */}
					<div className={classes.search}>
						<select name="" id="">
							<option value="">All</option>
						</select>
						<input type="text" />
						<BsSearch size={38} />
					</div>
					{/* other section */}
					<div className={classes.order__container}>
						<Link to="" className={classes.language}>
							<img src={flag} alt="" />
							<select name="" id="">
								<option value="">EN</option>
							</select>
						</Link>
						<Link to={!user && "/auth"}>
							<div>
								{user ? (
									<>
										<p>Hello {user?.email?.split("@")[0]} </p>
										<span onClick={()=>auth.signOut()}>Sign Out</span>
									</>
								) : (
									<>
										<p>Sign In</p>
										<span>Account & Lists</span>
									</>
								)}
							</div>
						</Link>
						<Link to="/orders">
							<p>returns</p>
							<span>& Orders</span>
						</Link>
						<Link to="/cart" className={classes.cart}>
							<BsCart size={35} />
							<span>{totalItem}</span>
						</Link>
					</div>
				</div>
			</section>
			<LowerHeader />
		</section>
	);
}

export default Header;
