class Ball{
    constructor(x,y,r) {
      var options = {
        restitution: 0.8,
        friction: 0.3,
        density: 1.0
      }
      this.body = Bodies.circle(x,y,r,options);
      this.width = r;
      this.height = r;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("green");
      ellipse(this.body.position.x,this.body.position.y,this.width,this.height);
     
      
    }
  };