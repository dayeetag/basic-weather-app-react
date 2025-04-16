import { useState } from 'react'
import './App.css'
import CitySearch from './components/CitySearch'
import WeatherInfo from './components/WeatherInfo'

function App() {
    const [city, setCity] = useState("")
    const [weather, setWeather] = useState("")
    const [forecast, setForecast] = useState("")
    const [error, setError] = useState(null)

    return (
        <div className='mainContainer'>
            <CitySearch city={city} setCity={setCity} setWeather={setWeather} setForecast={setForecast} setError={setError} />
            {error && <div className="error">{error}</div>}
            <WeatherInfo city={city} weather={weather} forecast={forecast} />
        </div>
    )
}

export default App
