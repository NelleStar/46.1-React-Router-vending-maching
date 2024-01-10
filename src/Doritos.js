import { Link } from "react-router-dom";
import "./Doritos.css"; 

function Doritos() {
  return (
    <div className="Doritos">
      <h1>Spicy Crunch!</h1>
      <img
        src="https://media4.giphy.com/media/eTWZOfyc37cP43luie/200.webp?cid=ecf05e47edlixrscruao0yxrbljd116c7js67tim1b4x19sb&ep=v1_gifs_search&rid=200.webp&ct=g"
        alt="sloth with Doritos"
      />
      <br />
      <Link to="/" className="navLink home">
        Select something else?
      </Link>
    </div>
  );
}

export default Doritos;
