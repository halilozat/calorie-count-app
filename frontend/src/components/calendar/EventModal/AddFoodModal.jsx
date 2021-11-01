/** Dependencies */
import React, { useContext, useRef, useState } from 'react';
import { Modal } from '@material-ui/core';
import Datetime from 'react-datetime';

/** Services */
import CalorieCountService from '../../../services/CalorieCountService';

/** Components */
import CalorieFinder from '../CalorieFinder/CalorieFinder';

/**Styles */
import './addFormModal.scss'

/** Contexts */
import { AuthContext } from '../../../context/AuthContext/AuthContext';
import { useFoodContext } from '../../../context/FoodContext/FoodContext';



export default function SimpleModal() {
    const { userId } = useContext(AuthContext)
    const { setFoods, foods } = useFoodContext()

    const [title, setTitle] = useState("")
    const [start, setStart] = useState(Date.now())
    const end = useRef()

    const submitHandler = async (e) => {
        e.preventDefault();
        const newFood = {
            UserId: userId,
            Title: title,
            Foods: foods,
            Start: start
        }
        console.log(newFood);
        try {
            await CalorieCountService.AddFood(newFood)
            setOpen(false)
            setFoods([])
        } catch (error) {
            console.log(error.message);
        }
    };

    const resetBasket = (e) => {
        e.preventDefault();
        setFoods([])
    }

    const [open, setOpen] = useState(false);


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
                                {/* <div className="app-form-group">
                                        <Datetime
                                        className="dateTimePicker"
                                        ref={end}
                                        />
                                    </div> */}
                                <div className="app-form-group">
                                    <input
                                        className="app-form-control"
                                        placeholder="Title"
                                        value={title}
                                        onChange={e => setTitle(e.target.value)}
                                        required
                                    />
                                </div>
                                <hr />

                                <div className="app-form-group" style={{ color: "white" }}>
                                    {
                                        foods.map((item) => (
                                            <div key={item.UserId} className="app-form-group foods-map">
                                                {item.FoodName}
                                            </div>
                                        ))
                                    }
                                    {
                                        foods.length !== 0
                                            ? <button className="basket-reset-btn" onClick={resetBasket}>Reset</button>
                                            : <div></div>
                                    }
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
        </div >

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