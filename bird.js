function Bird() {
	this.x = width / 4;
	this.y = height / 2;

	this.velocity = 0;
	this.gravity = 0.5;
	this.lift = 9;

	this.show = function() {
		fill(255);
		ellipse(this.x, this.y, 20, 20);
	}

	this.update = function() {
		this.y += this.velocity;
		this.velocity += this.gravity;

		if (this.y < 0) { 
			this.y = 0;
			this.velocity = 0;
		}

		// if (this.y > height) { this.reset();}
	}

	this.reset = function() {
		this.y = height / 4;
			this.velocity = 0;
	}

	this.jump = function() {
		this.velocity = - this.lift;
	}
}