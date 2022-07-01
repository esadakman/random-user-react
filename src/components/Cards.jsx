import "./Card.css";
import { FaUser, FaSearchLocation, FaPhone, FaMailBulk } from "react-icons/fa";
const Cards = ({ user }) => {
  const {
    picture: { medium },
    name: { first, last },
    email,
    cell,
    location: { city, country },
    // dob: { age },
    // registered: { date },
  } = user;
  // console.log(user);
  return (
    <div className="container">
      <section className="inner-container">
        <img className="image" src={medium} alt="" />
        <p>
          <FaUser /> Name :<span className="name"> {first}</span>
        </p>
        <p>
          <FaUser />
          Last Name :<span className="last-name">{last} </span>
        </p>
        <p>
          <FaSearchLocation />
          Location :
          <span className="location">
            {city}
            {country}
          </span>
        </p>
        <p>
          <FaPhone /> Phone :<span className="phone"> {cell}</span>
        </p>
        <p>
          <FaMailBulk /> Email :<span className="email"> {email}</span>
        </p>
      </section>
    </div>
  );
};

export default Cards;
