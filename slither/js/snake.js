class snake {
  constructor(game) {
    this.game = game;
    this.x = GAME_WIDTH / 2;
    this.y = GAME_HEIGHT / 2;
    this.angle = 0;
    this.currentAngle = 0;
    this.tailPositions = new Array(BEGIN_NODES).fill({ x: this.x, y: this.y });
    this.eye = new eyes(this, game)
    this.acceleration = 5;
    this.currentSpeed = SNAKE_SPEED;
    this.currentNodeSkip = NODE_SKIP;
    this.upSpeed = new Audio()
    this.upSpeed.src = '/slither/sounds/up-speed.mp3'
    this.getScore = new Audio()
    this.getScore.src = '/slither/sounds/score.mp3'
    this.listenMouseEvent()
  }

  listenMouseEvent() {
    // change snake direction
    this.game.canvas.addEventListener('mousemove', (event) => {
      let rect = this.game.canvas.getBoundingClientRect();
      setTimeout(() => {
        this.angle = this.processMouseMove({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top
        });
      }, 300);
      this.currentAngle = this.processMouseMove({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      });
    });

    // increase speed when clicking
    this.game.canvas.addEventListener('click', (event) => {
      this.upSpeed.play();
      this.currentSpeed += 5;
    });
  }

  processMouseMove(mousePos) {
    return Math.atan2(
      mousePos.y - (SCREEN_HEIGHT / 2),
      mousePos.x - (SCREEN_WIDTH / 2)
    )
  }

  increaseTail() {
    this.upSpeed.play();
    this.getScore.play();
    var array = new Array(this.currentNodeSkip).fill({ x: this.x, y: this.y })
    this.tailPositions = [...array, ...this.tailPositions]
    this.currentSpeed += SNAKE_ACCELERATION
  }

  update() {
    // update position
    if (this.currentSpeed > SNAKE_SPEED) {
      this.currentSpeed--
      // this.currentNodeSkip = this.currentSpeed
    }
    var lastAngle = this.angle
    let newTailPosision = {
      x: this.x + Math.cos(lastAngle) * this.currentSpeed,
      y: this.y + Math.sin(lastAngle) * this.currentSpeed
    }

    this.tailPositions.unshift(newTailPosision);
    this.tailPositions.pop()
    // console.log('this.tailPositions', this.tailPositions)
    this.x = newTailPosision.x;
    this.y = newTailPosision.y;
  }

  draw() {
    // draw shadow
    for (let i = this.tailPositions.length - 1; i > 1; i--) {
      if (i % this.currentNodeSkip == 0) {
        this.game.screen.drawCricle({
          x: this.tailPositions[i].x,
          y: this.tailPositions[i].y
        }, 'shadow')
      }
    }

    // draw body
    for (let i = this.tailPositions.length - 1; i > 1; i--) {
      if (i % this.currentNodeSkip == 0) {
        //body
        this.game.screen.drawCricle({
          x: this.tailPositions[i].x,
          y: this.tailPositions[i].y
        }, 'body');
        //body
        this.game.screen.drawCricle({
          x: this.tailPositions[i].x,
          y: this.tailPositions[i].y
        }, 'bodyPatten');
      }
    }

    // draw head 
    this.game.screen.drawCricle({
      x: this.x,
      y: this.y
    }, 'head')

    // draw eyes 
    this.eye.draw();

    // this.game.food.update()
  }

}