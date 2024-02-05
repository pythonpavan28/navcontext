// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const lightThemeHome =
  'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
const darkThemeHome =
  'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'

const Home = () => (
  <>
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const homeImage = isDarkTheme ? darkThemeHome : lightThemeHome
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
              <img className="light-theme-image" src={homeImage} alt="home" />
              <h1 className={homeHeading}>Home</h1>
            </div>
          </>
        )
      }}
    </ThemeContext.Consumer>
  </>
)

export default Home
