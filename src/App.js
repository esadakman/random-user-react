import "./App.css";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      <Cards />

      {/* <div className="buttons">
        <a href="html_url" target="_blank">
          Random User
        </a>
        <a href="${html_url}" target="_blank">
          Visit Profile
        </a>
      </div> */}
    </div>
  );
}

export default App;

// const [loading, setLoading] = useState(true);
// const [user, setUser] = useState([]);

// useEffect(() => {
//   const users = async () => {
//     try {
//       const { data } = await axios.get(url);
//       setUser(data.results[0]);
//       console.log(data);
//     } catch (error) {
//       alert(error);
//     }
//   };
// }, []);
// const [loading, setLoading] = useState(true);
// const [user, setUser] = useState([]);

// const users = async () => {
//   try {
//     const { data } = await axios.get(url);
//     setUser(data.results[0]);
//     // setLoading(false);
//   } catch (error) {
//     alert(error);
//   }
// };

// useEffect(() => {
//   users();
// }, []);

// const response = await axios.get(url).then((res) => {
//   const responseUsers = res.data;
//   setUsers(responseUsers);
//   console.log(res.data);
// });
