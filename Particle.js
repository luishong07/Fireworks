class Particle{
    constructor(x,y,firework){
        this.pos = createVector(x,y)
        if(firework){
            this.vel = createVector(0,random(-15,-10))
        }else{
            this.vel = p5.Vector.random2D()
        }
        // this.vel = createVector(0,random(-15,-10))

        this.acc = createVector(0,0)
    }


    applyForce(force){
        this.acc.add(force)
    }

    update(){
        this.vel.add(this.acc)
        this.pos.add(this.vel)
        this.acc.mult(0)
    }

    show(){
        point(this.pos.x, this.pos.y)
    }
}