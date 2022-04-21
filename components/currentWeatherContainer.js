import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperatureFull,
  faTemperatureLow,
  faWind,
  faDroplet,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const CurWeaCont = function ({ dataCurrentWeather }) {
  const [data, setData] = useState(dataCurrentWeather);
  console.log(data);

  return (
    <section id="current-weather-container">
      <div>
        <h1>{data.name}</h1>
        <h2>{data.main.temp}°C</h2>
        <img
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt=""
        />
      </div>
      <div>
        <h3 title="sensação térmica">Sensação: {data.main.feels_like} °C</h3>
        <h3 title="umidade">
          <FontAwesomeIcon icon={faDroplet} className="icon icon-humidity" />
          {data.main.humidity} %
        </h3>
        <h3 title="temperatura máxima">
          <FontAwesomeIcon icon={faTemperatureFull} className="icon icon-max" />
          {data.main.temp_max} °C
        </h3>
        <h3 title="temperatura mínima">
          <FontAwesomeIcon icon={faTemperatureLow} className="icon icon-min" />
          {data.main.temp_min} °C
        </h3>
        <h3 title="velocidade do vento">
          <FontAwesomeIcon icon={faWind} className="icon icon-wind" />
          {data.wind.speed} m/s
        </h3>
      </div>
    </section>
  );
};

export default CurWeaCont;
