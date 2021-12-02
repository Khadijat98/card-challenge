import React from "react";
import "./Card.scss";

const Card = (props) => {
   const {cardDeckArr} = props;

   const cardDeck = cardDeckArr.map(card => {
     return <div className={card.charCode}>
       <p>{card.suit}</p>
       <p>{card.value}</p>
     </div>
   })

   return <section>
     {cardDeck}
   </section>
}

export default Card;