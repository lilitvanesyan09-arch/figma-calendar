import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.css"

function MyCalendar() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Generate months 0–11 for the given year
  const months = Array.from({ length: 12 }, (_, i) => new Date(year, i, 1));

  const handleYearChange = (delta) => {
    setYear((prev) => prev + delta);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" , backgroundColor:"black"}}>
      <h1>{year} Full Year Calendar</h1>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => handleYearChange(-1)} className="calendar-button"> Previous Year</button>
        <span style={{ margin: "0 15px", fontWeight: "bold" }} className="year">{year}</span>
        <button onClick={() => handleYearChange(1)} className="calendar-button">Next Year</button>
      </div>

      <div className="calendar-grid">
        {months.map((monthDate) => (
          <div key={monthDate.getMonth()} className="month-calendar">
              <h3>{monthDate.toLocaleString("en-US", { month: "long" })}</h3>
            <Calendar
             locale="en-US"
              value={selectedDate}
              onClickDay={(value) => setSelectedDate(value)}
              activeStartDate={monthDate}
              view="month"
              showNavigation={false}
              minDetail="month"
              maxDetail="month"
              className='cal'
            />
          </div>
        ))}
      </div>

      <p style={{ marginTop: "20px" }}>
        Selected: {selectedDate.toDateString()}
      </p>
    </div>
  );
}

export default MyCalendar;
