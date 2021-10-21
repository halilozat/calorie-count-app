import React, { useState } from 'react'
import Modal from 'react-modal'
import Datetime from 'react-datetime';

import './eventModal.scss'

const EventModal = ({ isOpen, onClose, onEventAdded }) => {

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


    return (
        <div className="eventModal">
            <Modal
                isOpen={isOpen}
                onRequestClose={onClose}
                style={{
                    overlay: {
                        position: 'fixed',
                        margin: '200px 700px',
                        background: 'rgb(8, 44, 87)',
                        zIndex: 1,
                        borderRadius: '30px'
                    },
                    content: {
                        background: 'rgb(8, 44, 87)',
                        textAlign: 'center',
                        padding: '50px',
                        border: '0px'
                    }
                }}
            >
                <form className="auth-form" onSubmit={onSubmit}>
                    <input
                        className="form-field animation a3"
                        placeholder="Email *"
                        required
                    />
                    <input
                        className="form-field animation a4"
                        placeholder="Password *"
                        required
                    />
                    <button type="submit" className="animation a6">LOGIN</button>
                </form>
            </Modal>
        </div >
    )
}

export default EventModal
