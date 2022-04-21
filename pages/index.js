import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";

//components
import CurWeaCont from "../components/currentWeatherContainer";
import Header from "../components/header";
import Forecast from "../components/forecast";
import Footer from "../components/footer";
import ErrorMsg from "../components/errorMessage";

const Home = function () {
  const [currentWeather, setCurrentWeather] = useState({});
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageFound, setPageFound] = useState(true);

  //format the string
  const setString = function (str) {
    const cityName = String(str)
      .replaceAll(" ", "+")
      .toLowerCase()
      .trim()
      .split(" ")
      .join("");

    return cityName;
  };

  //get forecast data
  const getForecast = function (lat, lon) {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly&appid=bb8a96a3819aa01079b5cc2b5073c4e1&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        setForecastData(data);
        setLoading(false);
      })
      .catch((error) => console.log(error.message));
  };

  //get city current weather
  const getCurrentWeather = function (coords = [-3.7304512, -38.5217989]) {
    const [lat, lon] = coords;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=bb8a96a3819aa01079b5cc2b5073c4e1&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        setCurrentWeather(data);
        getForecast(lat, lon);
      })
      .catch((error) => console.log(error.message));
  };

  //get lat and lon from a city specified from user
  const getData = function (city) {
    setPageFound(true);
    fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=bb8a96a3819aa01079b5cc2b5073c4e1`
    )
      .then((response) => response.json())
      .then((data) => {
        getCurrentWeather([data[0].lat, data[0].lon]);
      })
      .catch((error) => setPageFound(false));
  };

  useEffect(() => {
    getData("fortaleza");
  }, []);

  //get the city name on submit
  useEffect(() => {
    document
      .querySelector("#getCityForm")
      .addEventListener("submit", function (e) {
        e.preventDefault();
        const city = setString(document.querySelector("#city-input").value);
        setLoading(true);
        getData(city);
      });
  }, []);

  return (
    <>
      {pageFound ? (
        <>
          {loading ? (
            <>
              <Header />
              <div id="load-container">
                <FontAwesomeIcon icon={faSun} id="spinner" />
              </div>
              <Footer />
            </>
          ) : (
            <>
              <Header />
              <CurWeaCont dataCurrentWeather={currentWeather} />
              <Forecast data={forecastData} />
              <Footer />
            </>
          )}
        </>
      ) : (
        <>
          <Header />
          <div id="page-not-found-container">
            <ErrorMsg />
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
