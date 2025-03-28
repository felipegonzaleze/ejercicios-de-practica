document.addEventListener("DOMContentLoaded", function() {
    changeTempUnit();
    removeCookies();
})

const weatherData = {
	"Buenos Aires" : {today : ["./img/cloud-sun-solid.svg", "Parcialmente Nublado", 19, 13], tomorrow: ["./img/cloud-sun-solid.svg", "Parcialmente Nublado", 19, 17], wednesday: ["./img/cloud-sun-solid.svg", "Parcialmente Nublado", 21, 15], thursday: [".img/sun-solid.svg", "Soleado", 28, 13], friday: [".img/cloud-sun-solid.svg", "Parcialmente Nublado", 17, 13]},
	"Ciudad de México": {today : ["./img/cloud-sun-solid.svg", "Parcialmente Nublado", 29, 13], tomorrow: ["./img/cloud-sun-solid.svg", "Parcialmente Nublado", 28, 13], wednesday: ["./img/cloud-sun-solid.svg", "Parcialmente Nublado", 28, 13], thursday: [".img/cloud-sun-solid.svg", "Parcialmente Nublado", 28, 13], friday: [".img/sun-solid.svg", "Soleado", 28, 13]},
	"Santiago de Chile": {today : ["./img/cloud-sun-solid.svg", "Parcialmente Nublado", 24, 11], tomorrow: ["./img/cloud-sun-solid.svg", "Parcialmente Nublado", 24, 10], wednesday: ["./img/cloud-sun-solid.svg", "Parcialmente Nublado", 25, 11], thursday: [".img/sun-solid.svg", "Soleado", 28, 13], friday: [".img/sun-solid.svg", "Soleado", 29, 15]},
	"Sao Paulo": {today : ["./img/cloud-sun-solid.svg", "Parcialmente Nublado", 32, 21], tomorrow: ["./img/rain-solid.svg", "Lluvia", 29, 19], wednesday: ["./img/rain-solid.svg", "Lluvia", 29, 21], thursday: [".img/rain-solid.svg", "Lluvia", 29, 20], friday: [".img/rain-solid.svg", "Lluvia", 25, 19]},
	"Quito": {today : ["./img/cloud-sun-solid.svg", "Parcialmente Nublado", 15, 10], tomorrow: ["./img/rain-solid.svg", "Lluvia", 17, 11], wednesday: ["./img/rain-solid.svg", "Lluvia", 17, 9], thursday: [".img/rain-solid.svg", "Lluvia", 18, 9], friday: [".img/rain-solid.svg", "Lluvia", 16, 10]}
}

let actualUnit = "Celsius"
function changeTempUnit() {
    let unit = document.getElementById("temp-unit");
    let temperature = document.querySelectorAll(".weather-temperature");
    unit.addEventListener("change", function() {
        let selectedUnit = this.value;
        if (actualUnit == "Celsius" && selectedUnit == "Fahrenheit") {
            temperature.forEach(function(temp){
                let maxValue = parseInt(temp.querySelector(".unitMax").textContent);
                let minValue = parseInt(temp.querySelector(".unitMin").textContent);
                let maxNewValue = Math.round((maxValue * 9/5) + 32);
                let minNewValue = Math.round((minValue * 9/5) + 32);
                temp.innerHTML = `<span class="unitMax">${maxNewValue}</span>°/<span class="unitMin">${minNewValue}</span>°`
            })
        }
        else if (actualUnit == "Fahrenheit" && selectedUnit == "Celsius") {
            temperature.forEach(function(temp){
                let maxValue = parseInt(temp.querySelector(".unitMax").textContent);
                let minValue = parseInt(temp.querySelector(".unitMin").textContent);
                let maxNewValue = Math.round((maxValue - 32) * 5/9);
                let minNewValue = Math.round((minValue - 32) * 5/9);
                temp.innerHTML = `<span class="unitMax">${maxNewValue}</span>°/<span class="unitMin">${minNewValue}</span>°`
            })
        }
        actualUnit = selectedUnit;
    })
}

function removeCookies() {
    let acceptButton = document.querySelector(".accept-btn");
    let cookies = document.querySelector(".cookies");
    acceptButton.addEventListener("click", function (){
        cookies.remove();
    })
}