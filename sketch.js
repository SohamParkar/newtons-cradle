
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint =  Matter.Constraint
// const Body = Matter.Body;

var engine, world

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	roof =  new Roof(300,100,400,20)
	
	bob1 = new Bob(200,400,20);
	bob2 = new Bob(250,400,20);
	bob3 = new Bob(300,400,20);
	bob4 = new Bob(350,400,20);
	bob5 = new Bob(400,400,20);

	rope1 = new Rope(bob1.body, roof.body, -100,0);
	rope2 = new Rope(bob2.body, roof.body, -50,0);
	rope3 = new Rope(bob3.body, roof.body, 0,0);
	rope4 = new Rope(bob4.body, roof.body, 50,0);
	rope5 = new Rope(bob5.body, roof.body, 100,0);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("white");
  
  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
    	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
  	}
}



