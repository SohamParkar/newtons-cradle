class Rope{

    constructor(bodyA, bodyB, offsetX, offsetY){

        this.offsetX = offsetX


        this.offsetY = offsetY

        var options = {

            bodyA: bodyA,

            bodyB: bodyB,


            pointB:{x:this.offsetX, y: this.offsetY}
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){
        var poiA = this.rope.bodyA.position;
        var poiB = this.rope.bodyB.position;

        strokeWeight(4);

        line(poiA.x, poiA.y, poiB.x+this.offsetX, poiB.y+this.offsetY);
    }
    
}