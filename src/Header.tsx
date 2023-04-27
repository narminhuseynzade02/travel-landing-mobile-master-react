import './Header.scss'

export const Header = () => {
    return (
        <header>
        <div className="navigation">
          <img src="./assets/odigo-Logo (2).svg" alt="" />
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