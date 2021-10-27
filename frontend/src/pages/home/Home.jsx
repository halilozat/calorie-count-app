/** Components */
import Header from '../../components/Layout/Header/Header';
import HomeComponent from '../../components/Home/HomeComponent';

/** Styles */
import './home.scss'
import './homeResponsive.scss'



const Home = () => {

    return (
        <div className="main-body">
            <Header />
            <HomeComponent />
        </div>
    )
}

export default Home
