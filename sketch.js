
function preload() {
    //load the images here
    tomImg1 = loadImage("cat1.png");
    tomImg2 = loadImage("cat2.png");
    tomImg3 = loadImage("cat3.png");
    tomImg4 = loadImage("cat4.png");
    mouceImg1 = loadImage("mouse1.png");
    mouceImg2 = loadImage("mouse2.png");
    mouceImg3 = loadImage("mouse3.png");
    mouceImg4 = loadImage("mouse4.png");
    var gardenImg = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    var mouce;
    var mouceImg1,mouceImg2,mouceImg3,mouceImg4;
    var tom; 
    var tomImg1,tomImg2,tomImg3,tomImg4;
    var garden,gardenImg;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    Text(mouceX +";"+mouceY,10,45 );

    keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyDown === LEFT_ARROW){
        tom.velocityx  = -5;
        tom.addImage("Cat2.png",catImg);
        tom. changeImage("cat2.png");
    }

    

}
