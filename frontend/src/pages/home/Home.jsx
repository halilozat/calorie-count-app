/** Components */
import Header from '../../components/Layout/Header/Header';

/** Images */
import Icon1 from '../../assets/images/icon_1.png'
import Icon4 from '../../assets/images/icon_4.png'
import Icon8 from '../../assets/images/icon_8.png'

/** Styles */
import './home.scss'
import './responsive.scss'
import { Link } from 'react-router-dom';



const Home = () => {

    const handleAlert = event => {
        event.preventDefault()
        {
            alert("Coming Soon!")
        }
    }

    return (
        <div className="main-body">
            <Header />

            <div className="home">
                <div className="background_image"></div>
                <div className="overlay"></div>
                <div className="home_container">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="home_content text-center">
                                    <div className="video_link">
                                        <a className="vimeo video_button d-flex flex-column align-items-center justify-content-center" href="https://player.vimeo.com/video/99340873?autoplay=1&loop=1&title=0&autopause=0">
                                            <div className="video_link_content d-flex flex-row align-items-center justify-content-start">
                                            </div>
                                        </a>
                                    </div>
                                    <div className="home_title">Get fit with us</div>
                                    <Link to="/register" >
                                        <button className="button home_button ml-auto mr-auto"><a>Join Now</a></button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="boxes">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="boxes_container d-flex flex-lg-row flex-column align-items-start justify-content-start">

                                <div className="box">
                                    <div className="box_icon d-flex flex-column align-items-center justify-content-center"><img src={Icon4} alt="" /></div>
                                    <div className="box_title">8 weeks nutrition program</div>
                                    <div className="box_text">
                                        <p>Coming Soon...</p>
                                        <br />
                                        <br />
                                    </div>
                                    <div onClick={handleAlert} className="box_link_container">
                                        <a href="#"><div className="box_link d-flex flex-column align-items-center justify-content-center trans_200">
                                            <div>+</div>
                                        </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="box_icon d-flex flex-column align-items-center justify-content-center"><img src={Icon8} alt="" /></div>
                                    <div className="box_title">Track your meals from the calendar</div>
                                    <div className="box_text">
                                        <p>Go to your meals calendar.</p>
                                        <br />
                                        <br />
                                    </div>
                                    <Link to="/foodCalendar" style={{ textDecoration: "none", color: "white" }}>
                                        <div className="box_link_container">
                                            <a href="#"><div className="box_link d-flex flex-column align-items-center justify-content-center trans_200">
                                                <div>+</div>
                                            </div>
                                            </a>
                                        </div>
                                    </Link>

                                </div>
                                <div className="box">
                                    <div className="box_icon d-flex flex-column align-items-center justify-content-center"><img src={Icon1} alt="" /></div>
                                    <div className="box_title">8 weeks training program</div>
                                    <div className="box_text">
                                        <p>Coming Soon...</p>
                                        <br /><br />
                                    </div>

                                    <div onClick={handleAlert} className="box_link_container">
                                        <a href="#"><div className="box_link d-flex flex-column align-items-center justify-content-center trans_200">
                                            <div>+</div>
                                        </div>
                                        </a>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
