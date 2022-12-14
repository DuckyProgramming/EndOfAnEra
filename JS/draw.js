function draw(){
	clear()
	background(125)
	graphics.main.clear()
	graphics.main.push()
	switch(stage.scene){
		case 'level':
			switch(stage.background){
				case 0:
					/*colorbank
						sky
							gradient
								top 18,74,167
								bottom 53,177,229
							cloud 239,250,252
						tree
							flower
								1 125,85,147
								2 134,117,187
								3 238,205,227
							branch 77,42,48
					*/
					graphics.main.background(50)
					//graphics.main.image(graphics.backgrounds[0],(-stage.focus.x/2)%1600,0)
					//graphics.main.image(graphics.backgrounds[0],(-stage.focus.x/2)%1600+1600,0)
				break
			}
			graphics.main.translate(-stage.focus.x,-stage.focus.y)
			graphics.main.scale(stage.focus.size*stage.quality)
			graphics.main.translate(graphics.main.width/2,graphics.main.height/2)
			for(let a=0,la=run.fore.length;a<la;a++){
				for(let b=0,lb=run.fore[a].length;b<lb;b++){
					run.fore[a][b].display()
					run.fore[a][b].update()
					if(run.fore[a][b].remove){
						run.fore[a].splice(b,1)
						b--
						lb--
					}
				}
			}
		break
	}
	graphics.main.pop()
	if(dev.editor){
		edit.display()
	}
	stage.scale=min(width/graphics.main.width,height/graphics.main.height)
	displayTransition(graphics.main,transition)
	image(graphics.main,width/2-stage.scale*graphics.main.width/2,height/2-stage.scale*graphics.main.height/2,stage.scale*graphics.main.width,stage.scale*graphics.main.height)
	updateMouse(graphics.main)
}