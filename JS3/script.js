/*Please run html file and wait 5 seconds,
 square of elements check in console*/
"use strict"
const canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

function setColor() {
    let item = (Math.random() * 10).toFixed(0);
    const colors = ["#CC0000", "#13598b", "#33CC00", "#990099", "#FF0066", "#660033", "#33FF99", "#6600FF", "#99FF33", "#0033CC"];
    return colors[item];
};

const circles = [];
const squares = [];

let createElements = setInterval(function () {
    if (circles.length === 10 && squares.length === 10) {
        clearInterval(createElements);
    }
    circles.push({
        radius: Math.random() * 20 + 10,
        color: setColor(),
        startX: 0,
        startY: 0,
        dx:(Math.random() * 10) + 10,
        dy: (Math.random() * 10) + 20,
    });

    squares.push({
        color: setColor(),
        length: Math.random() * 40 + 10,
        startX: 0,
        startY: 0,
        dx:(Math.random() * 10) + 20,
        dy: (Math.random() * 10) + 10,
    });
}, 5000);

function clearRect() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function drawCircle(element) {
    context.beginPath();
    context.fillStyle = element.color;
    context.arc(element.startX, element.startY, element.radius, 0, 2 * Math.PI, false);
    context.fill();
    context.closePath();
}

function drawSquare(element) {
    context.beginPath();
    context.fillStyle = element.color;
    context.rect(element.startX, element.startY, element.length, element.length);
    context.fill();
    context.closePath();
}

let animationTimer = setInterval(function (){
    clearRect();

    context.fillStyle = "#FFA500";
    context.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i <= circles.length - 1; i++) {
        drawCircle(circles[i]);
        console.log("circle" + i + " S = " + (Math.PI * Math.pow(circles[i].radius, 2)));
        if (circles[i].startX - circles[i].radius < 0 && circles[i].dx < 0) {
            circles[i].dx = -circles[i].dx;
        }

        if (circles[i].startX + circles[i].radius > canvas.width && circles[i].dx > 0) {
            circles[i].dx = -circles[i].dx;
        }

        if (circles[i].startY - circles[i].radius < 0 && circles[i].dy < 0) {
            circles[i].dy = -circles[i].dy;
        }

        if (circles[i].startY + circles[i].radius > canvas.height && circles[i].dy > 0) {
            circles[i].dy = -circles[i].dy;
        }

        circles[i].startX += circles[i].dx;
        circles[i].startY += circles[i].dy;
    }

    for (let j = 0; j <= squares.length - 1; j++) {
        drawSquare(squares[j]);
        console.log("square" + j + " S = " + (Math.pow(squares[j].length, 2)));
        if (squares[j].startX < 0 && squares[j].dx < 0) {
            squares[j].dx = -squares[j].dx;
        }

        if (squares[j].startX + squares[j].length > canvas.width && squares[j].dx > 0) {
            squares[j].dx = -squares[j].dx;
        }

        if (squares[j].startY < 0 && squares[j].dy < 0) {
            squares[j].dy = -squares[j].dy;
        }

        if (squares[j].startY + squares[j].length > canvas.height && squares[j].dy > 0) {
            squares[j].dy = -squares[j].dy;
        }

        squares[j].startX += squares[j].dx;
        squares[j].startY += squares[j].dy;
    }
},120);

