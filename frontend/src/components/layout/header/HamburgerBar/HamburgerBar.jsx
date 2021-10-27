/** Styles */
import './hamburgerBar.scss'


const HamburgerBar = ({ open, setOpen }) => {
    return (
        <>
            <div onClick={() => setOpen(!open)} className="hamburger_bar trans_400 d-flex flex-row align-items-center justify-content-start">
                <div className={open ? "hamburger active" : "hamburger"}>
                    <div className="menu_toggle d-flex flex-row align-items-center justify-content-start">
                        <div className="hamburger_container">
                            <div className="menu_hamburger">
                                <div className={open ? "line_1 hamburger_lines active" : "line_1 hamburger_lines"} style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}></div>
                                <div className={open ? "line_2 hamburger_lines active" : "line_2 hamburger_lines"} style={{ visibility: "inherit", opacity: 1 }}></div>
                                <div className={open ? "line_3 hamburger_lines active" : "line_3 hamburger_lines"} style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HamburgerBar
