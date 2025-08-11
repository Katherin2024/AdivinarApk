const images = [
    "img/manzana.jpg",
    "img/banana.jpg",
    "img/pina.jpg",
    "img/fresa.jpg",
    "img/naranja.jpg",
    "img/sandia.jpg",
    "img/uvas.jpg",
    "img/kiwi.jpg"
];

let targetImage = "";
let score = 0;

const gameBoard = document.getElementById("game-board");
const targetDiv = document.getElementById("target");
const scoreDisplay = document.getElementById("score");
const message = document.getElementById("message");

function startGame() {
    gameBoard.innerHTML = "";
    targetDiv.innerHTML = "";

    targetImage = images[Math.floor(Math.random() * images.length)];
    const img = document.createElement("img");
    img.src = targetImage;
    targetDiv.appendChild(img);

    message.textContent = "Memoriza esta imagen...";

    setTimeout(showBoard, 2000);
}

function showBoard() {
    message.textContent = "¿Dónde está la imagen objetivo?";
    targetDiv.innerHTML = "";

    const shuffled = [...images].sort(() => Math.random() - 0.5);

    shuffled.forEach(src => {
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = src;
        card.appendChild(img);

        card.addEventListener("click", () => checkChoice(src));

        gameBoard.appendChild(card);
    });
}

function checkChoice(selected) {
    if (selected === targetImage) {
        score += 10;
        message.textContent = "✅ ¡Correcto!";
    } else {
        score -= 5;
        message.textContent = "❌ Incorrecto";
    }
    scoreDisplay.textContent = score;

    setTimeout(startGame, 1500);
}

startGame();
