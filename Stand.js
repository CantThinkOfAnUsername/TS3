class Stand{
    constructor(x,y,w,h){
        this.body=Bodies.rectangle(x,y,w,h,{isStatic:true});
        this.width=w;
        this.height=h;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        fill(255);
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}