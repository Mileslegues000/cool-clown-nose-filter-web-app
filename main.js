
nose_X= 0;
nose_Y= 0;

function preload(){
    clown_nose= loadImage('https://i.postimg.cc/0yRmbfmF/580b57fbd9996e24bc43bed5.png');
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,300,300);
    /*fill("green");
    stroke("green");
    circle(nose_X,nose_Y,20);*/
    image(clown_nose,nose_X-10,nose_Y-10,20,20);
}

function take_snapshot(){
    save('it.png');
}

function modelLoaded(){
    console.log("poseNet model is initialized");
}

function gotPoses(results) {
    if(results.length>0){
        console.log(results);
        nose_X=results[0].pose.nose.x;
        nose_Y=results[0].pose.nose.y;
        console.log("noseX= "+nose_X);
        console.log("noseY= "+nose_Y);
    }
}

