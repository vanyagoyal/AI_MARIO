function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	webcam = createCapture(VIDEO);
	webcam.size(800,400);
	webcam.parent('console');
	console.log("Game loaded!");
	poseNet = ml5.poseNet(webcam , modelLoaded);
	poseNet.on('pose' , gotPoses);
}

function draw() {
	game()
}

function moveUp() {
	window.scrollTo(5 , 5);
}

function modelLoaded(){
	console.log("PoseNet Model Loaded!!");
}

function gotPoses(result){
	if (result.length > 0){
		console.log(result);
		noseX = result[0].pose.nose.x;
		noseY = result[0].pose.nose.y;
	}
}