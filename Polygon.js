class Polygon{

    constructor(x,y){

        this.image = loadImage("poly.png");
        this.body = Bodies.circle(x,y,20);
        this.radius = 20;
        World.add(world,this.body);

        

    }

    display(){

        var pos =this.body.position;
        var angle = this.body.angle;
        
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        imageMode(CENTER);
        strokeWeight(4);
        image(this.image,0,0, this.radius*3,this.radius*3);        
        pop();

        
    }
}