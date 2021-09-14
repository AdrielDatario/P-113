function preload(){
}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(100, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw(){
    image(video, 0, 0, 640, 480);
    fill(250, 0, 0);
    stroke(255,0,0);
    circle(30, 30, 20);
    circle(30, 450, 20);
    circle(600, 30, 20);
    circle(600, 450, 20);
    fill(0,128,0);
    stroke(0,128,0);
    rect(30, 25, 570, 10);
    rect(25, 25, 10, 430);
    rect(30, 445, 570, 10);
    rect(595, 25, 10, 430);
    tint(tint_color);
}

function take_snapshot(){
    save('Selfpicture.png');
}

function filter_tint(){
    tint_color = document.getElementById("color_name").value;
}