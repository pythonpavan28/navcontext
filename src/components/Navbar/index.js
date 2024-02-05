// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const websiteLogoLightTheme =
  'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
const websiteLogoDarkTheme =
  'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
const lightButton =
  'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
const darkButton = 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onClickTheme = () => {
        toggleTheme()
      }
      const websiteLogo = isDarkTheme
        ? websiteLogoDarkTheme
        : websiteLogoLightTheme
      const navContainer = isDarkTheme
        ? 'dark-theme-nav-container'
        : 'light-theme-nav-container'
      const homeAboutHeadingContainer = isDarkTheme
        ? 'light-theme-home-about'
        : 'dark-theme-home-about'
      const homeAboutHeading = isDarkTheme
        ? 'dark-home-about-heading'
        : 'light-home-about-heading'
      const button = isDarkTheme ? lightButton : darkButton
      return (
        <nav className={navContainer}>
          <img
            className="light-theme-website-logo"
            src={websiteLogo}
            alt="website logo"
          />
          <ul className={homeAboutHeadingContainer}>
            <Link to="/" className="home-link">
              <li className={homeAboutHeading}>Home</li>
            </Link>
            <Link to="/about" className="home-link">
              <li className={homeAboutHeading}>About</li>
            </Link>
          </ul>
          <button
            type="button"
            className="change-theme-button"
            onClick={onClickTheme}
            data-testid="theme"
          >
            <img
              className="light-theme-website-logo"
              src={button}
              alt="theme"
            />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
