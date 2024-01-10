import { Link } from "react-router-dom";
import "./NatureValley.css";

function NatureValley() {
  return (
    <div className="NatureValley">
      <h1>Healthy Crunch!</h1>
      <img
        src="https://media4.giphy.com/media/8hZ9DsI6zt1NcMsFZu/200w.webp?cid=ecf05e47u1sc6ichqfbtjrgdvbrzu5q88po44howdi96dn03&ep=v1_gifs_search&rid=200w.webp&ct=g"
        alt="Girl with granola bar"
      />
      <br />
      <Link to="/" className="navLink home">
        Select something else?
      </Link>
    </div>
  );
}

export default NatureValley;
