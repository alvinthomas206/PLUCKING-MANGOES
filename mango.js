class mango 
{
    constructor(x,y,r)
    {
        var options=
        {
            isStatic:true,
         
            friction:.05
        }
        this.body=Bodies.circle(x,y,r,options)
        this.r=r;
        World.add(world,this.body)

        this.image=loadImage("mango.png")
        
    }

    display()
    {
        var mangopos=this.body.position

        imageMode(CENTER);
        image(this.image,mangopos.x,mangopos.y,50,50);
    }
}
function detectCollision(body1,body2)
{
  body1pos=body1.body.position;
  body2pos=body2.body.position;

  var distance=dist(body1pos.x,body1pos.y,body2pos.x,body2pos.y)
  if(distance<=body2.r+body1.r)
  {
    Matter.Body.setStatic(body2.body,false);
  }
}
