import "./style.scss";
import "../../components/Modal/modal.scss";
import Cards from "../../components/Cards/Cards";
import Lavander1 from "../../assets/images/2-lavander1.png";
import Lavander2 from "../../assets/images/2-lavander2.png";
import Lavander3 from "../../assets/images/2-lavander3.png";
import Lavander4 from "../../assets/images/2-lavander4.png";
import Sort from "../../assets/icons/sort.svg";
import moveX from "../../assets/icons/menuX.svg";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Modal from "../../components/Modal/modal";

function Plants() {
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
  ];

  const itemCount = g2.length
  const path = useLocation().pathname.split('/')

  const [openSort, setOpenSort] = useState(false)

  return (
    <div className="container plants">
      <section className="plants__path">
        <p className="plants__path-text">Home  / <span> {path}</span></p>
      </section>
      <section className="plants__category ">
        <h4 className="plants__categoty-title">All Plants</h4>
        <div className="plants__wrapper">
          <form className="plants__form">
            <select>
              <option selected disabled>Sort by</option>
              <option >A-z</option>
              <option >Z-a</option>
            </select>
            <select>
              <option selected disabled>Color</option>
              <option >Green</option>
              <option >Red</option>
            </select>
            <select>
              <option selected disabled>Price</option>
              <option >cheep</option>
              <option >expensive</option>
            </select>
            <select>
              <option selected disabled>Flower type </option>
              <option >Rose</option>
              <option >Bol</option>
            </select>
            <select>
              <option selected disabled>Occasion </option>
              <option >Asld</option>
              <option >Adajf</option>
            </select>
          </form>
          <p className="plants__item-text"><span>{itemCount}</span> items</p>
          <div className="plants__sort" onClick={() => setOpenSort(openSort == true ? false : true)}>
            {openSort == true ? < img src={moveX} alt="sort icon" /> : < img src={Sort} alt="sort icon" />}
          </div>
          <div className="modal" style={openSort == false ? { display: "none" } : { display: 'flex' }}>
            <img src={moveX} alt="remove icon" onClick={() => setOpenSort(false)} />

            <div className=" modal__wrapper">
              <form className="modal__form">
                <select>
                  <option selected disabled>Sort by</option>
                  <option >A-z</option>
                  <option >Z-a</option>
                </select>
                <select>
                  <option selected disabled>Color</option>
                  <option >Green</option>
                  <option >Red</option>
                </select>
                <select>
                  <option selected disabled>Price</option>
                  <option >cheep</option>
                  <option >expensive</option>
                </select>
                <select>
                  <option selected disabled>Flower type </option>
                  <option >Rose</option>
                  <option >Bol</option>
                </select>
                <select>
                  <option selected disabled>Occasion </option>
                  <option >Asld</option>
                  <option >Adajf</option>
                </select>
              </form>
              <div className="modal__bottom">
                <button className="modal__btn">Clear</button>
                <button className="modal__btn-d">Apply</button>
              </div>
            </div>
          </div>
        </div>
        {/* <hr /> */}
      </section>
      <div className="wrapper">
        {
          g2?.length > 0 && g2.map(((item, i) => {
            return (
              <Link to={`/flowers/${item.id}`} key={i} >
                <Cards id={item.id} name={item.name} now_price={item.now_price} before_price={item.before_price} img={item.img} />
              </Link>
            )
          }))
        }
      </div>
      <div className="btn-wrapper">
        <button className="seeMore">See more</button>
      </div>
    </div>
  );
}

export default Plants;
