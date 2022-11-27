class player extends partisan{
    constructor(layer,x,y){
        super(layer,x,y,0,20,20)
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
        stage.focus.x=this.position.x
        stage.focus.y=this.position.y
    }
}