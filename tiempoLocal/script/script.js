document.addEventListener("DOMContentLoaded", function () {
  cityWeather();
  changeTempUnit();
  removeCookies();
});

const weatherData = {
  bsas: {
    Hoy: ["./img/cloud-sun-solid.svg", "Parcialmente Nublado", 19, 13],
    Mañana: ["./img/cloud-sun-solid.svg", "Parcialmente Nublado", 19, 17],
    Miércoles: ["./img/cloud-sun-solid.svg", "Parcialmente Nublado", 21, 15],
    Jueves: ["./img/sun-solid.svg", "Soleado", 28, 13],
    Viernes: ["./img/cloud-sun-solid.svg", "Parcialmente Nublado", 17, 13],
  },
  cdmx: {
    Hoy: ["./img/cloud-sun-solid.svg", "Parcialmente Nublado", 29, 13],
    Mañana: ["./img/cloud-sun-solid.svg", "Parcialmente Nublado", 28, 13],
    Miércoles: ["./img/cloud-sun-solid.svg", "Parcialmente Nublado", 28, 13],
    Jueves: ["./img/cloud-sun-solid.svg", "Parcialmente Nublado", 28, 13],
    Viernes: ["./img/sun-solid.svg", "Soleado", 28, 13],
  },
  scl: {
    Hoy: ["./img/cloud-sun-solid.svg", "Parcialmente Nublado", 24, 11],
    Mañana: ["./img/cloud-sun-solid.svg", "Parcialmente Nublado", 24, 10],
    Miércoles: ["./img/cloud-sun-solid.svg", "Parcialmente Nublado", 25, 11],
    Jueves: ["./img/sun-solid.svg", "Soleado", 28, 13],
    Viernes: ["./img/sun-solid.svg", "Soleado", 29, 15],
  },
  sp: {
    Hoy: ["./img/cloud-sun-solid.svg", "Parcialmente Nublado", 32, 21],
    Mañana: ["./img/rain-solid.svg", "Lluvia", 29, 19],
    Miércoles: ["./img/rain-solid.svg", "Lluvia", 29, 21],
    Jueves: ["./img/rain-solid.svg", "Lluvia", 29, 20],
    Viernes: ["./img/rain-solid.svg", "Lluvia", 25, 19],
  },
  qto: {
    Hoy: ["./img/cloud-sun-solid.svg", "Parcialmente Nublado", 15, 10],
    Mañana: ["./img/rain-solid.svg", "Lluvia", 17, 11],
    Miércoles: ["./img/rain-solid.svg", "Lluvia", 17, 9],
    Jueves: ["./img/rain-solid.svg", "Lluvia", 18, 9],
    Viernes: ["./img/rain-solid.svg", "Lluvia", 16, 10],
  },
};

const days = ["Hoy", "Mañana", "Miércoles", "Jueves", "Viernes"];

// Añadir función para que al cargar la página esta debe mostrar una alerta con la leyenda “Cargando Reporte del Clima”.
// Corregir bugs respecto a la temperatura

function cityWeather() {
  let countryList = document.querySelectorAll("#country li");
  let weatherCards = document.querySelectorAll(".weather-card");
  let cityName = document.querySelector(".city-name");
  countryList.forEach(function (country) {
    country.addEventListener("click", function () {
      let city = this.querySelector("a");
      let cityId = this.querySelector("a").id;
      cityName.textContent = city.textContent;
      let cityData = weatherData[cityId];
      weatherCards.forEach(function (card, day_index) {
        const day = days[day_index];
        const [
          weatherIcon,
          weatherDescription,
          weatherTempMax,
          weatherTempMin,
        ] = cityData[day];
        card.querySelector(".weather-icon").src = weatherIcon;
        card.querySelector(".weather-description").textContent =
          weatherDescription;
        card.querySelector(".unitMax").textContent = weatherTempMax;
        card.querySelector(".unitMin").textContent = weatherTempMin;
      });
    });
  });
}

let actualUnit = "Celsius";
function changeTempUnit() {
  let unit = document.getElementById("temp-unit");
  let temperature = document.querySelectorAll(".weather-temperature");
  unit.addEventListener("change", function () {
    let selectedUnit = this.value;
    if (actualUnit == "Celsius" && selectedUnit == "Fahrenheit") {
      temperature.forEach(function (temp) {
        let maxValue = parseInt(temp.querySelector(".unitMax").textContent);
        let minValue = parseInt(temp.querySelector(".unitMin").textContent);
        let maxNewValue = Math.round((maxValue * 9) / 5 + 32);
        let minNewValue = Math.round((minValue * 9) / 5 + 32);
        temp.innerHTML = `<span class="unitMax">${maxNewValue}</span>°/<span class="unitMin">${minNewValue}</span>°`;
      });
    } else if (actualUnit == "Fahrenheit" && selectedUnit == "Celsius") {
      temperature.forEach(function (temp) {
        let maxValue = parseInt(temp.querySelector(".unitMax").textContent);
        let minValue = parseInt(temp.querySelector(".unitMin").textContent);
        let maxNewValue = Math.round(((maxValue - 32) * 5) / 9);
        let minNewValue = Math.round(((minValue - 32) * 5) / 9);
        temp.innerHTML = `<span class="unitMax">${maxNewValue}</span>°/<span class="unitMin">${minNewValue}</span>°`;
      });
    }
    actualUnit = selectedUnit;
  });
}

function removeCookies() {
  let acceptButton = document.querySelector(".accept-btn");
  let cookies = document.querySelector(".cookies");
  acceptButton.addEventListener("click", function () {
    cookies.remove();
  });
}
