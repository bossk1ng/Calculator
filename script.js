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

function updateValue() {
    nums.shift();
    nums.shift();
    operators.shift();
    if (nums.length > 0) {
        nums.unshift(valueText);
    }
}

const value = document.getElementById("value");

function operate(operators, nums) {
    let ol = operators.length;

    for (let i = 0; i < ol; i++) {
        if (operators[0] === "+") {
            valueText = add(nums[0], nums[1]);
            updateValue();
        } else if (operators[0] === "-") {
            valueText = subtract(nums[0], nums[1]);
            updateValue();
        } else if (operators[0] === "×") {
            valueText = multiply(nums[0], nums[1]);
            updateValue();
        } else {
            valueText = divide(nums[0], nums[1]);
            updateValue();
        }
    }
    equation.textContent = Math.round(valueText * 100) / 100;
}
const buttons = document.querySelectorAll(".button, .top");

const equation = document.querySelector("#equation");
let equationLength = equation.clientWidth;

let operators = [];
let nums = [];

buttons.forEach((button) =>
    button.addEventListener("click", () => {
        if (button.className === "button operator") {
            if (equation.textContent === "") {
                nums.push(parseFloat(value.textContent));
            } else {
                nums.push(
                    parseFloat(
                        equation.textContent.split(" ").slice(-1).join(", ")
                    )
                );
            }
            if (button.id === "equal") {
                value.textContent = equation.textContent;
                operate(operators, nums);
                return;
            }
            operators.push(button.textContent);
            equation.textContent += " " + button.textContent + " ";
        } else if (button.id === "clear") {
            operators = [];
            nums = [];

            valueText = "";
            value.textContent = "";
            equation.textContent = "";
        } else if (button.className === "button number") {
            if (
                button.id === "decimal" &&
                equation.textContent
                    .split(" ")
                    .slice(-1)
                    .join(", ")
                    .includes(".")
            ) {
                return;
            }
            equation.textContent += button.textContent;
        }
    })
);
