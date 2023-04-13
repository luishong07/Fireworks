class Particle{
    constructor(x,y,hue,firework){
        this.firework = firework
        this.pos = createVector(x,y)
        this.lifespan = 255
        if(this.firework){
            this.vel = createVector(random(-1,1),random(-20,-15))
        }else{
            this.vel = p5.Vector.random2D()
            this.vel.mult(random(6,10))
        }
        this.acc = createVector(0,0)
        this.hue = hue
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
        colorMode(HSB)
        if(!this.firework){
            strokeWeight(2)
            stroke(this.hue,255,255,this.lifespan)
        }else{
            strokeWeight(2)
            stroke(this.hue,255,255)
        }
        point(this.pos.x, this.pos.y)
    }
}