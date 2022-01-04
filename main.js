video = "";
status = "";

function preload()
{
    video = createVideo('video.mp4');
    video.hide();
}

function setup()
{
    canvas = createCanvas(430,380);
    canvas.center();
}

function draw()
{
    image(video, 0, 0, 430, 380);
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = " Status : Detecting Objects ";
}

function modelLoaded()
{
    console.log("MODEL LOADED!");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}