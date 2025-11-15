import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Calendar1 } from './Components'
import MyCalendar from './Components/calendar'

function App() {
  const [count, setCount] = useState(0)
  const today=new Date()
  const formatted = today.toLocaleDateString('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
});

console.log(formatted);
  

  return (
    <>
    <div className="calendar-wrapper">
      <h1 className="title">
        {value.toLocaleDateString("en-US", {
          day: "2-digit",
          month: "long",
          year: "numeric"
        })}
      </h1>

      <Calendar
        onChange={setValue}
        value={value}
        calendarType="iso8601" // Monday as first day
      />
    </div>
      <Calendar1></Calendar1>
      <MyCalendar></MyCalendar>
    </>
  )
}

export default App
