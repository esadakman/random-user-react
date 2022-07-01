import "./Card.css";

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
          <i className="fa-solid fa-user"></i> Name :
          <span className="name"> {first}</span>
        </p>
        <p>
          <i className="fa-solid fa-user"></i> Last Name :
          <span className="last-name">{last} </span>
        </p>
        <p>
          <i className="fa-solid fa-magnifying-glass-location"></i> Location :
          <span className="location">
            {city}
            {country}
          </span>
        </p>
        <p>
          <i className="fa-solid fa-phone-flip"></i> Phone :
          <span className="phone"> {cell}</span>
        </p>
        <p>
          <i className="fa-solid fa-envelope"></i> Email :
          <span className="email"> {email}</span>
        </p>
      </section>
    </div>
  );
};

export default Cards;
