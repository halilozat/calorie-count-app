/** Dependencies */
import CookieConsent from 'react-cookie-consent'

/** Components */
import Macros from '../../components/macros/Macros';
import Basket from '../../components/basket/Basket';
import CalorieFinder from '../../components/calorieFinder/CalorieFinder'
import Header from '../../components/header/Header';

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

            <CookieConsent
                debug={true}
                style={{ background: 'rgb(40, 40, 40)', textAlign: "center", fontSize: "2rem" }}
                buttonStyle={{ background: 'white', fontSize: "1.7rem", borderRadius: "50px" }}
                buttonText="I understand"
            >This site uses cookies.
            </CookieConsent>
        </div>
    )
}

export default Home
