var angle = 0;
var offset = 150;
//how much to scale up from sin:
//this makes the wave bigger or smaller
var scalar = 100;
var speed = 0.01;
var redValue=0;
var blueValue=0;
var greenValue=0;

var cnv;


function setup() {
    cnv = createCanvas(windowWidth, 600);
    cnv.position(0, 0);
    cnv.style("z-index", -1);
    
    noFill();
    background(255); 
}

function draw() {
    
   // var redValue=0;
//var blueValue=0;
//var greenValue=0;
var color = random(800);
    
    var y1 = offset + sin(angle) * scalar;
    var y2 = offset + sin(angle + 1.0) * scalar;
    var y3 = offset + sin(angle + 0.8) * scalar;
    //(x coordinate, y coordinate, width, height)
    //noStroke();
    // fill(255,204,204,5);//pink
  //  ellipse(mouseX,color, 180, 180);
   // angle += speed;
   
   

    fill(155,43,19,2);//bottom
    noStroke();
    ellipse(mouseX, 600, 600,200);
    
    
     fill(207,69,39,3);//second from bottom
 noStroke();
  ellipse(mouseX,560,600,150); 
   
      fill(244,193,138,2);//third from bottom, random yellow
 noStroke();
  ellipse(mouseX,450,600,90);  
    
    
    fill(255,255,242,10);//third from bottom, another yellow
 noStroke();
  ellipse(mouseX,400,600,90);  
    
        
     
    
     fill(255,255,236,2);//fourth from bottom
 noStroke();
  ellipse(mouseX,450,600,200);  
    
    
 fill(255,255,229,10);//fifth from bottom
 noStroke();
  ellipse(mouseX,330,200,100); 
    

if (mouseIsPressed == false) {
        
    } 
    else {
        
        
        background(255);
       noFill();
        
        
        
    }



}
