import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Calendar1 } from './Components'
import MyCalendar from './Components/calendar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Calendar1></Calendar1>
      <MyCalendar></MyCalendar>
    </>
  )
}

export default App
