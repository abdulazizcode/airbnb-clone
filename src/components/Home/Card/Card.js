import React from "react";
import "./Card.css";

const Card = ({src,title,decription,price}) =>{
    return(
        <div className="card">
            <img src={src} alt="home"/>
            <div className="card__info">
                <h2>{title}</h2>
                <h4>{decription}</h4>
                <h3>{price}</h3>
            </div>
        </div>
    )
}

export default Card;