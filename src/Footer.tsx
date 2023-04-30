import "./Footer.scss";
import logo from "./odigo-Logo (2).svg";
export const Footer = () => {
  return (
    <footer>
      <div className="inside-footer">
        <img src={logo} alt="" />
        <div className="menu-footer">
          <div className="footer-columns">
            Company<a href="">About</a>
            <a href="">Team</a>
            <a href="">Careers</a>
            <a href="">Privacy Policy</a>
          </div>
          <div className="footer-columns">
            Locations<a href="">Tokyo</a>
            <a href="">Kyoto</a>
            <a href="">osaka</a>
            <a href="">Hokkaido</a>
          </div>
          <div className="footer-columns">
            Social Media<a href="">Facebook</a>
            <a href="">Twitter</a>
            <a href="">Instagram</a>
            <a href="">Youtube</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
