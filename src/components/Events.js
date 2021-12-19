import React from 'react';
import './Events.css';
import {Calendar, momentLocalizer, Views} from 'react-big-calendar';
import moment from 'moment';
import eventsList from './resources/eventsList';
let allViews = Object.keys(Views).map(k => Views[k])


const localizer = momentLocalizer(moment)


const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: 'lightblue',
      display: 'table',
    },
  })

function Events() {

    return (
        //TODO: style this
        <>
            <div className="events-container">
                <div className="calender-container">
                    <Calendar
                        events={eventsList}
                        defaultView={Views.WEEK}
                        views={allViews}
                        step={60}
                        showMultiDayTimes
                        defaultDate={new Date(2021, 12, 18)}
                        localizer={localizer}
                        components={{
                            timeSlotWrapper: ColoredDateCellWrapper,
                          }}
                    ></Calendar>
                </div>
            </div>
        </>
    )
}

export default Events;