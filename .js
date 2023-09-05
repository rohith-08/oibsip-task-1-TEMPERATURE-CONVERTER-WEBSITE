function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById("temperature").value);
    const unit = document.getElementById("unit").value;
    let convertedTemperature;
    let resultUnit;

    if (isNaN(temperatureInput)) {
        document.getElementById("result").textContent = "Please enter a valid temperature.";
        return;
    }

    if (unit === "celsius") {
        convertedTemperature = (temperatureInput * 9/5) + 32;
        resultUnit = "Fahrenheit";
    } else if (unit === "fahrenheit") {
        convertedTemperature = (temperatureInput - 32) * 5/9;
        resultUnit = "Celsius";
    } else if (unit === "kelvin") {
        convertedTemperature = temperatureInput - 273.15;
        resultUnit = "Celsius";
    }

    document.getElementById("result").textContent = `Converted temperature: ${convertedTemperature.toFixed(2)} ${resultUnit}`;
}
