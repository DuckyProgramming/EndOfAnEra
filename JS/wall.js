class wall extends physical{
	constructor(layer,x,y,type,width,height){
		super(layer,x,y,type,width,height)
	}
	display(){
		this.layer.translate(this.position.x,this.position.y)
		this.layer.noStroke()
		switch(this.type){
			case 1:
				this.layer.fill(200,this.fade)
				this.layer.rect(0,0,this.width,this.height)
			break
		}
		this.layer.translate(-this.position.x,-this.position.y)
	}
	update(){
		super.update()
	}
}