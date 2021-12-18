// var game = null
var base = function(game) {
    this.game = game;
    this.image = null;
    this.loaded = false;
    var self = this;
    this.x = 0;

    this.init = function() {
        this.loadImage();
    }

    this.loadImage = async function() {
        this.image = new Image();
        this.image.onload = await function() {
            self.loaded = true;
            // console.log('image loaded')
        }
        this.image.src = '/images/base.png'
    }

    this.update = function() {
        this.x -= 2;
        if (this.x == -336) this.x = 0
    }

    this.draw = function() {
        if (this.loaded == false) return;
        this.game.context.drawImage(this.image, this.x, 430);
        this.game.context.drawImage(this.image, this.x + 336, 430);
    }
}