import BestDeals from "../../components/BestDeals/BestDeals";
import Cards from "../../components/Cards/Cards";
// carousel => flower imports
import Rose from "../../assets/images/1-Rose1.png";
import Tulip from "../../assets/images/1-Tulip2.png";
import Dream from "../../assets/images/1-Dream3.png";
import Lilie from "../../assets/images/1-Lilie4.png";
// // card details => flower imports
import Lavander1 from "../../assets/images/2-lavander1.png";
import Lavander2 from "../../assets/images/2-lavander2.png";
import Lavander3 from "../../assets/images/2-lavander3.png";
import Lavander4 from "../../assets/images/2-lavander4.png";

import arLeft from '../../assets/icons/arrow_left.svg'
import arRight from '../../assets/icons/arrow_right.svg'
import More from '../../assets/icons/more.svg'
//style 
import './style.scss'
import { Link } from "react-router-dom";
import { useState } from "react";

function Home() {
	const g2 = [
		{
			id: 1,
			name: "Lavander",
			img: Lavander1,
			now_price: 10,
			before_price: 10,
		},
		{
			id: 2,
			name: "Lavander",
			img: Lavander2,
			now_price: 10,
			before_price: 10,
		},
		{
			id: 3,
			name: "Red rose, 5 pc.",
			img: Lavander3,
			now_price: 16.99,
			before_price: 16.99,
		},
		{
			id: 4,
			name: "Bouquet “Spring”",
			img: Lavander4,
			now_price: 20,
			before_price: 25,
		},
		{
			id: 3,
			name: "Red rose, 5 pc.",
			img: Lavander3,
			now_price: 16.99,
			before_price: 16.99,
		},
		{
			id: 4,
			name: "Bouquet “Spring”",
			img: Lavander4,
			now_price: 20,
			before_price: 25,
		},
	];

	const gullar = [
		{
			id: 5,
			name: "Red tulips",
			img: Rose,
			now_price: 46,
			before_price: 60,
		},
		{
			id: 6,
			name: "WWhite roses, 7pc.",
			img: Tulip,
			now_price: 44,
			before_price: 44,
		},
		{
			id: 7,
			name: "Bouqueet “Dream”",
			img: Dream,
			now_price: 53,
			before_price: 53,
		},
		{
			id: 8,
			img: Lilie,
			name: "White lilies, 21 pc.",
			now_price: 70,
			before_price: 70,
		},
	];

	const [next, setNext] = useState(0)
	const [next2, setNext2] = useState(0)
	const sliceData = g2.slice(next, next + 4)
	const sliceData2 = gullar.slice(next2, next2 + 4)

	if (g2.length <= next || gullar.length <= next2) {
		setNext(0)
		setNext2(0)
	}

	return (
		<div className="container home">
			<BestDeals />
			<div className="home__inner">
				<h1 className="home__title">New</h1>
				<div className="home__next">
					<button onClick={() => setNext(next - 4 < 0 ? next : next - 4)}>
						<img src={arLeft} alt="arrow left icon" />
					</button>
					<button onClick={() => setNext(next + 4)}>
						<img src={arRight} alt="arrow right icon" />
					</button>
				</div>
			</div>
			<div className="wrapper">
				{
					sliceData?.length > 0 && sliceData.map(((item, i) => {
						return (
							<Link to={`/flowers/${item.id}`} key={i} >
								<Cards name={item.name} now_price={item.now_price} before_price={item.before_price} img={item.img} />
							</Link>
						)
					}))
				}
			</div>
			<button className="home__btn" onClick={() => setNext(next + 2)}><img src={More} alt="more icon" /> See more</button>
			<div className="home__inner">
				<h1 className="home__title">Relevant</h1>
				<div className="home__next">
					<button onClick={() => setNext2(next2 - 4 < 0 ? next2 : next2 - 4)}>
						<img src={arLeft} alt="arrow left icon" />
					</button>
					<button onClick={() => setNext2(next2 + 4)}>
						<img src={arRight} alt="arrow right icon" />
					</button>
				</div>
			</div>

			<div className="wrapper">
				{
					sliceData2?.length > 0 && sliceData2.map(((item, i) => {
						return (
							<Link to={`/flowers/${item.id}`} key={i} >
								<Cards name={item.name} now_price={item.now_price} before_price={item.before_price} img={item.img} />
							</Link>
						)
					}))
				}
			</div>
			<button className="home__btn" onClick={() => setNext(next + 2)}><img src={More} alt="more icon" /> See more</button>
		</div>
	);
}

export default Home;
