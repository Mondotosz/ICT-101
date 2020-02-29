//requires p5.js

let angle = 0; //for the sinus
let w = 24; //width of each line

//creates the canvas
function setup() {
    createCanvas(400, 400);
}

//draws in the created canvas
function draw() {
    background(0x26, 0x32, 0x38);
    //puts the origin in the center
    translate(width / 2, height / 2);
    //makes the x y coordinates of a rectangle in its center
    rectMode(CENTER);

    //draws each rectangles according to the sin(a) with an offset
    let offset = 0;
    for (let x = 0; x < width; x += w) {
        let a = angle + offset;
        let h = map(sin(a), -1, 1, 0, 100);
        fill(0x00, 0x96, 0x88);
        strokeWeight(0.1);
        rect(x - width / 2 + w / 2, 0, w - 2, h);
        offset += 0.1;
    }

    angle += 0.05;
}