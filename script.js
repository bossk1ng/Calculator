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

function operate(operator, num1, num2) {
    console.log(operator);
}

const operators = document.querySelectorAll(".top, .operator");

const equation = document.querySelector("#equation");

operators.forEach((operator) =>
    operator.addEventListener("click", () => {
        operate(operator.id);
        {
            if (
                operator.className === "operator" ||
                operator.className === "number"
            ) {
                equation.textContent += " " + operator.textContent;

                //TODO create function to take all content
            } else if (operator.id === "clear") {
                equation.textContent = "";
            }
        }
    })
);

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        equation.textContent += number.textContent;
    });
});
