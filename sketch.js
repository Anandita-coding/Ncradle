
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var bob1,bob2,bob3,bob4,bob5
var startPosX,startPosY;
var bobDi = 40

function setup() {
	canvas = createCanvas(windowWidth/2,windowHeight/1.5)
	engine = Engine.create();
  world = engine.world;
  
let canvasmouse = Mouse.create(canvas.elt)
canvasmouse.pixelRatio = pixelDensity();
let options = {
  mouse: canvasmouse
}
mconstraint = MouseConstraint(engine, options)
World.add(world, mConstraint)


	//Create the Bodies Here.
   roof = new Roof(width/2,height/8,665,20)
   startPosX =width/2
   startPosY = 75+180

   bob1 = new Bob(startPosX-bobDi*2,startPosY,bobDi)
   bob2 = new Bob(startPosX-bobDi,startPosY,bobDi)
   bob3 = new Bob(startPosX,startPosY,bobDi)
   bob4 = new Bob(startPosX+bobDi,startPosY,bobDi)
   bob5 = new Bob(startPosX+bobDi*2,startPosY,bobDi)

   rope1 = new Rope(bob1.body,roof.body,-bobDi*2,0)
   rope2 = new Rope(bob2.body,roof.body,-bobDi,0)
   rope3 = new Rope(bob3.body,roof.body,0,0)
   rope4 = new Rope(bob4.body,roof.body,+bobDi,0)
   rope5 = new Rope(bob5.body,roof.body,+bobDi*2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background("lightPink");

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  drawSprites();
}

function mouseDragged(){
   
  Matter.Body.setPosition(bob1.body, {x: mouseX, y: mouseY})
  
  }

