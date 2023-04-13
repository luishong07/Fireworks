class Particle{
    constructor(x,y,firework){
        this.firework = firework
        this.pos = createVector(x,y)
        this.lifespan = 255
        if(this.firework){
            this.vel = createVector(0,random(-15,-10))
        }else{
            this.vel = p5.Vector.random2D()
            this.vel.mult(random(2,6))
        }
        // this.vel = createVector(0,random(-15,-10))

        this.acc = createVector(0,0)
    }


    applyForce(force){

        this.acc.add(force)
    }

    update(){
        if(!this.firework){
            this.vel.mult(0.85)
            this.lifespan -= 4
        }
        this.vel.add(this.acc)
        this.pos.add(this.vel)
        this.acc.mult(0)
    }

    done(){
        if(this.lifespan < 0){
            return true
        }else{
            return false
        }

    }

    show(){
        if(!this.firework){
            strokeWeight(2)
            stroke(255,this.lifespan)
            
        }else{
            strokeWeight(2)
            stroke(255)
        }
        point(this.pos.x, this.pos.y)
    }
}