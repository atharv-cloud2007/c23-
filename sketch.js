const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

  
    

    ground = new Ground(200,380,400,40)
    box = new Box(200,200,50,50)
    box2 = new Box(220,100,60,60)
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display()
    fill("yellow")
    box.display()
    fill("blue")
    box2.display()
}
