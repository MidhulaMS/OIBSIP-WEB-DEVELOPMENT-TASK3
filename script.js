const form = document.getElementById("converter-form");
const inputValue = document.getElementById("inputValue");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const resultField = document.getElementById("result");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const value = parseFloat(inputValue.value);

  if (isNaN(value)) {
    resultField.value = "Please enter a number";
    return;
  }

  let tempInCelsius;

  // Step 1: Convert input to Celsius
  if (fromUnit.value === "celsius") {
    tempInCelsius = value;
  } else if (fromUnit.value === "fahrenheit") {
    tempInCelsius = (value - 32) * (5 / 9);
  } else if (fromUnit.value === "kelvin") {
    tempInCelsius = value - 273.15;
  }

  let finalResult;

  // Step 2: Convert Celsius to target unit
  if (toUnit.value === "celsius") {
    finalResult = tempInCelsius;
  } else if (toUnit.value === "fahrenheit") {
    finalResult = (tempInCelsius * 9) / 5 + 32;
  } else if (toUnit.value === "kelvin") {
    finalResult = tempInCelsius + 273.15;
  }

  resultField.value = finalResult.toFixed(2);
});
