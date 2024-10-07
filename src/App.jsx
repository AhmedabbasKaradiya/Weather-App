import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Box from './components/box'

function App() {
  const [location, setLocation] = useState([])
  const [cityinput, setCityInput] = useState('')
  const APIKey = "47b6bc831c9a1018014f43b4bb47659d"
  // const ApiKey = "2fe285d33ec242298fd30014240710"
  const fetchData = async () => {
    let lat, lon
    if (!cityinput) {
      return
    }
    try {
      const a = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityinput}  &appid=${APIKey}`)
      // const a = await fetch('http://api.weatherapi.com/v1/current.json?key=${ApiKey}&q=${cityinput}&aqi=yes', { mode: 'no-cors' })

      if (!a.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      let data = await a.json()
      setLocation(data);
      lat = data[0].lat
      lon = data[0].lon
      console.log(data)
      // console.log(lat, lon)
      // console.log(data[0].lat, data[0].lon, data[0].name);
    }
    catch (err) {
      console.log('Error fetching Data:', err);
    }

    // try {
    //   const b = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid={API key}`)
    //   // console.log(lat, lon)
    //   if (!b.ok) {
    //     throw new Error(`HTTP error! status: ${response.status}`);
    //   }
    //   let response = await b.json()
    //   console.log(response);
    // }
    // catch (err) {
    //   console.log('Error fetching Data:', err);
    // }
  }

  useEffect(() => {
    fetchData();
  }, [cityinput])

  return (
    <>
      <div className="container">
        <div className="weather">
          <div className="first">
            <div className="relative text-gray-600">
              <input type="search" name="serch" placeholder="Search" className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none" value={cityinput} onChange={(e) => setCityInput(e.target.value)} />
              <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                <img src="src/assets/Images/search.png" alt="" height={"22px"} />
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
