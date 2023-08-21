import React, { useState } from "react";
import moveX from "../../assets/icons/menuX.svg";
import './modal.scss'

function Modal({ openSort }) {

    const [open, setOpen] = useState(false)

    return (
        <>
            <div className="modal" style={open == true ? { display: "none" } : { display: 'flex' }}>
                <img src={moveX} alt="remove icon" onClick={() => setOpen(true)} />

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
        </>
    )
}

export default Modal