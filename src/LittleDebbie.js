import { Link } from "react-router-dom";
import './LittleDebbie.css';

function LittleDebbie() {
  return (
    <div className="LittleDebbie">
      <h1>Cosmic Treats!</h1>
      <img
        src="https://media2.giphy.com/media/S9KSgoAHWHD8WWkqp7/200.webp?cid=ecf05e47sgs4jclm137kvyjava9bnpyq6ji0qlczg1iybumf&ep=v1_gifs_search&rid=200.webp&ct=g"
        alt="Little Debbie Snacks"
      />
      <br />
      <Link to="/" className="navLink home">
        Select something else?
      </Link>
    </div>
  );
}

export default LittleDebbie;



