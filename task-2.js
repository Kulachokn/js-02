'use strict'

// ============================task1==========================


// const logItems = function(array) {
//
//     for (let i = 0; i <= array.length - 1; i++) {
//
//             console.log(`${i + 1} = ${array[i]}`);
//     }
// };
//
// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// ============================task2============================

// const calculateEngravingPrice = function(message, pricePerWord) {
//     let worldCount = message.split(" ");
//     // console.log(worldCount);
//     return worldCount.length * pricePerWord;
// };

// console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)); // 80
// console.log(calculateEngravingPrice( 'Proin sociis natoque et magnis parturient montes mus', 20)); // 160
// console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); // 240
// console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); // 120

// ===========================task3=============================

// const findLongestWord = function(string) {
//     let worldStr = string.split(" ");
//
//     let longestWorld = worldStr[0];
//
//     for (let i = 1; i <= worldStr.length - 1; i++) {
//         if (longestWorld.length < worldStr[i].length) {
//             longestWorld = worldStr[i];
//         }
//     }
//     return longestWorld;
// };

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
// console.log(findLongestWord('Google do a roll')); // 'Google'
// console.log(findLongestWord('May the force be with you')); // 'force'

// =============================task4====================================
// const formatString = function(string) {
//     return  string.length <= 40 ? string : `${string.slice(0, 40)}...`;
//
// };

// console.log(formatString('Curabitur ligula sapien, tincidunt non.')); // вернется оригинальная строка
// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.')); // вернется форматированная строка
// console.log(formatString('Curabitur ligula sapien.')); // вернется оригинальная строка
// console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',)); // вернется форматированная строка

// =============================task5====================================

// const checkForSpam = function(message) {
//  let lowerStr = message.toLocaleLowerCase();
//
//  if (lowerStr.includes("spam") || lowerStr.includes("sale")) {
//     return true;
// }
//
//  return false;

//=================second option===========
//  let wordSplit = message.split(" ");
// for (let i = 0; i <= wordSplit.length - 1; i++) {
//     if (wordSplit[i] === "spam" || wordSplit[i] === "sale") {
//         return true
//     }
// }
//  return false
//===========================================
// };

// console.log(checkForSpam('Latest technology news')); // false
// console.log(checkForSpam('JavaScript weekly newsletter')); // false
// console.log(checkForSpam('Get best sale offers now!')); // true
// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// =============================task6====================================

// const numbers = [];
// let total = 0;
// let input;
//
// do {
//     input = prompt("Введите число");
//
//     if (input === null) {
//         console.log("Отменено пользователем");
//         break;
//     }
//
//     if (isNaN(input)) {
//         alert('Было введено не число, попробуйте еще раз');
//         continue;
//     }
//
//     numbers.push(Number(input));
//
// } while (true);
//
//     if (numbers.length) {
//         for (const number of numbers) {
//             total += number;
//         }
//         alert(`Общая сумма чисел равна ${total}`);
//     }

// =============================task7====================================
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {

    if (4 < login.length && login.length <= 16) {
        return true;
    }
    return false;
};

const isLoginUnique = function(allLogins, login) {

        if (allLogins.includes(login)) {
            return true;
        }
        return false;
};

const addLogin = function(allLogins, login) {

    if (!isLoginValid(login)) {
        return 'Ошибка! Логин должен быть от 4 до 16 символов';
    }

    if (!isLoginValid(allLogins, login)) {
        return 'Такой логин уже используется!';
    }

    allLogins.push(login);
    return 'Логин успешно добавлен!';
};

console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
