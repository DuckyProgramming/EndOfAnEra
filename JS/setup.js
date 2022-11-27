function setup(){
	createCanvas(windowWidth-50,windowHeight-50)
	setupGraphics()
	generateWorld(graphics.main,levels[game.level][game.zone])
}
function windowResized(){
	resizeCanvas(windowWidth-50,windowHeight-50)
}