
function tableScale(n) {

    var table = "<table border='1' width='600' >";

    table += "<tr align='center'><td>Вопрос</td><td>Сумма</td></tr>";
    for (var key in scale) {
        if (key == n) {
            table += "<tr align='center' bgcolor='green'><td>" + key + "</td><td>" + scale[key] + "</td></tr>";
        } else {
            table += "<tr align='center'><td>" + key + "</td><td>" + scale[key] + "</td></tr>";
        }
    }

    table += "</table>";

    return table
}

function getNumQuestion() {

    var num = Math.floor(Math.random() * questions.length);

    while (questionOut.indexOf(num) != -1) {//элемент найден
        num = Math.round(Math.random() * questions.length);
    }

    questionOut.push(num);
    return questions[num];

}

function tableQuestion() {

    var question = getNumQuestion();

    var table = "<table border='' width='600' >";
    table += '<caption>' + question.q + '</caption>';

    table += "<tr align='center'><td>1." + question.a1 + "</td><td>2." + question.a2 + "</td></tr>";
    table += "<tr align='center'><td>3." + question.a3 + "</td><td>4." + question.a4 + "</td></tr>";

    table += "</table>";
    questionСorrectly = question.correctly;
    return table
}



