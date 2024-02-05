// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const lightThemeHome =
  'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
const darkThemeHome =
  'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'

const About = () => (
  <>
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const aboutImage = isDarkTheme ? darkThemeHome : lightThemeHome
        const homeContainer = isDarkTheme
          ? 'dark-theme-home'
          : 'light-theme-home'
        const homeHeading = isDarkTheme
          ? 'dark-theme-heading'
          : 'light-theme-heading'
        return (
          <>
            <Navbar />
            <div className={homeContainer}>
              <img className="light-theme-image" src={aboutImage} alt="about" />
              <h1 className={homeHeading}>About</h1>
            </div>
          </>
        )
      }}
    </ThemeContext.Consumer>
  </>
)

export default About
