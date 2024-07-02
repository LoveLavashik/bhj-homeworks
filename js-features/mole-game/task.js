const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
let counterDead = 0;
let counterLost = 0;
for (let i = 1; i <= 9; i++) {
    getHole = index => document.getElementById(`hole${index}`);
    let hole = getHole(i);
    hole.onclick = function game() {
        if (hole.classList.contains('hole_has-mole')) {
            dead.textContent++;
        } else {
            lost.textContent++;
        }
        if (dead.textContent == 10 && lost.textContent < 5) {
            alert('Вы выиграли');
            dead.textContent = 0;
            lost.textContent = 0;
        } else if (dead.textContent < 10 && lost.textContent == 5) {
            alert('Вы проиграли');
            dead.textContent = 0;
            lost.textContent = 0;
        }
    }
}