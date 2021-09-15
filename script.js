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

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) =>
    operator.addEventListener("click", () => {
        operate(operator.id);
        {
            //TODO
            //operator.style.transform = "scale(0.8)";
        }
    })
);
