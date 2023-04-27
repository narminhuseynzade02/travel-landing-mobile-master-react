import './Header.scss'
import logo from './odigo-Logo (2).svg';

export const Header = () => {
    return (
        <header>
        <div className="navigation">
          <img src= {logo} alt="" />
          <div className="navlinks">
            <a href="">Articles</a>
            <a href="">Locations</a>
            <a href="">Videos</a>
            <a href="">Sign in</a>
          </div>
        </div>
      </header>
    )
}