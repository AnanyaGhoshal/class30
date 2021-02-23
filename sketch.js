const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, ground2;
var box1, box2, box3, box4, box5, box6, box7,box8, box9, box10;
var box11, box12, box13, box14, box15, box16;
var polygon, slingshot;

//var gameState = "onSling"


function setup(){

    createCanvas(1200,600);

   engine = Engine.create();
   world = engine.world;

   ground1 = new Ground(450,500,300,10);
   ground2 = new Ground(800,400,300,10);

   box1 = new Box(385,468);
   box2 = new Box(435,468);
   box3 = new Box(480,468);
   box4 = new Box(535,468);
   box5 = new Box(395,413);
   box6 = new Box(450,413);
   box7 = new Box(505,413);
   box8 = new Box(420,358);
   box9 = new Box(475,358);
   box10 = new Box(445,303);

   box11 = new Box(735,368);
   box12 = new Box(790,368);
   box13 = new Box(845,368);
   box14 = new Box(760,313);
   box15 = new Box(815,313);
   box16 = new Box(785,258);

   polygon = new Polygon(100,200);

   slingshot = new Slingshot(polygon.body,{x:200,y:200});

}

function draw(){

    Engine.update(engine);

    background(0);
    textSize(20);
    text("Drag the Polygon to destroy the blocks", 100,50);
    textSize(10);
    text("Press Space to get a second chance to Play!!", 950,550);
    ground1.display();
    ground2.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display(); 
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    polygon.display();
    slingshot.display();

}


function mouseDragged(){

    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
  
  }
  
  function mouseReleased(){
  
    slingshot.fly();
    
  }
  
  function keyPressed(){

    if(keyCode===32){
      
      Matter.Body.setPosition(polygon.body,{x:200,y:200});

      slingshot.attach(polygon.body);
    }
  }