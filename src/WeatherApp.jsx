import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Wonderland",
    feelsLike: 42.34,
    humidity: 81,
    temp: 34.25,
    tempMax: 55.05,
    tempMin: 29.41,
    weather: "sunny",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  }
  
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App</h2>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox Info={weatherInfo}/>
    </div>
  );
}
