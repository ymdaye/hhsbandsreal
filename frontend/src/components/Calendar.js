import React from 'react';
import { motion } from 'framer-motion';

const Calendar = ({ title = "Upcoming Events" }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="bg-primary-600 p-6 text-center">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
      
      <div className="p-6">
        <div className="relative w-full" style={{ paddingBottom: "75%" }}>
          <iframe 
            src="https://calendar.google.com/calendar/embed?src=g9ekvje1f0son6en9i7io16rus%40group.calendar.google.com&ctz=America%2FNew_York" 
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: 0
            }}
            frameBorder="0" 
            scrolling="no"
            title="Band Calendar"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Calendar;