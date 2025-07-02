import React, { useState } from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { motion } from 'framer-motion';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const Calendar = ({ title, events }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const calendarEvents = events || [
    {
      title: 'SEVMG 2025',
      start: new Date(2025, 8, 27, 9, 0), // September 27, 2025
      end: new Date(2025, 8, 27, 22, 0),
      description: 'Southeastern Virginia Music Games - Annual marching band competition',
      location: 'Hickory High School'
    },
    {
      title: 'Fall Concert',
      start: new Date(2025, 10, 15, 19, 0), // November 15, 2025
      end: new Date(2025, 10, 15, 21, 0),
      description: 'Concert Band and Wind Ensemble Fall Performance',
      location: 'HHS Auditorium'
    },
    {
      title: 'Band Practice',
      start: new Date(2025, 6, 1, 15, 30), // July 1, 2025
      end: new Date(2025, 6, 1, 17, 30),
      description: 'Weekly band practice session',
      location: 'Band Room'
    }
  ];

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
  };

  const eventStyleGetter = (event, start, end, isSelected) => {
    return {
      style: {
        backgroundColor: isSelected ? '#003e48' : '#006778',
        borderRadius: '8px',
        opacity: 0.8,
        color: 'white',
        border: '0px',
        display: 'block'
      }
    };
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title || "Event Calendar"}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with all our performances, practices, and special events
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
              <BigCalendar
                localizer={localizer}
                events={calendarEvents}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                onSelectEvent={handleSelectEvent}
                eventPropGetter={eventStyleGetter}
                views={['month', 'week', 'day']}
                defaultView="month"
                popup
                className="custom-calendar"
              />
            </div>
          </motion.div>

          {/* Event Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl shadow-xl p-6 text-white">
              {selectedEvent ? (
                <div>
                  <h3 className="text-2xl font-bold mb-4">{selectedEvent.title}</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="font-semibold">Date:</span>
                      <p className="text-primary-100">
                        {moment(selectedEvent.start).format('MMMM Do, YYYY')}
                      </p>
                    </div>
                    <div>
                      <span className="font-semibold">Time:</span>
                      <p className="text-primary-100">
                        {moment(selectedEvent.start).format('h:mm A')} - {moment(selectedEvent.end).format('h:mm A')}
                      </p>
                    </div>
                    {selectedEvent.location && (
                      <div>
                        <span className="font-semibold">Location:</span>
                        <p className="text-primary-100">{selectedEvent.location}</p>
                      </div>
                    )}
                    {selectedEvent.description && (
                      <div>
                        <span className="font-semibold">Description:</span>
                        <p className="text-primary-100">{selectedEvent.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Select an Event</h3>
                  <p className="text-primary-100">
                    Click on any event in the calendar to view details
                  </p>
                </div>
              )}
            </div>

            {/* Upcoming Events */}
            <div className="mt-6 bg-gray-50 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Events</h4>
              <div className="space-y-3">
                {calendarEvents
                  .filter(event => event.start >= new Date())
                  .sort((a, b) => a.start - b.start)
                  .slice(0, 3)
                  .map((event, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                      <div>
                        <p className="font-medium text-gray-900">{event.title}</p>
                        <p className="text-sm text-gray-600">
                          {moment(event.start).format('MMM Do, YYYY')}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .custom-calendar .rbc-header {
          background-color: #f8fafc;
          color: #1f2937;
          font-weight: 600;
          padding: 12px;
          border-bottom: 1px solid #e5e7eb;
        }
        
        .custom-calendar .rbc-month-view {
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          overflow: hidden;
        }
        
        .custom-calendar .rbc-day-bg {
          border-right: 1px solid #f3f4f6;
        }
        
        .custom-calendar .rbc-date-cell {
          text-align: center;
          padding: 8px;
        }
        
        .custom-calendar .rbc-today {
          background-color: #f0f9ff;
        }
      `}</style>
    </section>
  );
};

export default Calendar;