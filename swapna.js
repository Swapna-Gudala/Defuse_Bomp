let timerEl = document.getElementById("timer");
let counter = 10;
let intervalId = setInterval(function() {
    counter = counter - 1;
    timerEl.textContent = counter;
    if (counter === 0) {
        timerEl.textContent = "BOOM";
        clearInterval(intervalId);
    }
}, 1000);
let defuserEl = document.getElementById("defuser");
defuserEl.addEventListener("keydown", function() {
    let bombDefuserText = defuserEl.value; //event.attribute.value;
    console.log(event.key);
    if (event.key === "Enter" && bombDefuserText === "defuse" && counter !== 0) {
        timerEl.textContent = "Congratulations!!!You Did it!";
        clearInterval(intervalId);
    }
})