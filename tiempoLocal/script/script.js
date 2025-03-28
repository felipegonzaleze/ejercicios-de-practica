document.addEventListener("DOMContentLoaded", function() {
    changeTempUnit();
    removeCookies();
})

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