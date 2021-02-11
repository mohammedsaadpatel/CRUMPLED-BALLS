
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;

function preload(){
	paperImg.loadImage("paper.png") 
}
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	crmBall=createSprite(width/2, 80, 10,10);
	crmBall.addImage(paperImg)
	crmBall.scale=0.2

	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

    crmBall = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:false});
	World.add(world, crmBall);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  
  groundObject.display();
  dustbinObj.display();
  crmBall.display();

}
