import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperatureFull,
  faTemperatureLow,
  faWind,
  faDroplet,
} from "@fortawesome/free-solid-svg-icons";

const ForecastUnit = function ({
  humidity,
  icon,
  dat,
  temp,
  tempMax,
  tempMin,
}) {
  const dt = new Date(dat * 1000);
  const day = dt.getDate().toString().padStart(2, "0");
  const month = (dt.getMonth() + 1).toString().padStart(2, "0");
  const year = dt.getFullYear().toString();

  const date = `${day}/${month}/${year}`;

  return (
    <div>
      <h2>{date}</h2>
      <h3>{temp}°C</h3>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
      <h4 title="temperatura mínima">
        <FontAwesomeIcon icon={faTemperatureLow} className="icon icon-cold" />
        {tempMin}°C
      </h4>
      <h4 title="temperatura máxima">
        <FontAwesomeIcon icon={faTemperatureFull} className="icon-hot" />
        {tempMax}°C
      </h4>
    </div>
  );
};

export default ForecastUnit;
