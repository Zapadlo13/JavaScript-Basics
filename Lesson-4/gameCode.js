//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, ok;

var answers = [];

function question(num) {
    do {//Выводим первый вопрос
        ok = false;
        event = +prompt(works[num].a00 + works[num].a1 + works[num].a2 + '-1 - Выход из игры');

        if (event == -1) {
            break;
        }
        else {
            ok = isAnswer(works.a0, event);
        }
    } while (!ok);
    a = [num, event]
    answers.push(a);
}

question(0);

switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        question(1);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно

            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                question(3);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        question(2);
        switch (event) {
            case 1: // Второе действие

            case 2: // Второе действие
                question(3);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}

var numQuestion = +prompt("Введите номер вопроса:");

if (numQuestion > answers.length || isNaN(numQuestion)) {
    alert('Ошибка ввода.');
} else {
    alert('Bопрос №' + numQuestion + ':' + works[answers[numQuestion - 1][0]].a00 + '\nОтвет:' + answers[numQuestion - 1][1]);
}

alert('Спасибо за игру');

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;

}

