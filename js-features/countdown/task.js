const time = document.getElementById(`timer`);
let interval = setInterval(() => {
    if (time.textContent <= 0) {
        alert(`Вы победили в конкурсе!`);
        clearInterval(interval);
        return;
    };
    time.textContent = Number(time.textContent) - 1;
}, 1000);