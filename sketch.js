//for creating PE 
var World = Matter.World;   //namespacing
var Engine = Matter.Engine;
var Bodies = Matter.Bodies;
var engine,world;
var ground,ball ;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();     //create our engine
  world=engine.world;        //added world in engine
  opt={isStatic:true}        //fix the obj
ground= Bodies.rectangle(200,390,200,20,opt) ;
  World.add(world,ground);
  ballopt={restitution:1}
 ball=Bodies.circle(200,100,20,ballopt);
  World.add(world,ball);
 console.log(ground.position.x);
  console.log(ground.position.y);
  Engine.run(engine);
 
}

function draw() {
  background(0,0,0);  
  rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,50);
ellipseMode(CENTER);
ellipse(ball.position.x,ball.position.y,20)

}


















