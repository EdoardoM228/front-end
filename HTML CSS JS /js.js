// let names = ["keyboard", "mouse", "hoover", "steel"];
// let prices = [400, 200, 800, 390];

// alert("Добро пожаловать в наш магазин.");

// let productQuantity1 = totalCostCounter();

// function totalCostCounter() {
//     let massive = [];
//     for (let i = 0; i < names.length; i++) {
//         massive[i] = +prompt(`Укажи кол-во продукта ${names[i]}, цена ${prices[i]}.`);
//     }
//     return massive;
// }
// let totalPrice = counter(productQuantity1);

// function counter(productQuantity) {
//     let price = 0;

//     for (let x = 0; x < productQuantity.length; x++) {
//         price += productQuantity[x] * prices[x];
//     }
//     return price;
// }

// alertTotalPrice(totalPrice);

// function alertTotalPrice(totalPrice) {
//     if (totalPrice == 0) {
//         alert(`Сумма вашего заказа ${totalPrice}. Вы нечего не заказали`);
//     }
//     else if (totalPrice > 3000) {
//         alert(`Сумма вашего заказа ${totalPrice}. Доставка за наш счет.`);
//     }
//     else {
//         alert(`Сумма вашего заказа ${totalPrice}. Стоимость доставки 500`);
//     }
// }

// function repeatAlert(text) {
//     while (true) {
//         let repeat = +prompt("Укажи кол-во повторений.");

//         if (isNaN(repeat)) {
//             alert("Вы ввели не число, повторите попытку.");
//             continue;
//         }
//         else {
//             for (let i = 0; i < repeat; i++) {
//                 alert(text);
//             }
//         }
//         break;
//     }

// }

// function changeMassivePlace(massive) {
//     let firstElement = massive.shift();
//     let lastElement = massive.pop();

//     massive.unshift(lastElement);
//     massive.push(firstElement);
//     console.log(massive);
//     return massive;
// }

// data1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// data1
//     .filter(element => element % 2 == 0)
//     .forEach(element => console.log(element));

// let user = createUser();

// let dbOfUsers = [1, 3];
// dbOfUsers.push(user);

// for (let i = 0; i < dbOfUsers.length; i++) {
//     let user = createUser();
//     dbOfUsers[i] = user;
// }

// dbOfUsers.forEach(user => console.log(user));

// function createUser(){
//     let name = prompt("Введи имя пользователя.");
//     let email = prompt("Введи email пользователя.");

//     return { name: name, email: email};
// }

// let test = changeMassivePlace(prices);
// changeMassivePlace(names);


while(true){
    let test = add();

    if(test == "exit") break;
    addArticle(test);
}

function add(){
    let value = prompt("Введите тему для статьи.");
    return value;
}

function addArticle(text){
    let element = document.createElement("article");
    let textForElement = document.createTextNode(text);
    element.appendChild(textForElement);
    let container = document.querySelector("#output");
    container.append(element);
}