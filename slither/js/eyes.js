class eyes {
  constructor(snake, game) {
    this.snake = snake;
    this.game = game;
  }

  update() {

  }

  draw() {

    // draw eyes
    let eye1Pos = {
      x: this.snake.x + Math.cos(this.snake.angle - EYE_ANGLE) * EYE_DISTANCE,
      y: this.snake.y + Math.sin(this.snake.angle - EYE_ANGLE) * EYE_DISTANCE,
    }

    this.snake.game.screen.drawCricle(eye1Pos, 'eyes');

    let eye2Pos = {
      x: this.snake.x + Math.cos(this.snake.angle + EYE_ANGLE) * EYE_DISTANCE,
      y: this.snake.y + Math.sin(this.snake.angle + EYE_ANGLE) * EYE_DISTANCE,
    }

    this.snake.game.screen.drawCricle(eye2Pos, 'eyes');

    // draw eyeballs
    let eyeBall1Pos = {
      x: eye1Pos.x + Math.cos(this.snake.currentAngle) * EYEBALLS_DISTANCE,
      y: eye1Pos.y + Math.sin(this.snake.currentAngle) * EYEBALLS_DISTANCE,
    }

    this.snake.game.screen.drawCricle(eyeBall1Pos, 'eyeballs');

    let eyeBall2Pos = {
      x: eye2Pos.x +  Math.cos(this.snake.currentAngle) * EYEBALLS_DISTANCE,
      y: eye2Pos.y + Math.sin(this.snake.currentAngle) * EYEBALLS_DISTANCE,
    }

    this.snake.game.screen.drawCricle(eyeBall2Pos, 'eyeballs');



  }

}