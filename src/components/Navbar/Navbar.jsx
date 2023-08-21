import "./style.css";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav className="nav">
			<div className="container nav__wrapper">
				<ul className="nav__list ">
					<li className="nav__item"><Link className="nav__item" to="/flowers">Flowers</Link> </li>
					<li className="nav__item">
						<Link className="nav__item" to="/plants">Plants</Link>
					</li>
					<li className="nav__item">Gifts</li>
					<li className="nav__item">Discounts</li>
					<li className="nav__item">About us</li>
				</ul>
			</div>
		</nav >
	);
}

export default Navbar;
