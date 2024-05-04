function slugify(title) {
    const wordsArr = title.split(" ");
    return wordsArr.join("-").toLowerCase();
}
/* Значенням параметра title будуть рядки, слова яких розділені лише пробілами.
Усі символи slug повинні бути в нижньому регістрі.
Усі слова slug повинні бути розділені тире.
Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
У консоль будуть виведені результати її роботи.
 */ 

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

/* Залиш цей код для перевірки ментором.

На що буде звертати увагу ментор при перевірці:

Оголошена функція slugify(title)
Виклик slugify("Arrays for begginers") повертає "arrays-for-begginers"
Виклик slugify("English for developer") повертає "english-for-developer"
Виклик slugify("Ten secrets of JavaScript") повертає "ten-secrets-of-javascript"
Виклик slugify("How to become a JUNIOR developer in TWO WEEKS") повертає "how-to-become-a-junior-developer-in-two-weeks" */