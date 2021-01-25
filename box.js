class Box{
    constructor(x,y,width,height) {
        var options = {
           // isStatic: true,
            restitution:0.8,
            density:0.5
        
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
        
       // Matter.Body.setAngle(this.body, angle);
      }
     
      display(){
        var angle = angle;
        var pos =this.body.position;
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER);
        fill("blue");
        rect(0, 0, this.width, this.height);
        pop()
      }
  }