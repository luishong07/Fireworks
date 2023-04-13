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
		// fireworks.shift()
	}
	for(let i = fireworks.length-1; i >= 0 ; i--){
		fireworks[i].update()
		fireworks[i].show()
		if(fireworks[i].done()){
			fireworks.splice(i,1)
		}
	}
	console.log(fireworks.length)
	
}
