const GAME_WIDTH = 10000;
const GAME_HEIGHT = 10000;

const SCREEN_WIDTH = window.screen.width;
const SCREEN_HEIGHT = window.screen.height;

const BG_STROKE_LINE = '#bcbcc4';
const BG_STROKE_WIDTH = 3;
const BG_COLOR = 'black';
const GRID_SIZE = 80;

const TEXT_COLOR = "#fff";
const TEXT_FONT = '20px Verdana';


const SNAKE_SPEED = 2;
const SNAKE_ACCELERATION = 20;
const SNAKE_HEAD_BORDER_COLOR = 'RED';
const SNAKE_HEAD_COLOR = '#F65A5A';
const SNAKE_BODY_BORDER_COLOR = 'RED';
const SNAKE_BODY_COLOR = '#F65A5A';
const SNAKE_BODY_PATTEN_BORDER_COLOR = 'none';
const SNAKE_BODY_PATTEN_COLOR = '#14f7b4';
const SNAKE_EYES_BORER_COLOR = 'red';
const SNAKE_EYES_COLOR = 'white';
const SNAKE_EYEBALLS_BORDER_COLOR = 'white';
const SNAKE_EYEBALLS_COLOR = 'black';
const SNAKE_SHADOW_BORDER_COLOR = '#b7cc43';
const SNAKE_SHADOW_COLOR = 'rgba(0, 0, 0, 0.2)';

const FOOD_BORDER_COLOR = '#9e43cc';
const FOOD_COLOR = '#9e43cc';


const EYE_DISTANCE = 10;
const EYE_ANGLE = 0.8;
const EYEBALLS_DISTANCE = 3;

const NUMBER_OF_FOODS = 1000;

const HEAD_SIZE = 15;
const BODY_SIZE = 10;
const BODY_PATTEN_SIZE = 5;
const SHADOW_SIZE = 14;
const EYES_SIZE = 5;
const EYEBALS_SIZE = 3;
const FOOD_SIZE = 6;

const BEGIN_NODES = 30 // real node is BEGIN_NODES/NODE_SKIP
const NODE_SKIP = 5

const SNAKE_STYLES = {
  // style for snack
  body: {
    borderColor: SNAKE_BODY_BORDER_COLOR,
    color: SNAKE_BODY_COLOR,
    width: BODY_SIZE
  },
  bodyPatten: {
    borderColor: SNAKE_BODY_PATTEN_BORDER_COLOR,
    color: SNAKE_BODY_PATTEN_COLOR,
    width: BODY_PATTEN_SIZE
  },
  // style head of snack
  head: {
    borderColor: SNAKE_HEAD_BORDER_COLOR,
    color: SNAKE_HEAD_COLOR,
    width: HEAD_SIZE
  },
  // style snake's eyes
  eyes: {
    borderColor: SNAKE_EYES_BORER_COLOR,
    color: SNAKE_EYES_COLOR,
    width: EYES_SIZE
  },
  // style snake's eyeballs
  eyeballs: {
    borderColor: SNAKE_EYEBALLS_BORDER_COLOR,
    color: SNAKE_EYEBALLS_COLOR,
    width: EYEBALS_SIZE
  },
  // style shadow of snake
  shadow: {
    borderColor: SNAKE_SHADOW_BORDER_COLOR,
    color: SNAKE_SHADOW_COLOR,
    width: SHADOW_SIZE
  },
  // style of foods
  foods: {
    borderColor: FOOD_BORDER_COLOR,
    color: FOOD_COLOR,
    width: FOOD_SIZE
  }
}
