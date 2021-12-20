class game {
  constructor() {
    this.name = prompt('Tên bạn là gì?')
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = SCREEN_WIDTH;
    this.canvas.height = SCREEN_HEIGHT;
    document.body.appendChild(this.canvas);
    this.snake = new snake(this);
    this.food = new food(this);
    this.bg = new bg(this);
    this.screen = new screenx(this);
    this.score = 0;
    this.loop();
  }

  loop() {
    this.update();
    this.draw();
    this.showScore();
    this.showPos();
    setTimeout(() => this.loop(), 20);
  }

  update() {
    this.food.update()
    this.snake.update();
    this.bg.update();
    this.screen.update();
  }

  clearScreen() {
    // this.ctx.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT)
    this.ctx.fillStyle = '#f2f2f2';
    this.ctx.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
  }

  showScore() {
    this.ctx.fillStyle = "#000";
    this.ctx.font = "20px Verdana";
    if (this.name !== '') this.ctx.fillText(this.name + " score : " + this.score, 50, 50);
    else this.ctx.fillText("Score : " + this.score, 50, 50);
  }

  showPos() {
    this.ctx.fillStyle = "#000";
    this.ctx.font = "20px Verdana";
    this.ctx.fillText("X: " + Math.floor(this.snake.x) + " , Y: " + Math.floor(this.snake.y), 50, 80);
  } 

  increaseScore() {
    this.score++
  }

  draw() {
    this.clearScreen();
    this.bg.draw();
    this.food.draw()
    this.snake.draw();
  }
}

var g = new game();