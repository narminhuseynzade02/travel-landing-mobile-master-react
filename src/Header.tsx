import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "./odigo-Logo (2).svg";

export const Header = () => {
  return (
    <header>
      <div className="navigation">
        <img src={logo} alt="" />
        <div className="navlinks">
          <Link to="/second">Articles</Link>
          <Link to="/">Locations</Link>
          <Link to="/">Videos</Link>
          <Link to="signin">Sign in</Link>
        </div>
      </div>
    </header>
  );
};
