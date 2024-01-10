import { Link } from "react-router-dom";
import "./NavBar.css"; 

function NavBar() {
  return (
    <nav className="NavBar">
      <Link to="/" className="navLink home">
        Vending Machine
      </Link>
      <Link to="/cosmic" className="navLink cosmic">
        Little Debbie?
      </Link>
      <Link to="/healthy" className="navLink healthy">
        Nature Valley?
      </Link>
      <Link to="/spicy" className="navLink spicy">
        Doritos?
      </Link>
    </nav>
  );
}

export default NavBar;
