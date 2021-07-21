leftwristx = 0;
rightwristx = 0;
difference = 0;
function preload(){}

function setup(){
    canvas = createCanvas(350,300);
    video = createCapture(VIDEO);
    video.size(600,300);
    canvas.position(600,200);

    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotresults);
}

function modelloaded(){
    console.log("modelloaded");
}

function gotresults(results){
    if(results.length > 0){
        console.log(results);
        leftwristx = results[0].pose.leftWrist.x;
        rightwristx = results[0].pose.rightWrist.x;
        difference = floor(leftwristx - rightwristx)
    }
}

function draw(){
    background("grey");
    document.getElementById("width").innerHTML = "font-size of the text is="+ difference;
    text("arnav", 50, 100);
    textSize(difference);
}