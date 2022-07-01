import "./Card.css";
// import { FaUser, FaSearchLocation, FaPhone, FaMailBulk } from "react-icons/fa";
const Cards = () => {
  // const Cards = ({ user }) => {
  // const {
  // picture: { medium },
  // name: { first, last },
  // email,
  // cell,
  // location: { city, country },
  // dob: { age },
  // registered: { date },
  // } = user;
  // console.log(user);
  return (
    <div class="card-container">
      <span class="pro">Github</span>
      <img
        class="round"
        src="https://avatars.githubusercontent.com/u/98649983?v=4"
        alt="user"
      />
      <div>
        <h2 class="name">
          <span>name</span>
        </h2>
        <h5 class="email">email</h5>
        <h5 class="tel">tel</h5>
      </div>

      <div class="infos">
        <div class="location">
          <h4>Location:</h4>
          <p>New Zealand Invercargill</p>
        </div>
        <div class="followers">
          <h4>Register Date:</h4>
          <p>2010-05-05</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
