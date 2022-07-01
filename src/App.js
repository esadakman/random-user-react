import "./App.css";
import Cards from "./components/Cards";
import axios from "axios";
import React, { useState, useEffect } from "react";
const url = "https://randomuser.me/api/";

function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);

  const users = async () => {
    try {
      const { data } = await axios.get(url);
      setUser(data.results[0]);
      // setLoading(false);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    users();
  }, []);

  // if (loading) {
  //   return <h2>Loading...</h2>;
  // }
  return (
    <div className="App">
      <Cards user={user}></Cards>

      <div class="buttons">
        <a href="${html_url}" target="_blank">
          Random User
        </a>
        {/* <a href="${html_url}" target="_blank">
          Visit Profile
        </a> */}
      </div>
    </div>
  );
}

export default App;
