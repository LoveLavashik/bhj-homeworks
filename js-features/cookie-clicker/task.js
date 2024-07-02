const cookie = document.getElementById('cookie');
const clicker = document.getElementById('clicker__counter');
cookie.onclick = function() {
    let clicks = clicker.textContent++;
    if (clicks % 2 == 0) {
        cookie.width = 170;
    } else {
        cookie.width = 200;
    }
}