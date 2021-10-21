/** Dependencies */
import React, { useRef, useState } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import timeGridPlugin from "@fullcalendar/timegrid" // needed for dayClick

/** Components */
import Header from "../Layout/Header/Header"

/** Styles */
import './foodCalendar.scss'
import EventModal from './EventModal/EventModal'



const FoodCalendar = () => {

    const [modalOpen, setModalOpen] = useState(false)
    const calendarRef = useRef(null)

    const onEventAdded = event => {
        let calendarApi = calendarRef.current.getApi()
        calendarApi.addEvent(event)
    }

    return (
        <div>
            <Header />

            <div className="foodCalendar">
                <button className="addButton" onClick={() => setModalOpen(true)} type="submit">Add Meal</button>
                <FullCalendar
                    ref={calendarRef}
                    plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
                    initialView="dayGridMonth"
                    events={[
                        { title: 'event 1', date: '2021-10-01' },
                        { title: 'event 2', date: '2021-10-02' }
                    ]}
                    firstDay={1}
                    selectable={true}
                    editable={true}
                    headerToolbar={{
                        left: "prev,next,today",
                        center: "title",
                        right: "dayGridMonth, timeGridWeek, timeGridDay"
                    }}
                />
                <EventModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onEventAdded={event => onEventAdded(event)} />
            </div>
        </div>
    )
}



export default FoodCalendar
