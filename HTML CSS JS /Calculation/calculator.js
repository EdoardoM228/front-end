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
let pizda;
let klitor;

clearScreenButton.addEventListener("click", hui);
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
ravnoButton.addEventListener("click",ravno);

function hui(){
    let screvaginaen = document.querySelector("#calculatorScreen");
    screvaginaen.value = null;
}
function ravno() {
    let test = document.querySelector("#calculatorScreen");
    let hui = test.value;
    let zalypa = 0;
    switch (klitor) {
        case "+":
            zalypa = pizda + Number(hui);
            break;
        case "-":
            zalypa = pizda - Number(hui);
            break;
        case "*":
            zalypa = pizda * Number(hui);
            break;
        case "/":
            zalypa = pizda / Number(hui);
            break;
    }
    test.value = zalypa;
}

function plus() {
    let test = document.querySelector("#calculatorScreen");
    let vagina = Number(test.value);
    pizda = Number(vagina);
    klitor = "+";
    test.value = null;
}

function minus() {
    let test = document.querySelector("#calculatorScreen");
    let vagina = Number(test.value);
    pizda = Number(vagina);
    klitor = "-";
    test.value = null;
}

function ymnojenie() {
    let test = document.querySelector("#calculatorScreen");
    let vagina = Number(test.value);
    pizda = Number(vagina);
    klitor = "*"
    test.value = null;
}

function delenie() {
    let test = document.querySelector("#calculatorScreen");
    let vagina = Number(test.value);
    pizda = Number(vagina);
    klitor = "/";
    test.value = null;
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