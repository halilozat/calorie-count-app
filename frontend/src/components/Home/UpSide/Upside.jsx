/** Dependencies */
import { Link } from 'react-router-dom';


const Upside = () => {
    return (
        <>
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
                                        <button className="button home_button ml-auto mr-auto"><a href="!#">Join Now</a></button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}

export default Upside
