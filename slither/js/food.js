class food {
  constructor(game) {
    this.game = game;
    this.foods = [];
    this.createFoods();
  }

  createFoods() {
    for (let i = 1; i < NUMBER_OF_FOODS; i++) {
      this.foods.push({ x: this.getRandomInRange(0, GAME_WIDTH, 0), y: this.getRandomInRange(0, 5000, 0) })
    }
  }

  getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    // .toFixed() returns string, so ' * 1' is a trick to convert to number
  }

  checkEaten(foodPos, snakePos) {
    var length = Math.sqrt((foodPos.x - snakePos.x) * (foodPos.x - snakePos.x) + (foodPos.y - snakePos.y) * (foodPos.y - snakePos.y))
    if (length <= HEAD_SIZE + FOOD_SIZE) return true
    else return false
  }


  update() {
    var self = this
    this.foods.forEach(function (item, index, object) {
      if (self.checkEaten(item, { x: self.game.snake.x, y: self.game.snake.y })) {
        object.splice(index, 1);
        self.game.snake.increaseTail();
        self.game.increaseScore();
      }
    });
  }

  draw() {
    for (let i = 0; i < this.foods.length; i++) {
      this.game.screen.drawCricle({
        x: this.foods[i].x,
        y: this.foods[i].y
      }, 'foods')
    }
  }
}