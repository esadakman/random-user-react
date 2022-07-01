import "./Card.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
const url = "https://randomuser.me/api/";

const Cards = () => {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get(url).then((res) => {
      setUsers(res.data.results);
    });
  }, [count]);

  return (
    <div className="card-container">
      <span className="pro">Github</span>
      {users.map((user, index) => {
        const {
          picture: { large },
          name: { first, last },
          email,
          cell,
          location: { city, country },
          // dob: { age },
          registered: { date },
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
              <h5 className="cell">{cell}</h5>
            </div>
            <div className="infos">
              <div className="location">
                <h4>Location:</h4>
                <p>
                  {country} {city}
                </p>
              </div>
              <div className="followers">
                <h4>Register Date:</h4>
                <p>{date.toString()}</p>
              </div>
            </div>
          </div>
        );
      })}
      {/* <div className="buttons"  >
        <a href="html_url" target="_blank">
          Random User
        </a>
      </div> */}
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
};

export default Cards;
