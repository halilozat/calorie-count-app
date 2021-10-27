/** Dependencies */
import React, { useEffect, useRef, useState } from 'react'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import timeGridPlugin from "@fullcalendar/timegrid" // needed for dayClick
import alertify from 'alertifyjs'

/** Components */
import Header from "../Layout/Header/Header"
import AddFoodModal from './EventModal/AddFoodModal'

/** Services */
import CalorieCountService from '../../services/CalorieCountService';

/** Contexts */
import { useAuth } from '../../context/AuthContext/AuthContext'

/** Styles */
import './foodCalendar.scss'


let id = 0;

const FoodCalendar = () => {
    const [initialEvents, setInitialEvents] = useState([
        {
            id: 10001,
            title: "Hello World",
            start: new Date().toISOString().split("T")[0]
        },
        {
            id: 20002,
            title: "Coffee Time",
            start: new Date().toISOString().split("T")[0] + "T14:05:00"
        },
        {
            id: 20003,
            title: "Lunch",
            start: new Date().toISOString().split("T")[0] + "T14:35:00",
            end: new Date().toISOString().split("T")[0] + "T17:35:00"
        },
        { title: 'Hunger Games', date: '2021-10-05', color: "red" },
        { title: 'Hunger Games', date: '2021-10-06', color: "purple" },
        { title: 'Intermittent fasting', date: '2021-10-06', color: "brown" },
        {
            title: 'Breakfast',
            start: '2021-10-01T08:30:00',
            end: '2021-10-01T09:30:00',
            allDay: false
        },
        {
            title: 'Coffee Time',
            start: '2021-10-01T09:00:00',
            end: '2021-10-01T09:30:00',
            allDay: false
        },
        {
            title: 'Lunch',
            date: '2021-10-01',
            start: '2021-10-01 12:30:00',
            end: '2021-10-01 13:00:00',
            allDay: false
        },
        {
            title: 'Dinner',
            date: '2021-10-01',
            start: '2021-10-01T18:30:00',
            end: '2021-10-01T19:00:00',
            allDay: false
        },
        {
            title: 'Breakfast',
            start: '2021-10-02T08:30:00',
            end: '2021-10-02T09:30:00',
        },
        {
            title: 'Lunch',
            start: '2021-10-02 12:30:00',
            end: '2021-10-02 13:00:00',
        },
        {
            title: 'Dinner',
            start: '2021-10-02T18:30:00',
            end: '2021-10-02T19:00:00',
        }
    ])

    const calendarRef = useRef(null)
    const { userId } = useAuth()

    useEffect(() => {

        const getUserFoods = async () => {
            await CalorieCountService.GetUserFoods(userId)
                .then(res => setInitialEvents(...initialEvents, [{
                    id: res.data[0].userId,
                    title: res.data[0].foodname,
                    start: res.data[0].createDateTime.toISOString()
                }]))
                .catch(err => console.log(err))
        }

        getUserFoods()
    }, [])

    const handleEventClick = (clickInfo) => {
        alertify.alert("Event Info!", `This Event's Title : ${clickInfo.event.title}`)
        console.log(clickInfo.event.id)
        // clickInfo.event.remove()
    }

    const handleDateSelect = (selectInfo) => {
        let title = prompt("Enter the event name : ");
        let calenderApi = selectInfo.view.calendar
        calenderApi.unselect()
        if (title) {
            calenderApi.addEvent({
                id: String(id++),
                title,
                start: new Date().toISOString()
            })
        }
    }

    return (
        <div>
            <Header />

            <div className="foodCalendar">
                <AddFoodModal />
                <FullCalendar
                    ref={calendarRef}
                    plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
                    initialView="dayGridMonth"
                    initialEvents={initialEvents}
                    eventClick={handleEventClick}
                    select={handleDateSelect}
                    dateClick={(e) => {
                        console.log("dateclick", e)
                    }}
                    firstDay={1}
                    selectable={true}
                    editable={true}
                    headerToolbar={{
                        left: "prev,next,today",
                        center: "title",
                        right: "dayGridMonth, timeGridWeek, timeGridDay"
                    }}
                />
            </div>
        </div>
    )
}



export default FoodCalendar
