import "./Card.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
const url = "https://randomuser.me/api/";

const Cards = () => {
  const [users, setUsers] = useState([]);
  const [random, setRandom] = useState(true);

  useEffect(() => {
    axios.get(url).then((res) => {
      setUsers(res.data.results);
    });
  }, [random]);
  console.log(random);
  return (
    <div className="card-container">
      <span className="pro">User</span>
      {users.map((user, index) => {
        const {
          picture: { large },
          name: { first, last },
          email,
          cell,
          location: { city, country },
          registered: { date },
          // dob: { age },
        } = user;
        return (
          <div key={index}>
            <img className="round" src={large} alt="user" />
            <div>
              <h2 className="name">
                <span>
                  {first} {last}
                </span>
              </h2>
              <h5 className="email">{email}</h5>
              <h5 className="cell">+{cell}</h5>
            </div>
            <div className="infos">
              <div className="location">
                <h4>Location:</h4>
                <p>
                  {city} /{country}
                </p>
              </div>
              <div className="followers">
                <h4>Register Date:</h4>
                <p>{date.slice(0, 10)}</p>
              </div>
            </div>
          </div>
        );
      })}

      <button onClick={() => setRandom(!random)}>Random User</button>
    </div>
  );
};

export default Cards;
