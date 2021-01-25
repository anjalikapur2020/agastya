class Birdclass {
  constructor(x,y,r){
   var options ={
     isStatic: true
   }
   this.body = Bodies.circle(x,y,r,options);
   this.x = x;
   this.y = y;
   this.r = r;
   this.image = loadImage("polygon.png");
   World.add(world , this.body);
  }

  display() {
    var pos =this.body.position;
    imageMode(CENTER);
    image(this.image,pos.x, pos.y, this.r, this.r);
    
  }
};
