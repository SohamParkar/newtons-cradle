class Bob{

    constructor(x,y,r){

      var options ={
        isStatic:false,

        restitution:1,



        friction:0.5,

        density:1
      }
        this.body = Bodies.circle(x,y,r,options)
        this.r = r

        World.add(world,this.body)

      

    }

    display(){
      var pos = this.body.position
      push()

      translate(pos.x, pos.y);
      
      fill("green")


      ellipseMode(RADIUS)
      ellipse(0,0,this.r,this.r)
      pop()
    }
}