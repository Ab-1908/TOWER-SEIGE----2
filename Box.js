class Box
{
    constructor(x, y, width, height)
    {
        var options = {
            
            restitution: 0.8,
            friction: 0.3,
            density: 1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
        
        this.width = width;
        this.height = height;
        this.Visibilty = 255;
    }
    display()
    {
        console.log(this.body.speed);
        if(this.body < 3){
         
        }
        else
    {
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity -5;
      tint (255, this.Visiblity);
      rect(this.image , this.body.position.x , this.body.position.y);
      pop();


    }
        var pos = this.body.position;
        rectMode (CENTER);
        fill("yellow");
        rect(pos.x, pos.y, this.width, this.height);
        
    }
}