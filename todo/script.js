console.log("script.js ir pieslēgts");

// если id нет, getElementById возвращает null
// вызов addEventListener у него даёт Cannot read properties of null (reading 'addEventListener')
const ievade = document.getElementById("jauns");
const poga = document.getElementById("pievienot");
const zina = document.getElementById("zina");
const saraksts = document.getElementById("saraksts");

poga.addEventListener("click", function () {
    console.log(ievade.value);
    const teksts = ievade.value.trim();

    if (teksts === "") {
        zina.textContent = "Ieraksti uzdevumu!";
        return;
    }

    zina.textContent = "";

    const li = document.createElement("li");
    const spans = document.createElement("span");
    const dzest = document.createElement("button");

    // textContent показывает <b>tests</b> как обычный текст
    // innerHTML прочитал бы теги как HTML, поэтому для текста из поля оставлен textContent
    spans.textContent = teksts;
    dzest.type = "button";
    dzest.textContent = "Dzēst";

    li.appendChild(spans);
    li.appendChild(dzest);
    saraksts.appendChild(li);

    li.addEventListener("click", function () {
        // первый клик отмечает задачу, второй убирает отметку
        li.classList.toggle("izdarits");
    });

    dzest.addEventListener("click", function (event) {
        event.stopPropagation();
        li.remove();
    });

    ievade.value = "";
    ievade.focus();
});

// после F5 список пустой, потому что задачи добавлены только в DOM
// при загрузке браузер заново читает HTML с пустым ul
