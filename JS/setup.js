function setup(){
	createCanvas(windowWidth-50,windowHeight-50)
	setupGraphics()
	generateWorld(graphics.main,levels[game.level][game.zone])

	edit=new editor(graphics.main)
}
function windowResized(){
	resizeCanvas(windowWidth-50,windowHeight-50)
}