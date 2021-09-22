
var num = +prompt("Введите число от 0 до 999:");

getAnswer(num);

function getAnswer(num) {
    var answer = { 'единицы': 0, 'десятки': 0, 'сотни': 0 };
    if (num.toString().length > 3 || isNaN(num)) {
        console.log(answer);
    } else {

        answer.сотни = parseInt(num / 100);
        num -= answer.сотни * 100;
        answer.десятки = parseInt(num / 10);
        num -= answer.десятки * 10;
        answer.единицы = num;
        console.log(answer)
    }
}

