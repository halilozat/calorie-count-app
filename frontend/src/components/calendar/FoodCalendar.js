/** Dependencies */
import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import timeGridPlugin from "@fullcalendar/timegrid" // needed for dayClick

/** Components */
import Header from '../header/Header'

/** Styles */
import './foodCalendar.scss'



const FoodCalendar = () => {

    return (
        <div>
            <Header />

            <div className="foodCalendar">
                <FullCalendar
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
            </div>
        </div>
    )
}



export default FoodCalendar
