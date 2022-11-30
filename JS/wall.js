class wall extends physical{
	constructor(layer,x,y,type,width,height){
		super(layer,x,y,type,width,height)
		this.collide=[entities.players]
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
		for(let a=0,la=this.collide.length;a<la;a++){
            for(let b=0,lb=this.collide[a].length;b<lb;b++){
                if(boxInsideBox(this,this.collide[a][b])&&this.collide[a][b].timers[1]<=0){
                    if(boxCollideBox(this,this.collide[a][b])==0){
                        this.collide[a][b].position.y=this.position.y+this.height/2+this.collide[a][b].height/2
                        this.collide[a][b].velocity.y=0
                    }
                    else if(boxCollideBox(this,this.collide[a][b])==1){
                        this.collide[a][b].position.y=this.position.y-this.height/2-this.collide[a][b].height/2
                        this.collide[a][b].velocity.y=0
                        this.collide[a][b].velocity.x*=physics.friction
                        this.collide[a][b].timers[0]=5
                    }
                    else if(boxCollideBox(this,this.collide[a][b])==2){
                        this.collide[a][b].position.x=this.position.x+this.width/2+this.collide[a][b].width/2
                        this.collide[a][b].velocity.x=0
                        this.collide[a][b].velocity.y*=physics.friction
                    }
                    else if(boxCollideBox(this,this.collide[a][b])==3){
                        this.collide[a][b].position.x=this.position.x-this.width/2-this.collide[a][b].width/2
                        this.collide[a][b].velocity.x=0
                        this.collide[a][b].velocity.y*=physics.friction
                    }
                }
            }
        }
	}
}