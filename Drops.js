class Drops {
    constructor(x, y){
        var options = {
            restitution: 0.8,
            friction : 1,
            density : 0.2
        }
        this.rain = Bodies.circle(x,y,10,options);
        World.add(world, this.rain);
    }

    update(){
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
        }
    }

    display(){
		var pos = this.rain.position;	
        push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			fill("darkblue");
			ellipse(0,0,10,10);
		pop()
    }
}