var game = function () {
    this.canvas = null;
    this.context = null;
    this.width = 288;
    this.height = 512;
    var self = this;
    this.bird = null
    this.bg = null;
    this.base = null;
    this.pipe = null;
    this.gameOver = false;
    this.gameOverBannerWidth = 192;
    this.gameOverBannerHeight = 42;
    this.score = 1;
    this.test = 1
    var imageGameOver = new Image();
    imageGameOver.src = '/images/gameover.png'

    // audio files
    var fly = new Audio();
    fly.src = "/sounds/fly.mp3";


    this.init = function () {
        console.log('hello world')
        this.canvas = document.createElement('canvas');
        this.canvas.id = 'canvas';
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.context = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas)

        // create new bird
        this.bird = new bird(this)
        this.bird.init();

        // create background
        this.bg = new bg(this);
        this.bg.init();

        // create base
        this.base = new base(this);
        this.base.init();

        // create pipe
        this.pipe = new pipe(this);
        this.pipe.init();

        // listen event

        document.addEventListener('keyup', event => {
            if (event.code === 'Space') {
                self.flapping()
            }
        })

        this.canvas.addEventListener('click', function(){
            self.flapping()
        })

        this.loop()
    }  

    this.gameOverCheck = function() {
        if (self.gameOver == true) {
            console.log('game over')
            self.context.drawImage(imageGameOver, self.width/2 - self.gameOverBannerWidth/2 , self.height/2 - self.gameOverBannerHeight/2);
            return true
        }
        return false
    }

    this.flapping = function() {
        if (self.gameOver == true) {
            self.resetGame()
            return
        }
        self.bird.flap();
        fly.play()
    }

    this.showScore = function() {
        this.context.fillStyle = "#000";
        this.context.font = "20px Verdana";
        this.context.fillText("Score : "+this.score, 10, 25);
    }

    this.resetGame = function() {
        this.bird.reset();
        this.pipe.reset();
        this.score = 1
        this.gameOver = false;
        this.loop()
    }

    this.loop = function() {
        if (self.gameOver == true) return false
        self.update();
        self.draw();
        self.showScore()
        setTimeout(self.loop, 30);
    }

    this.update = function() {
        // if (self.gameOver == true) return;
        // console.log('update')
        this.bg.update();
        this.pipe.update();
        this.base.update();
        this.bird.update();
    }

    this.draw = function() {
        // if (self.gameOver == true) return;
        // console.log('draw')
        this.bg.draw();
        this.pipe.draw();
        this.base.draw();
        this.bird.draw();

    }


}
var g = new game();
g.init()