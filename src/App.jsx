import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Box from './components/box'

function App() {
  // const [location, setLocation] = useState([])
  // const fetchData = async () => {
  //   let a = await fetch("http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={47b6bc831c9a1018014f43b4bb47659d}")
  //   let data = await a.json()
  //   setLocation(data);
  //   console.log(data);
  // }
  return (
    <>
      <div className="container">
        <div className="weather">
          <div className="first">
            <div className="relative text-gray-600">
              <input type="search" name="serch" placeholder="Search" className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none" />
              <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                <img src="src/assets/Images/search.png" alt="" height={"22px"}/>
              </button>
            </div>
            <div className="weather-image">
              <img src="src/assets/Images/weather.webp" alt="" className='h-2' />
            </div>
            <div className="degree-weather">
              <h1 className='tempearature'>31°C</h1>
              <p>Mostly Cloudy</p>
            </div>
            <hr className='hr' />
            <div className="date">
              <p>5-10-2024</p>
              <p>Friday, 10:09 AM</p>
            </div>
            <div className="location">
              <h1>Vadodara</h1>
            </div>
          </div>
          <div className="second">
            <div className="days">
              <h2>Today</h2>
              <h2>Tomorrow</h2>
            </div>
            <div className="weather-boxes">
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default App
