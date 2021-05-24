const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score = 0;
var particle;
var couunt = 0;
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

  // displaying score
  textSize(20)
  text("Score : "+score,20,30);

  // displaying score for each division
  d1 = text("  500  ",10,510);
  d2 = text("  500  ",90,510);
  d3 = text("  500  ",170,510);
  d4 = text("  100  ",250,510);
  d5 = text("  100  ",340,510);
  d6 = text("  100  ",410,510);
  d7 = text("  300  ",490,510);
  d8 = text("  300  ",570,510);
  d9 = text("  300  ",650,510);
  d10 = text("  300",730,510);

  Engine.update(engine);

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
 
   //displaying particles
  for (var j = 0; j < particles.length; j++) {
     particles[j].display();
   }


   if(particle!=null){
    //particle.display();

    if(particle.body.position.y<760){

      if(particle.body.position.x<300){
        score = score+500;
        particle=null;
      }

    }

  }
   
}

// creating particles on clicking
function mousePressed(){

  if(gameState === "Play"){
    particle = particles.push(new Particle(mouseX,10,10,10))
  }
}