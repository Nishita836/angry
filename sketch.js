const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(500,height,1000,20)
    box1 = new Box(700,320);
    box2 = new Box(900,320);
    pig1 = new Pig(800,320)
    log1 = new Log(800,260,280,PI/2)

    box3 = new Box(700,250);
    box4 = new Box(900,250);
    pig2 = new Pig(800,250)
    log2 = new Log(800,260,280,PI/2)
   
}

function draw(){
    background(0);
    Engine.update(engine);
    
    box1.display();
    box2.display();
    ground.display();
    pig1.display()
    log1.display()
}