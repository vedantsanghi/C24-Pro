var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(1270, 800);


	engine = Engine.create();
	world = engine.world;

	Paper = new Ball()
	line1 = new Dustbin(800,720,20,160)
	line2 = new Dustbin(890,770,160,20)
	line3 = new Dustbin(980,720,20,160)
	ground = new ground1(635,790,1270,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  line1.display();
  line2.display();
  line3.display();
  Paper.display();
  ground.display();
  keypress();
  
  drawSprites();
 
}

function keypress(){
	if (keyCode === UP_ARROW ){
		Matter.Body.applyForce(Paper.body,Paper.body.position,{x:15,y:-20})
	}
	if (keyCode === DOWN_ARROW){
		Matter.Body.applyForce(Paper.body,Paper.body.position,{x:2,y:15})
	}
}


