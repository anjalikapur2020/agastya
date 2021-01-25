const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13;

function setup(){
createCanvas(800,600);
engine = Engine.create();
world = engine.world;

 level = new Groundclass(width/2,500,width,30);
 box1 = new Box(500,450,50,50,PI/2);
 box2 = new Box(550,450,50,50,PI/2);
 box3 = new Box(600,450,50,50,PI/2);
 box4 = new Box(650,450,50,50,PI/2);
 box5 = new Box(525,400,50,50,PI/2);
 box6 = new Box(575,400,50,50,PI/2);
 box7 = new Box(625,400,50,50,PI/2);
 box8 = new Box(550,350,50,50,PI/2);
 box9 = new Box(600,350,50,50,PI/2);
 box10 = new Box(575,300,50,50,PI/2);
 //box11 = new Box(560,240,10,70,PI/2);
 //box12 = new Box(590,240,10,70,PI/2);
 box13 = new Box(575,190,50,50,PI/2);

 hexa = new Birdclass(100,450,60);

 slingshot = new SlingShot(hexa.body,{x:50 , y:450});


}

function draw(){

    background(0);
Engine.update(engine)
    level.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    //box11.display();
    //box12.display();
    box13.display();

    hexa.display();

    slingshot.display();

    //drawSprites();
}

function mouseDragged(){
        Matter.Body.setPosition(hexa.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}