
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(500,400,250,20);
	ground2 = new Ground(900,250,180,20);

	ball = new Ball(100,300,20);


	//stage 1
	box1 = new Box(410,370,30,40);
	box2 = new Box(440,370,30,40);
	box3 = new Box(470,370,30,40);
	box4 = new Box(500,370,30,40);
	box5 = new Box(530,370,30,40);
	box6 = new Box(560,370,30,40);
	box7 = new Box(590,370,30,40);

	//stage 2
	box8 = new Box(440,330,30,40);
	box9 = new Box(470,330,30,40);
	box10 = new Box(500,330,30,40);
	box11 = new Box(530,330,30,40);
	box12 = new Box(560,330,30,40);

	//stage 3
	box13 = new Box(470,290,30,40);
	box14 = new Box(500,290,30,40);
	box15 = new Box(530,290,30,40);

	//stage 4
	box16 = new Box(500,250,30,40);
	
	//sectione 2 stage1
	box17 = new Box(860,220,30,40);
	box18 = new Box(890,220,30,40);
	box19 = new Box(920,220,30,40);
	box20 = new Box(950,220,30,40);

	//stage2
	box21 = new Box(890,180,30,40);
	box22 = new Box(920,180,30,40);

	//stage3
	box23 = new Box(905,140,30,40);

	slingshot = new slingShot(ball.body,{x:100 , y:300});
}

	

function draw() {
Engine.update(engine);
  background(0);

   ground.display();
   ground2.display();
  
   ball.display();
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
   box11.display();
   box12.display();

   box13.display();
   box14.display();
   box15.display();
   
   box16.display(); 

   box17.display(); 
   box18.display(); 
   box19.display(); 
   box20.display();

   box21.display(); 
   box22.display();

   box23.display();

   slingshot.display();  
   
   drawSprites();
}


  function mouseDragged(){

	Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY});
	}
	
	function mouseReleased(){
    
		slingshot.fly()
		
		}

   function keyPressed(){

	if(keyCode === 32){

      slingshot.attach(ball.body);

	}
}