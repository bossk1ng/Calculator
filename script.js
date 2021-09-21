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


const value = document.getElementById("value");

function operate(operators, nums) {
    let valueText = 0;

    console.log(nums.reduce((a, b) => add(a, b)))

    operators.forEach((operator) => {
        if (operator === "+") {
            valueText = nums.reduce((a, b) => add(a, b))
        } else if (operator === "-") {
            valueText = nums.reduce((a, b) => subtract(a, b))
        } else if (operator === "×") {
            valueText = nums.reduce((a, b) => multiply(a, b))
        } else {
            valueText = nums.reduce((a, b) => divide(a, b))
        }
    });
    value.textContent = Math.round(valueText * 100) / 100;
    nums.shift()
    nums.shift()
}
const buttons = document.querySelectorAll(".button, .top");

const equation = document.querySelector("#equation");
let equationLength = equation.clientWidth;

let operators = [];
let nums = [];

buttons.forEach((button) =>
    button.addEventListener("click", () => {
        if (button.className === "button operator") {
            nums.push(
                parseFloat(equation.textContent.split(" ").slice(-1).join(", "))
            );
            if (button.id === "equal") {
                operate(operators, nums);
                equation.textContent = value.textContent;
                return;
            }
            operators.push(button.textContent);
            equation.textContent += " " + button.textContent + " ";
        } else if (button.id === "clear") {
            operators = [];
            nums = [];
            valueText = ""
            value.textContent = ""
            equation.textContent = "";
        } else if (button.className === "button number") {
            equation.textContent += button.textContent;
        }
    })
);
