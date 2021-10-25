/** Dependencies */
import React, { useRef, useState } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import timeGridPlugin from "@fullcalendar/timegrid" // needed for dayClick

/** Components */
import Header from "../Layout/Header/Header"
import AddFoodModal from './EventModal/AddFoodModal'

/** Styles */
import './foodCalendar.scss'



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
                <AddFoodModal />
                <FullCalendar
                    ref={calendarRef}
                    plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
                    initialView="dayGridMonth"
                    events={[
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
            </div>
        </div>
    )
}



export default FoodCalendar
