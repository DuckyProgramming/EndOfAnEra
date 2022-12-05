class partisan extends physical{
	constructor(layer,x,y,type,width,height){
		super(layer,x,y,type,width,height)
		this.trigger={resistance:true,gravity:true}
		this.timers=[0,0]
		this.size=1
	}
	update(){
		super.update()
		if(this.trigger.resistance){
			this.velocity.x*=(1-physics.resistance)
		}
		if(this.trigger.gravity){
			this.velocity.y+=physics.gravity
		}
		for(let a=0,la=this.timers.length;a<la;a++){
			if(this.timers[a]>0){
				this.timers[a]--
			}
		}
	}
}