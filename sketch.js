var bird;
var pipes;
var score;
var end;
var speed;
var distance;
var level;
function setup() {
	createCanvas(500, 600);
	score = 0;
	speed = 5;
	end = false;
	distance = 220;
	level = 1;


	bird = new Bird();
	pipes = [];

	pipes.push(new Pipe());
	pipes.push(new Pipe());
	pipes.push(new Pipe());
	pipes.push(new Pipe());
	pipes[1].x += distance;
	pipes[2].x += 2 * distance;
	pipes[3].x += 3 * distance;

}

function draw() {
	background(51);

  	bird.show();
  	bird.update();

  	if (bird.y > height) 
  		end = true;

  	for (i = 0; i < pipes.length; i++) {
  		pipes[i].show();
  		pipes[i].update(speed);

  		if (pipes[i].hits(bird)) {
  			end = true;
  		}
  		score += pipes[i].passed(bird);
  	}

  	if (end) {
  		textAlign(CENTER);
		textSize(32);
		fill(0, 102, 153);
		text("Game Over \n score: " + score, width / 2, height / 2);
		fill(255);
		textSize(12);
		textAlign(LEFT);
		noLoop();
  	}	

  	if ( pipes.length && pipes[0].offscreen()) {
  		tempx = pipes[0].x;
  		pipes.shift();

  		pipes.push(new Pipe());
  		pipes[pipes.length-1].x += 4 * distance - width + tempx;
  	}

  	// Score, Level
  	textSize(12);
  	text("score: " + score, 10, 30);
  	if (score / 10 == level) {
  		level += 1;
  		speed += 0.25;
  		console.log(level);
  		console.log(speed);
  	}
  	

}

function keyPressed() {
	if (key === ' ') {
    	bird.jump();
	} else if (keyCode  == ENTER) {
		reset();
		loop();
	}
}

function reset() {
	score = 0;
	speed = 5;
	end = false;
	distance = 220;
	level = 1;


	bird = new Bird();
	pipes = [];

	pipes.push(new Pipe());
	pipes.push(new Pipe());
	pipes.push(new Pipe());
	pipes.push(new Pipe());
	pipes[1].x += distance;
	pipes[2].x += 2 * distance;
	pipes[3].x += 3 * distance;
}
