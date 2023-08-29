
import { useEffect, useState } from 'react'

import './App.css'

function App() {

  const [data, setData] = useState([])

  useEffect (() => {
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m'
    fetch(url).then(res =>res.json()).then(data => setData(data))

  },{})

  console.log ("data: ", data)

  return (
    <>
      <div>
        <h3>Timezone:</h3>
        <p> {data.timezome} </p>
        <h3> Sunrise: </h3>
        {data.daily.sunrise.map((item,index) =>{

        } )}
        </div>

    </>
  )
}

export default App
