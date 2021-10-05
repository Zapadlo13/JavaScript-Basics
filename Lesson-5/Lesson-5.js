var letters = "ABCDEFGH";

function createCheckerboard() {
    $('#chess').hide(0);
    var table = document.createElement("table");
    var tr = document.createElement("tr");
    var th = document.createElement("th");

    tr.append(th);
    for (i = 0; i <= 7; i++) {// Верхная строка с буквами
        var th = document.createElement("th");
        th.className = "rotate";
        th.innerText = letters[i];
        tr.append(th);
    }
    table.append(tr);

    for (i = 1; i <= 8; i++) {
        var tr = document.createElement("tr");
        var th = document.createElement("th"); // Левая граница доски (цифры)
        th.innerText = (9 - i);
        tr.append(th);

        for (j = 1; j <= 8; j++) { // Заполнение основной сетки
            var td = document.createElement("td");
            if ((j + i) % 2 == 0) {
                td.className = "black";
            } else {
                td.className = "white";
            }
            td.id = letters[j - 1] + (9 - i);
            tr.append(td);
        }

        var th = document.createElement("th"); // Правая граница доски (цифры)
        th.className = "rotate";
        th.innerText = (9 - i);
        tr.append(th);
        table.append(tr);
    }

    var tr = document.createElement("tr");
    var th = document.createElement("th");

    tr.append(th);
    for (i = 0; i <= 7; i++) {
        var th = document.createElement("th");
        th.innerText = letters[i];
        tr.append(th);
    }
    table.append(tr);
    document.querySelector('#chess').innerHTML = ""; // очищаем див
    document.querySelector('#chess').append(table);


    $('#chess').show(3000);

    var button = document.createElement("button"); // Кнопка Старт
    button.setAttribute("onclick", "startChess()");
    button.innerText = "Старт";

    document.querySelector('#buttons').innerHTML = "";// очищаем див
    document.querySelector('#buttons').append(button);
}

function startChess() {
    // Пешки
    for (i = 0; i <= 7; i++) {
        document.querySelector("#" + letters[i] + "2").innerHTML = "&#9817"; // Белые пешки
        document.querySelector("#" + letters[i] + "7").innerHTML = "&#9823;"; // Черные пешки
    }

    //Белые
    document.querySelector("#A1").innerHTML = "&#9814"; // ладья
    document.querySelector("#H1").innerHTML = "&#9814"; // ладья

    document.querySelector("#B1").innerHTML = "&#9816"; // конь
    document.querySelector("#G1").innerHTML = "&#9816"; // конь

    document.querySelector("#C1").innerHTML = "&#9815"; // слон
    document.querySelector("#F1").innerHTML = "&#9815"; // слон

    document.querySelector("#D1").innerHTML = "&#9812"; // король
    document.querySelector("#E1").innerHTML = "&#9813"; // ферзь

    //Черные
    document.querySelector("#A8").innerHTML = "&#9820"; // ладья
    document.querySelector("#H8").innerHTML = "&#9820"; // ладья

    document.querySelector("#B8").innerHTML = "&#9822"; // конь
    document.querySelector("#G8").innerHTML = "&#9822"; // конь

    document.querySelector("#C8").innerHTML = "&#9821"; // слон
    document.querySelector("#F8").innerHTML = "&#9821"; // слон

    document.querySelector("#D8").innerHTML = "&#9818"; // король
    document.querySelector("#E8").innerHTML = "&#9819"; // ферзь
}