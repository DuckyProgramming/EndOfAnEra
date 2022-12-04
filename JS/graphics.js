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
	graphics.minor=[]
	graphics.minor.push(createGraphics(160,160))
	graphics.minor.push(createGraphics(160,160))
	graphics.minor.push(createGraphics(160,240))
	graphics.minor.push(createGraphics(160,160))
	for(let a=0,la=graphics.minor.length;a<la;a++){
		setupLayer(graphics.minor[a])
	}
	graphics.minor[0].noStroke()
	graphics.minor[0].fill(224,181,156)
	graphics.minor[0].ellipse(80,80,120,120)
	graphics.minor[0].fill(204,139,122)
	graphics.minor[0].rect(80,80,120,6)
	graphics.minor[0].quad(24,55,136,55,137,61,23,61)
	graphics.minor[0].quad(24,105,136,105,137,99,23,99)
	graphics.minor[0].quad(41,33,119,33,124,39,36,39)
	graphics.minor[0].quad(41,127,119,127,124,121,36,121)
	graphics.minor[1].stroke(201,61,96)
	graphics.minor[1].strokeWeight(24)
	graphics.minor[1].line(32,50,80,137)
	graphics.minor[1].line(128,50,80,137)
	graphics.minor[1].stroke(233,216,194)
	graphics.minor[1].strokeWeight(8)
	graphics.minor[1].point(80,132)
	graphics.minor[1].point(64,104)
	graphics.minor[1].point(96,104)
	graphics.minor[1].point(48,76)
	graphics.minor[1].point(112,76)
	graphics.minor[1].point(32,48)
	graphics.minor[1].point(128,48)
	graphics.minor[2].translate(80,140)
	graphics.minor[2].scale(0.8)
	graphics.minor[2].noStroke()
	graphics.minor[2].fill(236,130,138)
	for(let a=0;a<5;a++){
		graphics.minor[2].rotate(72)
		graphics.minor[2].beginShape()
		graphics.minor[2].vertex(0,0)
		graphics.minor[2].bezierVertex(-14,-14,-14,-28,0,-42)
		graphics.minor[2].bezierVertex(14,-28,14,-14,0,0)
		graphics.minor[2].endShape()
	}
	graphics.minor[2].fill(213,88,102)
	for(let a=0;a<5;a++){
		graphics.minor[2].rotate(72)
		graphics.minor[2].beginShape()
		graphics.minor[2].vertex(0,0)
		graphics.minor[2].bezierVertex(-7,-10,-7,-20,0,-30)
		graphics.minor[2].bezierVertex(7,-20,7,-10,0,0)
		graphics.minor[2].endShape()
	}
	graphics.minor[2].fill(255,161,161)
	graphics.minor[2].ellipse(0,0,4,4)
	graphics.minor[2].scale(1.25)
	graphics.minor[2].translate(0,-30)
	graphics.minor[2].noStroke()
	graphics.minor[2].fill(226,120,128)
	for(let a=0;a<5;a++){
		graphics.minor[2].rotate(72)
		graphics.minor[2].beginShape()
		graphics.minor[2].vertex(0,0)
		graphics.minor[2].bezierVertex(-14,-14,-14,-28,0,-42)
		graphics.minor[2].bezierVertex(14,-28,14,-14,0,0)
		graphics.minor[2].endShape()
	}
	graphics.minor[2].fill(203,78,92)
	for(let a=0;a<5;a++){
		graphics.minor[2].rotate(72)
		graphics.minor[2].beginShape()
		graphics.minor[2].vertex(0,0)
		graphics.minor[2].bezierVertex(-7,-10,-7,-20,0,-30)
		graphics.minor[2].bezierVertex(7,-20,7,-10,0,0)
		graphics.minor[2].endShape()
	}
	graphics.minor[2].fill(255,151,151)
	graphics.minor[2].ellipse(0,0,4,4)
	graphics.minor[3].translate(80,80)
	graphics.minor[3].noStroke()
	graphics.minor[3].fill(253,233,242)
	for(let a=0;a<5;a++){
		graphics.minor[3].rotate(72)
		graphics.minor[3].beginShape()
		graphics.minor[3].vertex(0,0)
		graphics.minor[3].bezierVertex(-20,-14,-20,-28,0,-42)
		graphics.minor[3].bezierVertex(20,-28,20,-14,0,0)
		graphics.minor[3].endShape()
	}
	graphics.minor[3].fill(252,255,252)
	for(let a=0;a<5;a++){
		graphics.minor[3].rotate(72)
		graphics.minor[3].beginShape()
		graphics.minor[3].vertex(0,0)
		graphics.minor[3].bezierVertex(-10,-10,-10,-20,0,-30)
		graphics.minor[3].bezierVertex(10,-20,10,-10,0,0)
		graphics.minor[3].endShape()
	}
	graphics.minor[3].fill(255,231,238)
	graphics.minor[3].ellipse(0,0,4,4)
}