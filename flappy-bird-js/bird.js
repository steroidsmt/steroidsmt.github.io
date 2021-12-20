// var game = null
var bird = function(game) {
    this.game = game;
    this.images = [];
    this.loaded = false;
    this.img1Loaded = false;
    this.img2Loaded = false;
    this.img3Loaded = false;
    this.currentImage = null;
    this.currentImageIndex = 0;
    this.currentFrame = 0
    this.liftwings = -1;
    var self = this;
    this.x = 80;
    this.y = 256;
    this.speedY = 0;
    this.acceletation = 0.7;
    var scor = new Audio();
    scor.src = "/flappy-bird-js/sounds/score.mp3";

    var hit = new Audio();
    hit.src = "/flappy-bird-js/sounds/hit.wav";

    this.init = function() {
        this.loadImages()
    }

    this.loadImages = async function() {
        var img1 = new Image();
        var img2 = new Image();
        var img3 = new Image();
        img1.onload = await function() {
            self.img1Loaded = true;
            self.currentImage = img1
            self.images.push(img1);
        }
        img2.onload = await function() {
            self.img2Loaded = true;
            self.images.push(img2);
        }
        img3.onload = await function() {
            self.img3Loaded = true;
            self.images.push(img3);
        }
        
        // load all images
        img1.src = '/flappy-bird-js/images/bird1.png';
        img2.src = '/flappy-bird-js/images/bird2.png';
        img3.src = '/flappy-bird-js/images/bird3.png';
    }

    this.update = function() {
        // if (!this.img1Loaded && !this.img2Loaded & !this.img3Loaded) return;
        // this.currentFrame++

        // // liftwings
        // if (this.currentFrame % 5 == 0) this.currentImage = this.images[this.changeImageIndex()]
        
        // this.speedY += this.acceletation;
        // // console.log('speedY', this.speedY)

        // this.checkHitGround()
        
        // this.checkHitPipe()

        // this.y += this.speedY; 
    }
    
    this.reset = function() {
        this.x = 80;
        this.y = 256;
        this.speedY = 0;
    }

    this.flap = function() {
        // console.log('flapping')
        this.speedY = -10
    }

    this.checkHitPipe = function() {
        for (var i = 0; i < self.game.pipe.pipes.length; i++) {
            if (
                (
                    this.x + 34 > self.game.pipe.pipes[i].x &&   
                    this.x < self.game.pipe.pipes[i].x + self.game.pipe.pipeWidth
                ) &&
                (
                    this.y < self.game.pipe.pipes[i].y - self.game.pipe.gap ||
                    this.y + 24 > self.game.pipe.pipes[i].y
                )
            ) {
                hit.play()
                self.game.gameOver = true;
                self.game.gameOverCheck()
            } 
            else {
                // Get score
                if (this.x == self.game.pipe.pipes[i].x + 52) {
                    scor.play()
                    console.log('Score:', self.game.score++)
                }
            }
        }
    }

    this.checkHitGround = function() {
        if (this.y >= 400 || this.y <= 0) {
            this.y = 400
            hit.muted
            hit.play()
            self.game.gameOver = true;
            self.game.gameOverCheck()
        }       
    }
    
    this.changeImageIndex = function() {
        // console.log('liftwings', this.liftwings)
        if (this.liftwings == -1) {
            // console.log('currentImageIndex', this.currentImageIndex)
            if (this.currentImageIndex == 2) {
                this.liftwings = -this.liftwings
                this.currentImageIndex--
                return this.currentImageIndex
            }
            this.currentImageIndex++
            return this.currentImageIndex;
        } else {
            // console.log('currentImageIndex', this.currentImageIndex)
            if (this.currentImageIndex == 0) {
                this.liftwings = -this.liftwings
                this.currentImageIndex++
                return this.currentImageIndex
            }
            this.currentImageIndex--
            return this.currentImageIndex;
        }
    }

    this.draw = function() {
        if (!this.img1Loaded && !this.img2Loaded & !this.img3Loaded) return;
        this.currentFrame++

        // liftwings
        if (this.currentFrame % 5 == 0) this.currentImage = this.images[this.changeImageIndex()]
        
        // console.log('bird draw')
        this.speedY += this.acceletation;
        this.y += this.speedY; 

        if (self.img1Loaded && self.img2Loaded & self.img3Loaded) {
            self.game.context.drawImage(self.currentImage, this.x, this.y)
        }
        
        // console.log(this.checkHitGround(), this.y)
        this.checkHitGround()
        this.checkHitPipe()

        
        
    }
}