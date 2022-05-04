function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
}
img="";
function preload(){
    img=loadImage("dog_cat.jpg");
}

function draw(){
   image(img,0,0,640,420);
fill("#42cef5");
text("dog",45,75);
noFill();
stroke("#1bcca6");
rect(30,60,450,350);
}