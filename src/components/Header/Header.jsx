import Location from "../../assets/icons/location.svg";
import Search from "../../assets/icons/search.svg";
import Chart from "../../assets/icons/chart.svg";
import Menu from "../../assets/icons/menu.svg";
import MenuX from "../../assets/icons/menuX.svg";
import "./style.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

const headerer = () => {

	const [menu, setMenu] = useState(false)

	return (
		<header >
			<div className=" header ">
				<div className="header__wrapper">
					<Link to='/'>
						<div className="nav-items1">
							<img
								src={Location}
								alt="../../assets/icons/location.svg"
							/>
							<p>Tashkent</p>
						</div>
					</Link>
					<div className="menu" onClick={() => setMenu(menu == true ? false : true)}>
						{
							menu == true ? < img src={MenuX} alt="menu icon" /> : < img src={Menu} alt="menu icon" />
						}
					</div>
					<div className="nav-items">
						<img src={Search} alt="../../assets/icons/search.svg" />
						<img src={Chart} alt="../../assets/icons/chart.svg" />
					</div>
				</div>
				<div className="header__wrapper-m" style={menu == true ? { display: 'flex' } : { display: "none" }}>
					<ul className="header__list">
						<li className="header__item"><Link to='flowers' className="header__link"> Flower <span>+</span></Link></li>
						<li className="header__item"><Link to='plants' className="header__link"> Plants <span>+</span></Link></li>
						<li className="header__item"><Link to='plants' className="header__link"> Gifts <span>+</span></Link></li>
						<li className="header__item"><Link to='plants' className="header__link"> About <span>+</span></Link></li>
						<li className="header__item"><Link to='plants' className="header__link"> Discount <span>+</span></Link></li>
					</ul>
					<div className="header__foo foo">
						<div className="foo__top">
							<p className="foo__place"><img src={Location} alt="../../assets/icons/location.svg" /> Tashkent</p>
							<span className="foo__sp" >Change</span>
						</div>
						<div className="foo__bottom">
							<h4 className="foo__help">Help</h4>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default headerer;
