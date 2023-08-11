let clearScreenButton = document.querySelector("#clearScreen");
let plusButton = document.querySelector("#plus");
let minusButton = document.querySelector("#minus");
let ymnojenieButton = document.querySelector("#ymnojenie");
let delenieButton = document.querySelector("#delenie");
let ravnoButton = document.querySelector("#ravno");
let zeroButton = document.querySelector("#zero");
let oneButton = document.querySelector("#one");
let twoButton = document.querySelector("#two");
let threeButton = document.querySelector("#three");
let fourButton = document.querySelector("#four");
let fiveButton = document.querySelector("#five");
let sixButton = document.querySelector("#six");
let sevenButton = document.querySelector("#seven");
let eightButton = document.querySelector("#eight");
let nineButton = document.querySelector("#nine");
let firstNumber;
let symbol;

clearScreenButton.addEventListener("click", clearScreen);
zeroButton.addEventListener("click", zero);
oneButton.addEventListener("click", one);
twoButton.addEventListener("click", two);
threeButton.addEventListener("click", three);
fourButton.addEventListener("click", four);
fiveButton.addEventListener("click", five);
sixButton.addEventListener("click", six);
sevenButton.addEventListener("click", seven);
eightButton.addEventListener("click", eight);
nineButton.addEventListener("click", nine);
plusButton.addEventListener("click", plus);
minusButton.addEventListener("click", minus);
ymnojenieButton.addEventListener("click", ymnojenie);
delenieButton.addEventListener("click", delenie);
ravnoButton.addEventListener("click", ravno);

function clearScreen() {
    let screen = document.querySelector("#calculatorScreen");
    screen.value = null;
}
function ravno() {
    let screen = document.querySelector("#calculatorScreen");
    let secondNumber = screen.value;
    let result = 0;
    switch (symbol) {
        case "+":
            result = firstNumber + Number(secondNumber);
            break;
        case "-":
            result = firstNumber - Number(secondNumber);
            break;
        case "*":
            result = firstNumber * Number(secondNumber);
            break;
        case "/":
            result = firstNumber / Number(secondNumber);
            break;
    }
    screen.value = result;
}

function plus() {
    let screen = document.querySelector("#calculatorScreen");
    let screenNumber = Number(screen.value);
    firstNumber = Number(screenNumber);
    symbol = "+";
    screen.value = null;
}

function minus() {
    let screen = document.querySelector("#calculatorScreen");
    let screenNumber = Number(screen.value);
    firstNumber = Number(screenNumber);
    symbol = "-";
    screen.value = null;
}

function ymnojenie() {
    let screen = document.querySelector("#calculatorScreen");
    let screenNumber = Number(screen.value);
    firstNumber = Number(screenNumber);
    symbol = "*";
    screen.value = null;
}

function delenie() {
    let screen = document.querySelector("#calculatorScreen");
    let screenNumber = Number(screen.value);
    firstNumber = Number(screenNumber);
    symbol = "/";
    screen.value = null;
}
function zero() {
    let screen = document.querySelector("#calculatorScreen");
    let addNumbers = document.createTextNode("0");
    screen.appendChild(addNumbers);
    screen.value += 0;
}

function one() {
    let screen = document.querySelector("#calculatorScreen");
    let addNumbers = document.createTextNode("1");
    screen.appendChild(addNumbers);
    screen.value += 1;
}

function two() {
    let screen = document.querySelector("#calculatorScreen");
    let addNumbers = document.createTextNode("2");
    screen.appendChild(addNumbers);
    screen.value += 2;
}

function three() {
    let screen = document.querySelector("#calculatorScreen");
    let addNumbers = document.createTextNode("3");
    screen.appendChild(addNumbers);
    screen.value += 3;
}

function four() {
    let screen = document.querySelector("#calculatorScreen");
    let addNumbers = document.createTextNode("4");
    screen.appendChild(addNumbers);
    screen.value += 4;
}

function five() {
    let screen = document.querySelector("#calculatorScreen");
    let addNumbers = document.createTextNode("5");
    screen.appendChild(addNumbers);
    screen.value += 5;
}

function six() {
    let screen = document.querySelector("#calculatorScreen");
    let addNumbers = document.createTextNode("6");
    screen.appendChild(addNumbers);
    screen.value += 6;
}

function seven() {
    let screen = document.querySelector("#calculatorScreen");
    let addNumbers = document.createTextNode("7");
    screen.appendChild(addNumbers);
    screen.value += 7;
}

function eight() {
    let screen = document.querySelector("#calculatorScreen");
    let addNumbers = document.createTextNode("8");
    screen.appendChild(addNumbers);
    screen.value += 8;
}

function nine() {
    let screen = document.querySelector("#calculatorScreen");
    let addNumbers = document.createTextNode("9");
    screen.appendChild(addNumbers);
    screen.value += 9;
}