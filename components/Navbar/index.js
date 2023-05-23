import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      return (
        <>
          {!isDarkTheme ? (
            <div className="nav-bar-container-light">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                alt="website logo"
                className="website-logo "
              />
              <ul className="middle-items">
                <li className="list-item ">
                  <Link to="/">Home</Link>
                </li>
                <li className="list-item ">
                  <Link to="/about">About</Link>
                </li>
              </ul>
              <button
                type="button"
                data-testid="theme"
                className="theme-button"
                onClick={toggleTheme}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                  alt="theme"
                  className="theme-img"
                />
              </button>
            </div>
          ) : (
            <div className="nav-bar-container-dark">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                alt="website logo"
                className="website-logo"
              />
              <ul className="middle-items">
                <li className="list-item ">
                  <Link to="/" className="link-dark ">
                    Home
                  </Link>
                </li>
                <li className="list-item ">
                  <Link to="/about">About</Link>
                </li>
              </ul>
              <button
                type="button"
                data-testid="theme"
                className="theme-button"
                onClick={toggleTheme}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                  alt="theme"
                  className="theme-img"
                />
              </button>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
