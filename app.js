window.onload = function () {

    var currentSum = "";

    const display = document.querySelector(".display");
    const buttons = document.querySelectorAll("button");

    function updateCurrentSum(digit) {
        currentSum += digit;
        display.textContent = currentSum;
    }

    function clearCurrentSum() {
        currentSum = "";
        display.textContent = currentSum;
    }

    function solveCurrentSum() {
        currentSum = eval(currentSum);
        display.textContent = currentSum;
    }

    buttons.forEach(button => {
        if (button.textContent == "C") {
            button.addEventListener("click", e => {clearCurrentSum()});
        } else if (button.textContent == "=") {
            button.addEventListener("click", e => {solveCurrentSum()});
        } else {
            button.addEventListener("click", e => {updateCurrentSum(button.textContent)});
        }
    })
}


