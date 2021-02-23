const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var groundObj;
var block1,block2,block3,block4,block5, 

function setup(){
var canvas = createCanvas(1200,400);
engine = Engine.create();
world = engine.world;
groundObj=new Ground(200,150,40,10)
block1=new Block(330,235,30,40);
block2=new Block(360,235,30,40);
block3=new Block(390,235,30,40);
block4=new Block(420,235,30,40);
block6=new Block(450,235,30,40);
block7=new Block(450,235,30,40);
block8=new Block(450,235,30,40);
block9=new Block(480,235,30,40);
block10=new Block(510,235,30,40);
block11=new Block(540,235,30,40);
block12=new Block(580,235,30,40);
block13=new Block(610,235,30,40);
block14=new Block(640,235,30,40);
block15=new Block(680,235,30,40);
block16=new Block(710,235,30,40);
}

function draw(){
   
    Engine.update(engine);
    groundObj.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block16.display();
  
}
