// var game = null
var pipe = function(game) {
    this.game = game;
    this.image = null;
    this.image2 = null;
    this.loaded = false;
    var self = this;
    this.gap = 100;
    this.pipeLenght = 320;
    this.pipeWidth = 52;
    this.pipes = [{x: 270, y: Math.floor(115 + Math.random() * 290)}]
    this.init = function() {
        this.loadImage();
    }

    this.loadImage = async function() {
        this.image = new Image();
        this.image.onload = await function() {
            self.loaded = true;
            // console.log('image loaded')
        }

        this.image2 = new Image();
        this.image2.onload = await function() {
            self.loaded = true;
            // console.log('image loaded')
        }
        this.image.src = '/images/pipe.png'
        this.image2.src = '/images/pipe2.png'

    }

    this.update = function() {
        // this.x -= 2;
        // if (this.x == 150) {

        //     this.x = 280;
        //     this.y = Math.floor(120 + Math.random() * 290);
        // }
        return 
    }

    this.reset = function() {
        this.pipes = [{x: 270, y: Math.floor(115 + Math.random() * 290)}]
    }

    this.draw = function() {
        if (this.loaded == false) return;
        for (let i = 0; i < this.pipes.length; i++ ) {
            this.pipes[i].x -= 2
            if (this.pipes[i].x == 150) {
                let randomDistance = Math.floor(Math.random() * 150);
                if (randomDistance % 2 !== 0) randomDistance++
                this.pipes.push({
                    x: this.game.width + Math.floor(24 + randomDistance),
                    y: Math.floor(115 + Math.random() * 290)
                })
            }
            this.game.context.drawImage(this.image2, this.pipes[i].x, this.pipes[i].y - this.pipeLenght - this.gap);
            this.game.context.drawImage(this.image, this.pipes[i].x, this.pipes[i].y);
        }
    }
}