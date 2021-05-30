const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score = 0;
var particle,q,w;
var count = 5;
var gameState = "Play";
var d1,d2,d3,d4,d5,d6,d7,d8,d9,d10;

function setup() {
  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;

   // creating ground
   ground = new Ground(width/2,height,width,20);

   // creating division
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
   }

   // craeting plinkos
   //row 1
    for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }

    // row 2
    for (var j = 25; j <=width; j=j+50) {
    plinkos.push(new Plinko(j,175));
    }

    //row 3
     for (var j = 50; j <=width; j=j+50){
       plinkos.push(new Plinko(j,275));
    }

    // row 4
     for (var j = 40; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,375));
    }

    Engine.run(engine);
}
 
function draw() {
  background("black");

  Engine.update(engine);

  // displaying score and no. of chanches left
  textSize(20)
  fill(255);
  text("Score : "+score,20,30);
  text("Chance Left : "+count,620,30);

  if(gameState === "Play"){

       q = Math.round(random(1,10));
       w = 50*q;

  // displaying ground
  ground.display();

  // displaying divisions
  for (var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }
 
  // displaying plinkos
   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
   }   

   // increasing score by 500
   if(particle !== null && particle !== undefined){
    particle.display();

    if(particle.body.position.y>760){

      if(particle.body.position.x>0 && particle.body.position.x<800){
        score = score+w;
        particle=null;
      }}}

    // ending the game
    if(count===0 && particle=== null){
      gameState = "End";
    }

  }

  if(gameState === "End"){

    // displaying Game Over
    textSize(55);
    fill("yellow");
    text("Game Over",260,300);
   
}

}

// creating particles on clicking
function mousePressed(){

  if(gameState === "Play"){
    particle = new Particle(mouseX,10,10,10)
    count = count - 1;
  }

}