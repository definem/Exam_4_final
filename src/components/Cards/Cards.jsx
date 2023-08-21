import arWhite from '../../assets/icons/white_right.svg'

import "../Cards/style.scss";

function Cards({ id, name, now_price, before_price, img }) {

	return (
		<div className="card">
			<img src={img} alt={name} />
			<div className="card__wrapper">
				<button className="card__next-btn" > <img src={arWhite} alt="arrow white icon" style={{ width: "24px" }} /> </button>
				<h4 className="card__title" >{name}</h4>
				<div className="card__inner">
					<p className="card__text">{now_price}$</p>
					<span className="card__before_price">
						{before_price == now_price
							? ""
							: before_price + "$"}
					</span>
				</div>
			</div>
		</div>
	);
}

export default Cards;
