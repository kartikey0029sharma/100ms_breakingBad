import React, { useState, useEffect } from "react";
import axios from "../axios";
import "../Styles/Home.css";
// import { Link } from '@reach/router';
import PaginationList from "react-pagination-list";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Home() {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get();

      setCharacter(req.data);
    }

    fetchData();
  }, []);

  console.log(character);

  return (
    <div className="cards-list">
      {character.map((rec, id) => (
        <div className="card">
          <div className="card_image">
            <Link
              to={{
                pathname: "/character",
                nicknameProp: `${rec.nickname}`,
                nameProp: `${rec.name}`,
                imageProp: `${rec.img}`,
                descriptionProp: `${rec.occupation}`,
                statusProp: `${rec.status}`,
                birthdayProp: `${rec.birthday}`,
                portrayedProp: `${rec.portrayed}`,
                seasonsProp: `${rec.appearance}`
              }}
            >
              <div
                className="img"
                style={{ backgroundImage: `url(${rec.img})` }}
              ></div>

              <div className="card_title title-white">
                <p>{rec.name}</p>
                <p>{rec.nickname}</p>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
