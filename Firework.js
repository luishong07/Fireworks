class Firework {
    constructor() {
        this.firework = new Particle(random(innerWidth), innerHeight,true);
        this.exploded = false;
        this.particles = [];
    }

    update() {
        if (!this.exploded) {
            this.firework.applyForce(gravity);
            this.firework.update();
            if (this.firework.vel.y >= 0) {
                this.exploded = true;
                this.explode();
            }
        }
        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].applyForce(gravity)
            this.particles[i].update()
        }
    }

    explode() {
        for (let i = 0; i < 20; i++) {
            let pos = new Particle(this.firework.pos.x, this.firework.pos.y,false);
            this.particles.push(pos);
        }
    }

    show() {
        if (!this.exploded) {
            this.firework.show();
        }
        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].show()
        }
    }
}
