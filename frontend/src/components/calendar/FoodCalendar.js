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
    const [events, setEvents] = useState([])
    const calendarRef = useRef(null)
    const { userId } = useAuth()

    const handleEventClick = (clickInfo) => {
        alertify.alert("Event Info!", `This Event's Title : ${clickInfo.event.title}`)
        console.log(clickInfo.event.id)
        // clickInfo.event.remove()
    }

    async function handleDatesSet(data) {
        const response = await CalorieCountService.GetUserFoods(userId)
        setEvents(response.data)
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
                    events={events}
                    ref={calendarRef}
                    plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
                    initialView="dayGridMonth"
                    eventClick={handleEventClick}
                    select={handleDateSelect}
                    dateClick={(e) => {
                        console.log("dateclick", e)
                    }}
                    datesSet={(date) => handleDatesSet(date)}
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
