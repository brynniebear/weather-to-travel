import axios from "axios";
import React, { useState } from "react";

export default function CitySearch() {
  const [City1, setCity1] = useState(null);

  function searchCity(props) {
    console.log(props);
  }

  function getLatLon(props) {
    //documentation: https://openweathermap.org/current
    let apiKey = "f41567331930273650ce97e31f165a92";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${City1}&appid=${apiKey}`;

    axios.get(apiUrl).then(searchCity);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(City1);
    getLatLon(City1);
  }

  function handleChange(event) {
    setCity1(event.target.value);
  }

  return (
    <div className="CitySearch">
      <form>
        <input type="text" placeholder="City 1" onChange={handleChange} />
        <br />
        <button type="submit" onSubmit={handleSubmit} >Check the Weather</button>
      </form>
      <section>
        <div className="time">

        </div>
        <div className="weather">
          {City1}
        </div>
      </section>
    </div>
  );
}