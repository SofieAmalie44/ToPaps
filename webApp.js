/*Simple calculator

**Difficulty: level 1**

Create a calculator where a user can input some information and get a result from that information.

- Maybe a user inputs how far you have to drive to work and the website calculates co2 emissions */

document.addEventListener("DOMContentLoaded", function () {
    const inputNumber = document.querySelector("#inputNumber");
    const button = document.querySelector("#calBtn");
    const result = document.querySelector("#result");

    button.addEventListener("click", function () {
        const milesDriven = parseInt(inputNumber.value);
        const co2PrMileInGrams = 400;
        const co2Calculator = co2PrMileInGrams * milesDriven;
        result.textContent = `CO2 emissions for ${milesDriven} miles driven: ${co2Calculator} grams`;
        console.log(co2Calculator);
    });
});


