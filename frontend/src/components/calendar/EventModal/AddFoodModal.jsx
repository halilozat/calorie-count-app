import React, { useContext, useRef, useState } from 'react';
import { Modal } from '@material-ui/core';
import './modal.css'
import CalorieFinder from '../../Home/CalorieFinder/CalorieFinder';




export default function SimpleModal() {


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
                        <div className="screen-body-item left">
                            <div className="app-title">
                                <span>ADD A</span>
                                <span>FOOD</span>
                            </div>
                        </div>
                        <div className="screen-body-item">
                            <div className="app-form">
                                <div className="app-form-group">
                                    <input
                                        className="app-form-control"
                                        placeholder="Kitap Adı"
                                        required
                                    />
                                </div>
                                <div className="app-form-group">
                                    <input
                                        className="app-form-control"
                                        placeholder="Yazar Adı"
                                    />
                                </div>

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
            <button type="button" className="sidebarAddButton" onClick={handleOpen}>
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