function makeTransaction(quantity , pricePerDroid){
    return `You ordered ${quantity} droids worth ${quantity * pricePerDroid} credits!`;
}

console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"Задача 1. Генератор slug



/* Виконуй це завдання у файлі task-1.js


Перш, ніж розв’язувати задачу, давай визначимося із новим терміном!

Термін slug — це зрозумілий людині унікальний ідентифікатор, який використовується у веб розробці для створення читабельних URL-адрес.

Наприклад, замість того, щоб користувач побачив в адресному рядку mysite.com/posts/1q8fh74tx, можна зробити slug із назви статті. У результаті адреса буде приємнішою для сприйняття: mysite.com/posts/arrays-for-begginers.



Slug — це завжди рядок у нижньому регістрі, слова якого розділені тире.

З цим розібралися? А тепер давай нарешті виконувати задачу!



Напиши функцію slugify(title), яка приймає заголовок статті, параметр title і повертає slug, створений із цього рядка.

Значенням параметра title будуть рядки, слова яких розділені лише пробілами.
Усі символи slug повинні бути в нижньому регістрі.
Усі слова slug повинні бути розділені тире.
Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.



console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

Залиш цей код для перевірки ментором.



На що буде звертати увагу ментор при перевірці:



Оголошена функція slugify(title)
Виклик slugify("Arrays for begginers") повертає "arrays-for-begginers"
Виклик slugify("English for developer") повертає "english-for-developer"
Виклик slugify("Ten secrets of JavaScript") повертає "ten-secrets-of-javascript"
Виклик slugify("How to become a JUNIOR developer in TWO WEEKS") повертає "how-to-become-a-junior-developer-in-two-weeks" */

function getSlice(array, value) {
    let temp = array.indexOf(value);
  return array.slice(0, temp + 1);
}

console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly"))/* повертає ["Mango", "Poly"] */
console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax"))/* повертає ["Mango", "Poly", "Ajax"] */
console.log(getSlice(["Mango", "Poly", "Ajax"], "Mango")) /* повертає ["Mango"] */
console.log(getSlice(["Mango", "Poly", "Ajax"], "Jacob")) /* повертає [] */
console.log(getSlice(["Mango", "Poly", "Ajax"], "Casey")) /* повертає [] ,array.length*/


function calculateEngravingPrice(message, pricePerWord) {
  return message.split(" ").length * pricePerWord;
}

console.log(calculateEngravingPrice("JavaScript is in my blood", 20)) /*  повертає `100` */
console.log(calculateEngravingPrice("Web-development is creative work", 20))/*  повертає `80` */
console.log(calculateEngravingPrice("Web-development is creative work", 40)) /*  повертає `160` */
console.log(calculateEngravingPrice("JavaScript is in my blood", 10)) /*  повертає `50` */