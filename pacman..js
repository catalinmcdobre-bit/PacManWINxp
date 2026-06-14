const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Poziție inițială
let x = 200;
let y = 200;

function drawPacman() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(x, y, 20, 0.2 * Math.PI, 1.8 * Math.PI);
    ctx.lineTo(x, y);
    ctx.fill();
}

drawPacman();