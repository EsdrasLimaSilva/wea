import ForecastUnit from "./forecastUnit";

const Forecast = function ({ data }) {
  const { daily } = data;
  console.log(daily);

  return (
    <section id="forecast-container">
      {daily.map((dayData, i) => {
        if (i > 0) {
          return (
            <ForecastUnit
              humidity={dayData.humidity}
              icon={dayData.weather[0].icon}
              dat={dayData.dt}
              temp={dayData.temp.day}
              tempMax={dayData.temp.max}
              tempMin={dayData.temp.min}
            />
          );
        }
      })}
    </section>
  );
};

export default Forecast;
