import React from "react";

import Lavander1 from "../../assets/images/2-lavander1.png";
import Lavander2 from "../../assets/images/2-lavander2.png";
import Lavander3 from "../../assets/images/2-lavander3.png";
import Lavander4 from "../../assets/images/2-lavander4.png";
import Cards from "../../components/Cards/Cards";
import { Link } from "react-router-dom";

const Flower = () => {
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

    return (
        <div className="container">
            <section className='single__bottom bottom'>
                <div className="bottom__top">
                    <h4 className="bottom__title">Similar flowers</h4>
                    <div className="bottom__nexts"></div>
                </div>
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
            </section>
        </div>
    )
}

export default Flower