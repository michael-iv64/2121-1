// https://habr.com/ru/post/184666/
let resources = {};

resources.load([
    'img/sprites.png',
    'img/terrain.png'
]);
function Sprite(url, pos, size, speed, frames, dir, once) {
    this.pos = pos;
    this.size = size;
    this.speed = typeof speed === 'number' ? speed : 0;
    this.frames = frames;
    this._index = 0;
    this.url = url;
    this.dir = dir || 'horizontal';
    this.once = once;
};

// Это конструктор класса Sprite. Он принимает достаточно много аргументов, но не все из них являются обязательными. Рассмотрим каждый из них:
// url: путь к изображению
// pos: x и y координаты изображения на спрайт карте
// size: размеры (только одного кадры)
// speed: скорость анимации в фрейм/с
// frames: массив индексов фреймов в порядке анимации
// dir: в каком направлении двигаться по спрайт карте: 'horizontal (по-умолчанию) или 'vertical'
// once:true, если необходимо отобразить только один цикл анимации, false — по-умолчанию

// Аргумент frames, наверное, нуждается дополнительных объяснениях. Подразумевается, что все кадры анимации имеют один размер (это размер передан выше). Во время анимации, система просто «проходит» по спрайт карте по горизонтали или вертикали (в зависимости от значения dir) начиная с позиции pos c с приращением по оси x или y на значение size. Вам необходимо определить frames, для того, чтобы описать как необходимо проходить по кадрам анимации. Значение [0, 1, 2, 3, 2, 1] фреймы будет проходить от начала до конца и обратно к началу.
// Только url, pos, size являются обязательными, так как Вам может и не понадобиться анимация.
// Каждый Sprite объект имеет метод update, для обновления анимации, и аргументом у него является дельта времени, также как и в нашем глобальном update. Каждый спрайт должен быть обновлён для каждого фрейма.
Sprite.prototype.update = function(dt) {
    this._index += this.speed*dt;
}

// Каждый объект Sprite так же имеет метод render для отрисовки себя. В нем находится основная логика анимации. Он следит за тем, какой кадр должен быть отрисован, рассчитывает его координаты на спрайт карте, и вызывает ctx.drawImage для отрисовки кадра.
Sprite.prototype.render = function(ctx) {
    var frame;

    if(this.speed > 0) {
        var max = this.frames.length;
        var idx = Math.floor(this._index);
        frame = this.frames[idx % max];

        if(this.once && idx >= max) {
            this.done = true;
            return;
        }
    }
    else {
        frame = 0;
    }


    var x = this.pos[0];
    var y = this.pos[1];

    if(this.dir == 'vertical') {
        y += frame * this.size[1];
    }
    else {
        x += frame * this.size[0];
    }

    ctx.drawImage(resources.get(this.url),
                  x, y,
                  this.size[0], this.size[1],
                  0, 0,
                  this.size[0], this.size[1]);
}

// Мы используем 3-ю форм drawImage, которая позволяет нам указать размер спрайта, смещении и направлении раздельно.