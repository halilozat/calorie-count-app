/** Dependencies */
import CookieConsent from 'react-cookie-consent'

/** Components */
import Macros from '../../components/Home/UserMacros/UserMacros';
import Basket from '../../components/Home/Basket/Basket';
import CalorieFinder from '../../components/Home/CalorieFinder/CalorieFinder'
import Header from '../../components/Layout/Header/Header';

/** Styles */
import './home.scss'



const Home = () => {

    return (
        <div >
            <Header />

            <div className="home">

                {/* <Macros />

                <CalorieFinder />

                <Basket /> */}

            </div>

            {/* <CookieConsent
                debug={true}
                style={{ background: 'rgb(40, 40, 40)', textAlign: "center", fontSize: "2rem" }}
                buttonStyle={{ background: 'white', fontSize: "1.7rem", borderRadius: "50px" }}
                buttonText="I understand"
            >This site uses cookies.
            </CookieConsent> */}
        </div>
    )
}

export default Home
