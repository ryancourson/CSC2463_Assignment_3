let character;
let character2;


function preload(){
  spriteSheet = loadImage("SpelunkyGuy.png");
  spriteSheet2 = loadImage("Green.png");
  spriteSheet3 = loadImage("char3.png");
}

function setup() {
  createCanvas(windowHeight,windowWidth);
  imageMode(CENTER);

  character = new Character(spriteSheet, 100, 100);
  character2 = new Character(spriteSheet2, 200, 300);
  character3 = new Character(spriteSheet3, 300, 500);

}

function keyPressed(){

  if(keyCode == RIGHT_ARROW){
    character.go(1);
    character2.go(1);
    character3.go(1);
  }

  else if(keyCode == LEFT_ARROW){
    character.go(-1);
    character2.go(-1);
    character3.go(-1);
  }

}

function keyReleased(){
  character.stop();
  character2.stop();
  character3.stop();
}

function draw(){

  background(255,255,255);
  
  character.draw();
  character2.draw();
  character3.draw();

  
  
}



class Character{

  constructor(spriteSheet, x, y){
    this.spriteSheet = spriteSheet;
    this.sx = 0;
    this.x = x
    this.y = y;
    this.walkingSpeed = 2;
    this.move = 0;
    this.playerDirection = 1;
    this.spriteSize = 80;
  }

  draw(){

    push();
    translate(this.x, this.y);
    

    scale(this.playerDirection, 1);

    if(this.move == 0){
      image(this.spriteSheet, 0, 0, 200, 200, 0, 0, this.spriteSize, this.spriteSize);
    }

    else{
      image(this.spriteSheet, 0, 0, 200, 200, this.spriteSize * (this.sx + 1), 0, this.spriteSize, this.spriteSize);
    
    }

    

    if(frameCount % 5 == 0){
      this.sx = (this.sx + 1) % 8;
    }
    

    
    this.x += this.walkingSpeed * this.move;

    pop();
    }

    

    go(direction){
      this.move = direction;
      this.playerDirection = direction;
      this.sx = 3;
    }

    stop(){
      this.move = 0;
    }


}
