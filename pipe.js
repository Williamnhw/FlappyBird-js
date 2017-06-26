function Pipe() {
	this.x = width;
	this.w = 10
	this.position = Math.random() * (height - 150);
	this.range = 150;
	this.pass = false;
	
	this.show = function() {
		rect(this.x, 0, this.w, this.position);
		rect(this.x, this.position + this.range, this.w, (height - (this.position + this.range)))
	}

	this.update = function(speed) {
		this.x -= speed;
	}

	this.offscreen = function() {
		return (this.x < -this.w);
	}

	this.hits = function(bird) {
		if (bird.x >= this.x && bird.x <= this.x + this.w) {
			if (bird.y - 3 < this.position || bird.y + 3 > this.position + this.range) {
				// console.log("hit");
				return true;
			}
			else {
				// console.log("pass");
				return false;
			}
		}
	}


	this.passed = function(bird) {
		if (!this.pass && bird.x > this.x + this.w) {
			this.pass = true;
			return 1;
		} else {
			return 0;
		}
	}


}