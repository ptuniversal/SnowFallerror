const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg,bgIMG;
var snows,snowsIMG, snowsBody;
var girl,girlImg;
var gravity;
var engine, world;

function preload() {
  bgIMG=loadImage("snow2.jpg");
  snowsIMG=loadImage("snow.png");
  girlImg=loadImage("girl.png");
}

function setup() {
  createCanvas(900,470);
  engine = Engine.create();
	world = engine.world;

  bg=createSprite(450, 200, 400, 400);
  bg.addImage("bg",bgIMG);
  bg.scale=0.75;

  girl=createSprite(150,400);
  girl.addImage("girl",girlImg);
  girl.scale=0.3;

  engine = Engine.create();
	world = engine.world;

  snowsBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
  World.add(world, snowsBody);
	
	Engine.run(engine);
  

}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  
  snows.x= snowsBody.position.x 
  snows.y= snowsBody.position.y 

  if(snows.y>525 && snows.y>525){
    Matter.Body.setStatic(snowsBody,true); 
    }

    drawSprites();

  Snow();
  keyPressed();
  
}

function Snow(){
  if(frameCount % 30 === 0) {
  snows=createSprite(400,25,20,20);
  snows.addImage("snow",snowsIMG);
  snows.scale=0.05;
  snows.velocityY=6;
  snows.x=Math.round(random(50,820))
  }
}

//function keyPressed() {

	//if (keyCode === DOWN_ARROW) {
	//	Matter.Body.setStatic(snowsBody,false); 
	//}

	//if (keyCode===LEFT_ARROW) {
	//	snows.x= snows.x-10;
	//}

	//if (keyCode===RIGHT_ARROW) {
	//	snows.x= snows.x+10;
	//}
	
//}