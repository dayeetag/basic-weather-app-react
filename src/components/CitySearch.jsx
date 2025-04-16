import './CitySearch.css'

export default function CitySearch({ city, setCity, setWeather, setForecast, setError }) {

    const API_KEY = 'b8c190b945bfb9e0e31b87462e40d4a9'

    async function handleCitySearch() {
        if (city === "") {
            setCity("");
            setWeather("");
            setForecast("");
            setError(null)
        }
        else {
            try {
                setError(null)
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
                const response = await fetch(url);
                const data = await response.json();
                setWeather(data);
                console.log(data);

                const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
                const forecastData = await forecastResponse.json();

                const dailyForecast = forecastData.list.filter(
                    (item, index) => index % 8 === 0
                );
                setForecast(dailyForecast);
                console.log(dailyForecast)

                setError("");
            }
            catch (err) {
                console.log(err)
                setCity("");
                setWeather("");
                setForecast("");
                setError("Sorry, we could not retrieve the weather data at this time.");
            }
        }
    }

    return (
        <div className="citySearch">
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city name, country"
                className="searchInput"
            />
            <button className="searchButton" onClick={handleCitySearch}>
                Search
            </button>
        </div>
    )
}