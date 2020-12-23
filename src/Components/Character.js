import React, { useState, useEffect } from "react";

//import '../Styles/Character.css';
// import CreditCardInput from 'react-credit-card-input';
import { Link } from "react-router-dom";

const Character = (props) => {
  const [quote, setQuote] = useState([]);

  fetch(
    `https://breakingbadapi.com/api/quote?author=${props.location.nameProp}`
  )
    .then((response) => response.json())
    .then((data) => setQuote(data));

  return (
    <div>
      <div className="flex-container">
        <div className="flex-child recipeImage">
          <img className="image" src={props.location.imageProp}></img>
        </div>
        <div className="flex-child recipeDetails">
          <h2>{props.location.nameProp}</h2>
          <p>Status: {props.location.statusProp}</p>
          <p>Occupation: {props.location.descriptionProp}.</p>
          <p>Birth Date: {props.location.birthdayProp}</p>
          <p>Actor: {props.location.portrayedProp}</p>
          <p>NickName: {props.location.nicknameProp}</p>
          <p>Seasons Appeared: {props.location.seasonsProp}</p>
        </div>
      </div>
      <div className="Quotes">
        <p className="QuoteHead">Quotes by {props.location.nicknameProp}:</p>
        <div>
          {quote.map((quote, id) => (
            <p className="QuoteList">- {quote.quote}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Character;
