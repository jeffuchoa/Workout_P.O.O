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
var uni_img;
var mano_img;
var board_img;
var uni2_img;
var bite_img;
var power_img;
var god_img;
var pow_img;
var uni;
var mano;
var board;
var bite;
var god;
var ponto = 0;
var ti = 1;
var attack = false;
var Entity = (function () {
    function Entity(x, y, step, image) {
        this.x = x;
        this.y = y;
        this.step = step;
        this.image = image;
    }
    Entity.prototype.draw = function () {
        image(this.image, this.x * this.step, this.y * this.step, this.step, this.step);
    };
    return Entity;
}());
var good = (function () {
    function good(image) {
        this.image = image;
    }
    good.prototype.draw = function () {
        image(this.image, 170, 150, 250, 200);
    };
    return good;
}());
var Board = (function () {
    function Board(nl, nc, step, background) {
        this.nl = nl;
        this.nc = nc;
        this.step = step;
        this.background = background;
    }
    Board.prototype.draw = function () {
        image(this.background, 0, 0, this.nc * this.step, this.nl * this.step);
        for (var x = 0; x < this.nc; x++) {
            for (var y = 0; y < this.nl; y++) {
                noFill();
                stroke(0);
                strokeWeight(2);
                rect(x * this.step, y * this.step, this.step, this.step);
            }
        }
    };
    return Board;
}());
function imagem(path) {
    return loadImage(path);
}
function preload() {
    uni_img = imagem('../sketch/uni2.gif');
    uni2_img = imagem('../sketch/uni3.gif');
    mano_img = imagem('../sketch/mano.gif');
    board_img = imagem('../sketch/grama.png');
    bite_img = imagem('../sketch/bite.gif');
    power_img = imagem('../sketch/pode.gif');
    god_img = imagem('../sketch/god.gif');
    pow_img = imagem('../sketch/ded.gif');
}
function setup() {
    var size = 100;
    uni = new Entity(0, 0, size, uni_img);
    mano = new Entity(int(random(4)), int(random(5)), size, mano_img);
    bite = new Entity(mano.x, mano.y, size, bite_img);
    board = new Board(5, 6, size, board_img);
    god = new good(god_img);
    setInterval(time, 10000);
    var canvas = createCanvas(board.nc * size, board.nl * size);
    canvas.center();
}
var co = 0;
var co1 = 0;
function uni_walk() {
    if (uni.x - mano.x == -1 || uni.x - mano.x == 1 || uni.y - mano.y == -1 || uni.y - mano.y == 1) {
        co = uni.x;
        co1 = uni.y;
    }
    if (uni.x == mano.x && uni.y == mano.y) {
        uni.x = co;
        uni.y = co1;
    }
    if (uni.x == board.nc) {
        uni.x = board.nc - 1;
    }
    if (uni.y == board.nl) {
        uni.y = board.nl - 1;
    }
    if (uni.x < 0) {
        uni.x = 0;
    }
    if (uni.y < 0) {
        uni.y = 0;
    }
}
function time() {
    var i = 0;
    i++;
    if (i >= 10) {
        return true;
    }
}
function draw() {
    background(0);
    if (ponto > 10) {
        bite.image = power_img;
    }
    if (ponto >= 39) {
        bite.image = pow_img;
    }
    uni_walk();
    board.draw();
    if (ponto < 39) {
        uni.draw();
    }
    if (ponto >= 39) {
        god.draw();
    }
    mano.draw();
    textSize(200);
    text(ponto, 200, 200);
    if (attack == true) {
        bite.draw();
        if (frameCount % 60 == 0 && ti > 0) {
            ti--;
        }
        if (ti == 0) {
            attack = false;
        }
    }
    ti = 1;
}
function keyPressed() {
    if (ponto < 39) {
        if (uni.x - mano.x == -1 && uni.y - mano.y == 0 || uni.x - mano.x == 1 && uni.y - mano.y == 0 || uni.y - mano.y == -1 && uni.x - mano.x == 0 || uni.y - mano.y == 1 && uni.x - mano.x == 0) {
            if (keyCode === 32) {
                ponto = ponto + 1;
                bite.x = mano.x;
                bite.y = mano.y;
                mano.x = int(random(4));
                mano.y = int(random(5));
                attack = true;
            }
            if (uni.x == mano.x && uni.y == mano.y) {
                if (keyCode === 32) {
                    ponto = ponto + 1;
                    bite.x = mano.x;
                    bite.y = mano.y;
                    mano.x = int(random(4));
                    mano.y = int(random(5));
                    attack = true;
                }
            }
        }
        if (keyCode === LEFT_ARROW) {
            uni.x--;
            uni.image = uni2_img;
        }
        if (keyCode === RIGHT_ARROW) {
            uni.x++;
            uni.image = uni_img;
        }
        if (keyCode === UP_ARROW) {
            uni.y--;
        }
        if (keyCode === DOWN_ARROW) {
            uni.y++;
        }
    }
    if (ponto >= 39) {
        if (keyCode === 32) {
            ponto = ponto + 1;
            bite.x = mano.x;
            bite.y = mano.y;
            mano.x = int(random(4));
            mano.y = int(random(5));
            attack = true;
        }
    }
}
//# sourceMappingURL=build.js.map