video = "";

object = [];

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

function gotResults(error, results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
    object = results;
}

function draw()
{
    image(video, 0, 0, 430, 380);

if(status != "")
{
    objectDetector.detect(video, gotResults);
for ( i = 0; i < object.length; i++) {
    document.getElementById("status").innerHTML = "Status : Object Detected";
    document.getElementById("numberOfObjects").innerHTML = "Number Of Objects Detected = " + object.length;
    fill("#FF0000");
    percent = floor(object[i].confidence * 100);
    text(object[i].label + " " + percent + "%", object[i].x + 15, object[i].y + 15);
    noFill();
    stroke("#FF0000");
    rect(object[i].x - 10, object[i].y, object[i].width, object[i].height);
}
}
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