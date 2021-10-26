/** Dependencies */
import React, { useContext, useRef, useState } from 'react';
import { Modal } from '@material-ui/core';
import Datetime from 'react-datetime';

/** Components */
import CalorieFinder from '../CalorieFinder/CalorieFinder';

/**Styles */
import './addFormModal.scss'



export default function SimpleModal({ isOpen, onClose, onEventAdded }) {

    const [foodname, setFoodname] = useState("");
    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());

    const onSubmit = (event) => {
        event.preventDefault()
        onEventAdded({
            foodname,
            start,
            end
        })
        onClose()
    }

    const submitHandler = async (e) => {
        e.preventDefault();
    };

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div className="backgroundModal">
            <div className="container">
                <div className="screen">
                    <div className="screen-header">
                        <div className="screen-header-left">
                            <div className="screen-header-button red" onClick={handleClose}></div>
                            <div className="screen-header-button maximize"></div>
                            <div className="screen-header-button minimize"></div>
                        </div>
                        <div className="screen-header-right">
                            <div className="screen-header-ellipsis"></div>
                            <div className="screen-header-ellipsis"></div>
                            <div className="screen-header-ellipsis"></div>
                        </div>
                    </div>
                    <div className="screen-body">
                        <div className="screen-body-item">
                            <div className="app-form">
                                <div className="app-form-group">
                                    <CalorieFinder />
                                </div>
                                <hr />
                                <div className="app-form-group">
                                    <Datetime
                                        className="dateTimePicker"
                                        value={start}
                                        onChange={date => setStart(date)}
                                    />
                                </div>
                                <div className="app-form-group">
                                    <Datetime
                                        className="dateTimePicker"
                                        value={end}
                                        onChange={date => setEnd(date)}
                                    />
                                </div>
                                <br />
                                <div className="app-form-group buttons">
                                    <form onSubmit={submitHandler}>
                                        <button className="app-form-button" type="submit">ADD</button>
                                        <button className="app-form-button" onClick={handleClose}>CLOSE</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );

    return (
        <div>
            <button type="button" className="addMealButton" onClick={handleOpen}>
                <div className="modalContent" style={{ wordWrap: 'break-word' }}>Add Meal</div>
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}