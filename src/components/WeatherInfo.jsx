import './WeatherInfo.css'

export default function WeatherInfo({ city, weather, forecast }) {
    return (
        <div className='weatherContainer'>
            {weather && weather.main && weather.weather && (
                <div className='weatherDetailsContainer'>
                    <div className="header">
                        <h1 className="city">{weather.name}</h1>
                        <div className="temperature">{weather.main.temp}°C</div>
                        <img
                            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                            alt={weather.weather[0].main}
                        />
                        <div className="condition">{weather.weather[0].main}</div>
                    </div>
                    <div className="weatherDetails">
                        <div >
                            <p >Humidity</p>
                            <p style={{ fontWeight: "bold" }}>{Math.round(weather.main.humidity)}%</p>
                        </div>
                        <div>
                            <p>Wind Speed</p>
                            <p style={{ fontWeight: "bold" }}>{Math.round(weather.wind.speed)} m/s</p>
                        </div>
                    </div>
                </div>
            )}
            {forecast.length > 0 && (
                <>
                    <div className="forecast">
                        <h2 className="forecastHeader">5-Day Forecast</h2>
                        <div className="forecastDays">
                            {forecast.map((day, index) => (
                                <div key={index} className="forecastDay">
                                    <p>
                                        {new Date(day.dt * 1000).toLocaleDateString("en-IN", {
                                            weekday: "short",
                                        })}
                                    </p>
                                    <img
                                        src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                                        alt={day.weather[0].description}
                                    />
                                    <p>{Math.round(day.main.temp)}°C</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}