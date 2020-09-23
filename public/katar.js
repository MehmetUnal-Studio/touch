

let r ;
let g ;
let b ;
let y ;



function setup(){

createCanvas(innerWidth, innerHeight);
background(239,240,241)
frameRate(60);

r = random (0 , 255);
g = random (0 , 255);
b = random (0 , 255);


socket = io.connect('http://localhost:3000')
socket.on('mouse' , newDrawing);

// y = socket.ids;

// console.log(y);

// if (y == 0 ){
//     y = random (0 , 255)
// }
}




function newDrawing(data){

    fill(200, 250,18)
    stroke(58, 61, 75)
    ellipse(data.x, data.y, 60, 60)
}


function mouseDragged(){
    console.log('sending: ' + mouseX + ',' + mouseY);


    var data = {
        x : mouseX,
        y : mouseY
    }

    socket.emit ('mouse' , data);

    fill(159, 156, 155)
    stroke(58, 61, 75)
    ellipse(mouseX, mouseY, 60, 60)


}




function draw(){
}
