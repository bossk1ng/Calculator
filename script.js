function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, num1, num2) {}

const buttons = document.querySelectorAll(".button, .top");

const equation = document.querySelector("#equation");
let equationLength = equation.clientWidth;

buttons.forEach((button) =>
    button.addEventListener("click", () => {
        console.log(equation.textContent, button.textContent);
        if (button.className === "button operator") {
            equation.textContent += " " + button.textContent + " ";
        } else if (button.id === "clear") {
            equation.textContent = "";
        } else if (button.className === "button number") {
            equation.textContent += button.textContent;
        } 
    })
);
