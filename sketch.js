
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	
	var ball_option={
		restitution:03,
		friction:0,
		density:1.2,
	}
	
	Matter.Bodies.
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  
  drawSprites();
 
}



