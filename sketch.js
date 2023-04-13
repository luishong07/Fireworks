let fireworks =[]
let gravity

function setup() {
	createCanvas(windowWidth, windowHeight);
	gravity = createVector(0,0.2)
}

function draw() {
	background('black')
	stroke(255)
	strokeWeight(4)
	// stroke('white')
	if(random(1) < 0.1){
		fireworks.push(new Firework())

	}
	for(let i = 0; i < fireworks.length; i++){
		fireworks[i].update()
		fireworks[i].show()
	}
	
}
