import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Cards from "../../components/Cards/Cards";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// image
import Lilie from "../../assets/images/1-Lilie4.png";
import Lavander1 from "../../assets/images/2-lavander1.png";
import Lavander2 from "../../assets/images/2-lavander2.png";
import Lavander3 from "../../assets/images/2-lavander3.png";
import Lavander4 from "../../assets/images/2-lavander4.png";
import Rose from "../../assets/images/1-Rose1.png";
import Tulip from "../../assets/images/1-Tulip2.png";
import Dream from "../../assets/images/1-Dream3.png";
import free from "../../assets/icons/free.svg";
import photo from "../../assets/icons/photo.svg";
import stars from "../../assets/icons/stars.svg";
import chart from "../../assets/icons/chart.svg";
import arLeft from "../../assets/icons/arrow_left.svg";
import arRight from "../../assets/icons/arrow_right.svg";
import More from "../../assets/icons/more.svg";
import plus from "../../assets/icons/plus.svg";
import minus from "../../assets/icons/minus.svg";

//styel
import "./style.scss";

const FlowersById = () => {
	const id = useParams().id;

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

	const [add, setAdd] = useState(0);
	const [next, setNext] = useState(0);
	const [occar, setOccar] = useState(false);

	const data = g2.find((item) => item.id == id);
	const sliceData = g2.slice(next, next + 4);

	if (g2.length <= next) {
		setNext(0);
	}

	const fl = g2.find((item) => item.id == id);
	return (
		<div className="container single">
			<section className="plants__path">
				<p className="plants__path-text">
					Home / All Flowers / <span> {fl.name}</span>
				</p>
			</section>
			<section className="single__hero hero">
				<div className="hero__left left">
					<img
						className="hero__img"
						src={data.img}
						alt="Rose"
						style={{ borderRadius: "4px" }}
					/>
					<div className="left__wrapper">
						<div className="left__inner">
							<img src={free} alt="free icon" />
							<p className="left__text">Benefits description</p>
						</div>
						<div className="left__inner">
							<img src={stars} alt="stars icon" />
							<p className="left__text">Always fresh flowers</p>
						</div>
						<div className="left__inner">
							<img src={photo} alt="photo icon" />
							<p className="left__text">Take photo of bouquet</p>
						</div>
					</div>
				</div>
				<div className="hero__right right">
					<div className="right__top">
						<h4 className="right__title">{data.name}</h4>
						<p className="right__price">
							{data.now_price} ${" "}
							<span>{data.before_price} $</span>
						</p>
					</div>
					<div className="right__count">
						<p className="right__text-count">Count:</p>
						<div className="right__adding">
							<button
								className="right__add-btn"
								onClick={() => setAdd(add + 1)}
							>
								<img src={plus} alt="plus icon" />
							</button>
							<span className="right__add-sp">{add}</span>
							<button
								className="right__add-btn"
								onClick={() =>
									setAdd(add - 1 < 0 ? add : add - 1)
								}
							>
								<img src={minus} alt="minus icon" />
							</button>
						</div>
					</div>
					<div className="right__color">
						<p className="right__text-color">Color:</p>
						<div className="right__choose">
							<button className="right__choose-btn"></button>
							<button className="right__choose-btn"></button>
							<button className="right__choose-btn"></button>
						</div>
					</div>
					<div className="right__rove">
						<div className="right__toshop">
							<button className="right__shop-btn">Button</button>
							<button className="right__shop-chart">
								<img src={chart} alt="chart icon" />
							</button>
						</div>
						<ul className="right__list">
							<li className="right__item">
								<Accordion
									style={{
										boxShadow: "none ",
										borderBottom: "1px solid #e6e6eb",
									}}
								>
									<AccordionSummary
										expandIcon={<ExpandMoreIcon />}
										aria-controls="panel1a-content"
										id="panel1a-header"
									>
										<Typography>
											Bouquet contents
										</Typography>
									</AccordionSummary>
									<AccordionDetails>
										<Typography>
											Lorem ipsum dolor sit amet,
											consectetur adipiscing elit.
											Suspendisse malesuada lacus ex, sit
											amet blandit leo lobortis eget.
										</Typography>
									</AccordionDetails>
								</Accordion>
							</li>
							<li className="right__item">
								<Accordion
									style={{
										boxShadow: "none ",
										borderBottom: "1px solid #e6e6eb",
									}}
								>
									<AccordionSummary
										expandIcon={<ExpandMoreIcon />}
										aria-controls="panel1a-content"
										id="panel1a-header"
									>
										<Typography>Details</Typography>
									</AccordionSummary>
									<AccordionDetails>
										<Typography>
											Lorem ipsum dolor sit amet,
											consectetur adipiscing elit.
											Suspendisse malesuada lacus ex, sit
											amet blandit leo lobortis eget.
										</Typography>
									</AccordionDetails>
								</Accordion>
							</li>
							<li className="right__item">
								<Accordion
									style={{
										boxShadow: "none ",
										borderBottom: "1px solid #e6e6eb",
									}}
								>
									<AccordionSummary
										expandIcon={<ExpandMoreIcon />}
										aria-controls="panel1a-content"
										id="panel1a-header"
									>
										<Typography>
											Delivery & Pay policy
										</Typography>
									</AccordionSummary>
									<AccordionDetails>
										<Typography>
											Lorem ipsum dolor sit amet,
											consectetur adipiscing elit.
											Suspendisse malesuada lacus ex, sit
											amet blandit leo lobortis eget.
										</Typography>
									</AccordionDetails>
								</Accordion>
							</li>
						</ul>
					</div>
				</div>
			</section>
			<section className="single__bottom bottom">
				<div className="bottom__top">
					<h4 className="bottom__title">Similar flowers</h4>
					<div className="bottom__nexts">
						<button
							onClick={() =>
								setNext(next - 4 < 0 ? next : next - 4)
							}
						>
							<img src={arLeft} alt="arrow left icon" />
						</button>
						<button onClick={() => setNext(next + 4)}>
							<img src={arRight} alt="arrow right icon" />
						</button>
					</div>
				</div>
				<div className="wrapper">
					{sliceData?.length > 0 &&
						sliceData.map((item, i) => {
							return (
								<Link to={`/flowers/${item.id}`} key={i}>
									<Cards
										name={item.name}
										now_price={item.now_price}
										before_price={item.before_price}
										img={item.img}
									/>
								</Link>
							);
						})}
				</div>
				<button className="home__btn" onClick={() => setNext(next + 2)}>
					<img src={More} alt="more icon" /> See more
				</button>
			</section>
		</div>
	);
};

export default FlowersById;
