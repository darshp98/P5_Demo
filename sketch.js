//let button1;
//let slider;
//let bg = 0;

function setup() {
  createCanvas(windowWidth,windowHeight); 
    //(windowWidth,windowHeight) - changes based on webpage size
    
//   button1= createButton('My Button!');
//        button1.position(50,50); //windowWidth/2 - stays center of window despite page size
//    
//    //css using js
//    button1.style('backgroundColor', '#FF0000'); //hex code red, could also 'rgb(0,0,0)' 'rgba(0,0,0,.5)' changes transparancey 'hsb(0,0,0,.5)'
//    button1.style('width', '100px');
//    button1.style('height', '100px');
//    button1.style('borderRadius', '10px');
//    button1.style('fontSize', '24px');
//    button1.style('fontWeight', 'bold');
//    
//    //button not part of sketch, so need to use internal mousePressed function
//    button1.mousePressed(bgChange); //can pass function as variable , when button pressed, calls that function
//    //mouseOver
    
//   slider= createSlider(0,255,150);
//    
//    slider.position(width/2 - slider.width/2,height/2- slider.height/2); //based on left corner of slider
    
}

function draw() {
//  background(bg);
//    
//    bg = slider.value();
//    
//    ellipse(bg,50,25);
    background(220);
        rect(50,100,50,50);
    
    ellipse(width/2,height/2,50);
    
}

function windowResized () {
    resizeCanvas(windowWidth,windowHeight); //resizes page to everchanging windowsize
}

//function bgChange () {
//    
//    bg=color(random(255),random(255), random(255));
//}