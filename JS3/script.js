/*Please run html file and wait 5 seconds,
 square of elements check in console*/

"use strict"
const canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

class Figure {
    constructor() {
        this.startX = 0;
        this.startY = 0;
        this.dx = this.setDX();
        this.dy = this.setDY();
        this.color = this.setColor();
    }

    setColor() {
        let item = (Math.random() * 10).toFixed(0);
        const colors = ["#CC0000", "#13598b", "#33CC00", "#990099", "#FF0066", "#660033", "#33FF99", "#6600FF", "#99FF33", "#0033CC"];
        return colors[item];
    }

    setDX() {
        let random = Math.random() * 10 + 10;
        return random;
    }

    setDY() {
        let random = Math.random() * 5 + 20;
        return random;
    }
}

class Circle extends Figure{
    constructor() {
        super();
        this.radius = Math.random() * 20 + 10;
        this.square = this.circleArea();
    }

    circleArea() {
        let square = (Math.PI * Math.pow(this.radius, 2)).toFixed(0);
        console.log("Circle area is " + square + " pixels².");
    }
}

class Square extends Figure{
    constructor() {
        super();
        this.length = Math.random() * 40 + 10;
        this.square = this.squareArea();
    }

    squareArea() {
        let square = (Math.PI * Math.pow(this.length, 2)).toFixed(0);
        console.log("Square area is " + square + " pixels².");
    }
}

const circles = [];
const squares = [];

let createCircle = setInterval(function () {
    if (circles.length === 10) {
        clearInterval(createCircle);
    }

    let circle = new Circle();
    circles.push(circle);
}, 5000);

let createSquares = setInterval(function () {
    if (squares.length === 10) {
        clearInterval(createSquares);
    }

    let square = new Square();
    squares.reverse().push(square);
}, 7000);

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
        if (circles[i].startX - circles[i].radius < 0 &&
            circles[i].dx < 0) {
            circles[i].dx = -circles[i].dx;
        }

        if (circles[i].startX + circles[i].radius > canvas.width &&
            circles[i].dx > 0) {
            circles[i].dx = -circles[i].dx;
        }

        if (circles[i].startY - circles[i].radius < 0 &&
            circles[i].dy < 0) {
            circles[i].dy = -circles[i].dy;
        }

        if (circles[i].startY + circles[i].radius > canvas.height &&
            circles[i].dy > 0) {
            circles[i].dy = -circles[i].dy;
        }

        circles[i].startX += circles[i].dx;
        circles[i].startY += circles[i].dy;
    }

    for (let j = 0; j <= squares.length - 1; j++) {
        drawSquare(squares[j]);

        if (squares[j].startX < 0 && squares[j].dx < 0) {
            squares[j].dx = -squares[j].dx;
        }

        if (squares[j].startX + squares[j].length > canvas.width &&
            squares[j].dx > 0) {
            squares[j].dx = -squares[j].dx;
        }

        if (squares[j].startY < 0 &&
            squares[j].dy < 0) {
            squares[j].dy = -squares[j].dy;
        }

        if (squares[j].startY + squares[j].length > canvas.height &&
            squares[j].dy > 0) {
            squares[j].dy = -squares[j].dy;
        }

        squares[j].startX += squares[j].dx;
        squares[j].startY += squares[j].dy;
    }
},120);
