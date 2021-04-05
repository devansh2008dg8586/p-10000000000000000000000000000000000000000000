
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

 var boyImg,treeImg;
var stone;
var mango1,mango2,mango3,mango4,mango5,mango6;
var slingShot;
function preload()
{
 boyImg= loadImage("boy.png");
  treeImg=loadImage("tree.jpg");
}

function setup() {
createCanvas(1500, 700);
engine = Engine.create();
world = engine.world;

var tree=createSprite(1000,450,20,20);
tree.addImage(treeImg)
tree.scale="0.4";


var boy=createSprite(300,600,90,120);
boy.addImage(boyImg);
boy.scale="0.7"

stone=new Stone(210,500,50);
mango1=new Mango(900,300,50);
mango2=new Mango(950,400,50);
mango3=new Mango(1100,400,60)
mango4=new Mango(1000,350,60);
mango5=new Mango(1150,350,75);
mango6=new Mango(980,250,50)
slingShot=new SlingShot(stone.body,{x:220,y:500})
Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("white");

 

  drawSprites();
  stone.display();
  mango1.display();
  mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
slingShot.display();
detectollision(stone,mango1);
detectollision(stone,mango2);
detectollision(stone,mango3);
detectollision(stone,mango4);
detectollision(stone,mango5);
detectollision(stone,mango6);

}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
 slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
    Matter.body.setPosition(stone.body,{x:210,y:550});
    slingShot.attach(stone.body);
  }
}
function detectollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
if(distance<=100){
  Matter.Body.setStatic(lmango.body,false);
  console.log(distance)
}
} 