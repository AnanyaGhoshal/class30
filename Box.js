class Box {
    constructor(x, y) {
      var options = {
        
          'isStatic':false,
          'restitution':0.4
         // 'friction':0.1

      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      this.visiblity = 255;
      
      World.add(world, this.body);
      
    }
    
    display(){

      if(this.body.speed<3){
      var pos =this.body.position;
      var angle = this.body.angle;
      console.log(this.body.speed);
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("deeppink");
      fill("pink");
      rect(0, 0, this.width, this.height);
      pop();
      
      }else{

        World.remove(world,this.body);

        push();
        this.visiblity = this.Visiblity-5;
        pop();


      }
    }
  }