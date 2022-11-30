class physical extends entity{
	constructor(layer,x,y,type,width,height){
		super(layer,x,y,type,0)
		this.previous={position:{x:0,y:0}}
		this.width=width
		this.height=height
	}
	update(){
		this.previous.position.x=this.position.x
		this.previous.position.y=this.position.y
		super.update()
	}
}