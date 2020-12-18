class Bob{
    constructor(x,y,r){
        var options = {
            restitution:1,
            friction:0,
            frictionAir: 0.0,
            density:1.2,
            slop:1,
            inertia:Infinity
        }
    this.x=x;
    this.y=y;
    this.r=r;
    this.body = Bodies.circle(this.x,this.y,this.r/2,options)    
    World.add(world,this.body)
    }
    display(){
        var bobPos = this.body.position;
        
        push ()
        translate(bobPos.x,bobPos.y)
        rectMode(CENTER)
        strokeWeight(0.578)
        fill ("skyBlue")
        ellipse(0,0,this.r,this.r)
        pop ()
    }
}