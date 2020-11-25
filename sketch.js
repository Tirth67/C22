const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground,ball;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic : true
  }

  var ballOptions = {
    restitution : 1
  }

  ground = Bodies.rectangle(200,395,400,50,options);
  ball = Bodies.circle(200, 200, 30, ballOptions)
  World.add(world,ground);
  World.add(world,ball);

  console.log (ground)


}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  ellipseMode (RADIUS);
  fill ("blue")
 

 
  rect (ground.position.x,ground.position.y,400,10);

  fill ("purple")
  ellipse (ball.position.x,ball.position.y, 30, 30)
  
 
}