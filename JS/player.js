class player extends partisan{
    constructor(layer,x,y){
        super(layer,x,y,0,20,20)
        this.movement={speed:0.5,jump:10}
    }
    display(){
        this.layer.translate(this.position.x,this.position.y)
        this.layer.noStroke()
        this.layer.fill(255,this.fade)
        this.layer.ellipse(0,0,20,20)
        this.layer.translate(-this.position.x,-this.position.y)
    }
    update(){
        super.update()
        if(inputs.keys[0][0]||inputs.keys[1][0]){
            this.velocity.x-=this.movement.speed
        }
        if(inputs.keys[0][1]||inputs.keys[1][1]){
            this.velocity.x+=this.movement.speed
        }
        if((inputs.keys[0][2]||inputs.keys[1][2])&&this.timers[0]>0){
            this.timers[0]=0
            this.velocity.y=-this.movement.jump
            this.timers[1]=1
        }
        stage.focus.x=this.position.x
        stage.focus.y=this.position.y
    }
}