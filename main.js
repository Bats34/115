nose_x=0;
nose_y=0;
function preload() {
clown_nose= loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");

}
function setup() {
    canvas=createCanvas(650, 500);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(650,500);
    video.hide();
PoseNet=ml5.poseNet(video, modelLoaded);
PoseNet.on('pose',GotPoses);
}
function modelLoaded() {
    console.log("Model has been loaded");

}
function GotPoses(results){
    if(results.length>0) {
        console.log(results);
        nose_x=results[0].pose.nose.x-30;
        nose_y=results[0].pose.nose.y+130;
    }
}
function draw() {
    image(video,0,100,650,500);
    image(clown_nose,nose_x,nose_y,70,45,);
}

function take_snapshot() {
   save("I_am_a_clown.png");
}