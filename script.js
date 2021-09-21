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

function operate(operators, nums) {
    console.log(1);
}

const buttons = document.querySelectorAll(".button, .top");

const equation = document.querySelector("#equation");
let equationLength = equation.clientWidth;

let operators = [];
let nums = [];


buttons.forEach((button) =>
    button.addEventListener("click", () => {
        if (button.className === "button operator") {
            nums.push(parseInt(equation.textContent.split(" ").slice(-1).join(", ")));
            operators.push(button.textContent);
            if (button.id === "equal") {
                operate(operators, nums);
            }
            equation.textContent += " " + button.textContent + " ";
        } else if (button.id === "clear") {
            operators = [];
            nums = [];
            equation.textContent = "";
        } else if (button.className === "button number") {
            equation.textContent += button.textContent;
        }
    })
);
