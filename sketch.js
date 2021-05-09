
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var score = 0

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(600,380,1200,20);
	block1 = new Block(900,180,40,40)
	block2 = new Block(880, 180,40,40)
	block3 = new Block(920,180,40,40)
	block4 = new Block(890,160,40,40)
	block5 = new Block(910, 160,40,40)
	block6 = new Block(900,140,40,40)
	stand = new Stand(900,190,250,20)
	polygon = new Polygon(30,20,50,50)
	sling = new Slingshot(polygon.body,{x:170,y:20})

	
	//Create the Bodies Here.

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(120);
  fill("white")
  text("SCORE:"+score, 750,40)
  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block1.Score();
  block2.Score();
  block3.Score();
  block4.Score();
  block5.Score();
  block6.Score();
  polygon.display();
  stand.display();
  sling.display()
  drawSprites();
	
}
function mouseDragged(){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    sling.fly()
}
function keyPressed(){
  if(keyCode === 32){
      sling.attach(polygon.body);
  }
}


