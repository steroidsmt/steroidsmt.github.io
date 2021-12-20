// var game = null
var bg = function(game) {
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
        this.image.src = '/flappy-bird-js/images/bg.png'
    }

    this.update = function() {
        this.x--;
        if (this.x == -288) this.x = 0
    }

    this.draw = function() {
        if (this.loaded == false) return;
        this.game.context.drawImage(this.image, this.x, 0);
        this.game.context.drawImage(this.image, this.x + 288, 0);
    }
}