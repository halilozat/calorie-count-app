/** Dependencies */
import { Link } from 'react-router-dom';
import alertify from 'alertifyjs';

/** Images */
import Icon1 from '../../../assets/images/icon_1.png'
import Icon4 from '../../../assets/images/icon_4.png'
import Icon8 from '../../../assets/images/icon_8.png'


const Boxes = () => {

    const handleAlert = event => {
        event.preventDefault()
        {
            alertify.alert('İnfo Message', 'COMING SOON!', function () {
                alertify.success('I Understand!');
            });
        }
    }

    return (
        <>
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
                                        <a href="!#"><div className="box_link d-flex flex-column align-items-center justify-content-center trans_200">
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
                                            <a><div className="box_link d-flex flex-column align-items-center justify-content-center trans_200">
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
                                        <a href="!#"><div className="box_link d-flex flex-column align-items-center justify-content-center trans_200">
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

        </>
    )
}

export default Boxes
