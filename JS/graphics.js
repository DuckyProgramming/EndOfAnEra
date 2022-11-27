function setupGraphics(){
	angleMode(DEGREES)
	textAlign(CENTER,CENTER)
	rectMode(CENTER)
	colorMode(RGB,255,255,255,1)
	graphics.main=createGraphics(900,600)
	setupLayer(graphics.main)
	graphics.backgrounds=[]
	for(let a=0;a<10;a++){
		graphics.backgrounds.push(createGraphics(1800,1200))
		setupLayer(graphics.backgrounds[a])
	}
	graphics.backgrounds[0].background(0)
	graphics.backgrounds[0].fill(255)
	for(let a=0;a<9;a++){
		for(let b=0;b<3;b++){
			graphics.backgrounds[0].ellipse(random(0,100)+a*100,(pow(1.3,a*3+b+3+2)*40)%600,2,2);
		}
	}
}