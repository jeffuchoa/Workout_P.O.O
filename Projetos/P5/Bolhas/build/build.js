var ColorHelper = (function () {
    function ColorHelper() {
    }
    ColorHelper.getColorVector = function (c) {
        return createVector(red(c), green(c), blue(c));
    };
    ColorHelper.rainbowColorBase = function () {
        return [
            color('red'),
            color('orange'),
            color('yellow'),
            color('green'),
            color(38, 58, 150),
            color('indigo'),
            color('violet')
        ];
    };
    ColorHelper.getColorsArray = function (total, baseColorArray) {
        var _this = this;
        if (baseColorArray === void 0) { baseColorArray = null; }
        if (baseColorArray == null) {
            baseColorArray = ColorHelper.rainbowColorBase();
        }
        var rainbowColors = baseColorArray.map(function (x) { return _this.getColorVector(x); });
        ;
        var colours = new Array();
        for (var i = 0; i < total; i++) {
            var colorPosition = i / total;
            var scaledColorPosition = colorPosition * (rainbowColors.length - 1);
            var colorIndex = Math.floor(scaledColorPosition);
            var colorPercentage = scaledColorPosition - colorIndex;
            var nameColor = this.getColorByPercentage(rainbowColors[colorIndex], rainbowColors[colorIndex + 1], colorPercentage);
            colours.push(color(nameColor.x, nameColor.y, nameColor.z));
        }
        return colours;
    };
    ColorHelper.getColorByPercentage = function (firstColor, secondColor, percentage) {
        var firstColorCopy = firstColor.copy();
        var secondColorCopy = secondColor.copy();
        var deltaColor = secondColorCopy.sub(firstColorCopy);
        var scaledDeltaColor = deltaColor.mult(percentage);
        return firstColorCopy.add(scaledDeltaColor);
    };
    return ColorHelper;
}());
var PolygonHelper = (function () {
    function PolygonHelper() {
    }
    PolygonHelper.draw = function (numberOfSides, width) {
        push();
        var angle = TWO_PI / numberOfSides;
        var radius = width / 2;
        beginShape();
        for (var a = 0; a < TWO_PI; a += angle) {
            var sx = cos(a) * radius;
            var sy = sin(a) * radius;
            vertex(sx, sy);
        }
        endShape(CLOSE);
        pop();
    };
    return PolygonHelper;
}());
var bubble_img;
var font;
var back;
var game;
var hit = 0;
var fase = ["bolha", "abelha", "paralelepipedo", "amidalou"];
var x_fase = 0;
var x_letra = 0;
var times = [3800, 4000, 4200];
var cor = "";
var alinha = [225, 250, 570];
var cont = 0;
function imagem(path) {
    return loadImage(path);
}
function preload() {
    bubble_img = imagem('../sketch/bolha.gif');
    font = loadFont('../sketch/fip.otf');
    back = imagem('../sketch/back4.gif');
}
var Bubble = (function () {
    function Bubble(x, y, letra, velo, image) {
        this.vivo = true;
        this.x = x;
        this.y = y;
        this.letra = letra;
        this.velo = velo;
        this.image = image;
    }
    Bubble.prototype.update = function () {
        this.y += this.velo;
    };
    Bubble.prototype.draw = function () {
        image(this.image, this.x, this.y, 60, 60);
        fill(225, 225, 225);
        stroke(0);
        textSize(25);
        text(this.letra, this.x + 15, this.y + 40);
    };
    Bubble.radius = 20;
    return Bubble;
}());
var Board = (function () {
    function Board() {
        this.bubbles = [];
        this.timeout = 30;
        this.timer = 0;
        this.beto = [];
        this.hits = 0;
        this.erro = 0;
    }
    Board.prototype.update = function () {
        this.checkbolha();
        this.markBubble();
        this.time();
        for (var _i = 0, _a = this.bubbles; _i < _a.length; _i++) {
            var bubble = _a[_i];
            bubble.update();
        }
        this.bubblePop();
    };
    Board.prototype.bubblePop = function () {
        this.bubbles = this.bubbles.filter(function (b) { return b.vivo; });
    };
    Board.prototype.removeHit = function (code) {
        for (var _i = 0, _a = this.bubbles; _i < _a.length; _i++) {
            var bubble = _a[_i];
            if (bubble.letra[0].toUpperCase().charCodeAt(0) == code && bubble.letra[0] == fase[x_fase][x_letra]) {
                hit += 1;
                cor += fase[x_fase][x_letra];
                x_letra += 1;
                if (hit == fase[x_fase].length) {
                    cont = cont + 1;
                    x_fase = x_fase + 1;
                    cor = "";
                    x_letra = 0;
                    hit = 0;
                }
                bubble.vivo = false;
                break;
            }
        }
    };
    Board.prototype.checkbolha = function () {
        this.timer -= 1;
        if (this.timer <= 0) {
            this.addBubble();
            this.timer = this.timeout;
        }
    };
    Board.prototype.addBubble = function () {
        var x = random(0, width - 2 * Bubble.radius);
        var y = -2 * Bubble.radius;
        var letter = ["bolha?wmisbolhazj", "abelha?!qwertabelhakjhgf", "paralelepipedozxparalelepipedorrroaskok"];
        var velo = random(1, 3);
        var bubble = new Bubble(x, y, letter[x_fase][int(random(letter[x_fase].length))], velo, bubble_img);
        this.bubbles.push(bubble);
    };
    Board.prototype.markBubble = function () {
        for (var _i = 0, _a = this.bubbles; _i < _a.length; _i++) {
            var bubble = _a[_i];
            if (bubble.y + 2 * Bubble.radius >= height) {
                bubble.vivo = false;
            }
        }
    };
    Board.prototype.time = function () {
        var timiout = 0;
        if (times[x_fase] >= 0) {
            times[x_fase] -= 1;
        }
        return times[x_fase];
    };
    Board.prototype.draw = function () {
        fill(225, 225, 225);
        textSize(40);
        textFont(font);
        text('Tempo  ' + int((times[x_fase] / 30)), (windowWidth / 2) - 150, windowHeight - (windowHeight - 50));
        fill(128, 128, 128);
        textSize(100);
        text(fase[x_fase], (windowWidth / 2) - alinha[cont], windowHeight);
        fill(65, 105, 225);
        text(cor, (windowWidth / 2) - alinha[cont], windowHeight);
        for (var _i = 0, _a = this.bubbles; _i < _a.length; _i++) {
            var bubble = _a[_i];
            bubble.draw();
        }
    };
    return Board;
}());
var Game = (function () {
    function Game() {
        this.board = new Board();
        this.activeFunction = this.gamePlay;
    }
    Game.prototype.update = function () {
        this.board.update();
    };
    Game.prototype.draw = function () {
        background(0, 0, 0);
        this.board.draw;
    };
    Game.prototype.gamePlay = function () {
        this.board.update();
        background(back);
        this.board.draw();
        if (times[x_fase] <= 0) {
            this.activeFunction = this.gameOver;
        }
        else if (x_fase == 3) {
            this.activeFunction = this.winer;
            x_fase = 0;
        }
    };
    Game.prototype.restart = function () {
        times = [3800, 4000, 4200];
        x_letra = 0;
        x_fase = 0;
        cor = "";
        hit = 0;
        cont = 0;
    };
    Game.prototype.winer = function () {
        fill(int(random(0, 255)), int(random(0, 255)), int(random(0, 255)));
        textSize(150);
        textFont(font);
        text("Parabéns!", windowWidth / 2 - 590, windowHeight / 2);
        fill(int(random(0, 255)), int(random(0, 255)), int(random(0, 255)));
        text(":)", windowWidth / 2 - 100, windowHeight / 2 + 300);
        textSize(28);
        text("Aperte a barra de espaço para reiniciar o jogo,campeão", windowWidth / 2 - 590, (windowHeight / 2) + 400);
        if (keyCode == 32) {
            this.activeFunction = this.gamePlay;
            this.restart();
        }
    };
    Game.prototype.gameOver = function () {
        background(255, 0, 0);
        fill(0);
        textSize(100);
        text("Game Over", (windowWidth / 2) - 400, (windowHeight / 2) - 260);
        fill(0);
        textSize(200);
        text(":c", (windowWidth / 2) - 100, (windowHeight / 2) + 50);
        fill(0);
        textSize(28);
        text("Que triste", (windowWidth / 2) - 55, (windowHeight / 2) + 200);
        text("Aperte a barra de espaço para reiniciar o jogo", (windowWidth / 2) - 450, (windowHeight / 2) + 400);
        if (keyCode == 32) {
            this.activeFunction = this.gamePlay;
            this.restart();
        }
    };
    return Game;
}());
function setup() {
    frameRate(30);
    var b = createCanvas(windowWidth, windowHeight);
    game = new Game();
}
function keyPressed() {
    game.board.removeHit(keyCode);
}
function draw() {
    background(color(0, 0, 0));
    game.update();
    game.activeFunction();
}
//# sourceMappingURL=build.js.map