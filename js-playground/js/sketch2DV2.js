//requires p5.js
let colorAngleB =0;
let colorAngleR =120;
let colorAngleG =240;
let angle = 0; //for the sinus
let angle2 = 0; //for modulation
let w = 24; //width of each line

//creates the canvas
function setup() {
    createCanvas(1000, 400);
}

//draws in the created canvas
function draw() {
    background(0x26, 0x32, 0x38);
    //puts the origin in the center
    translate(width / 2, height / 2);
    //makes the x y coordinates of a rectangle in its center
    rectMode(CENTER);

    //draws each rectangles according to the sin(a) with ans offset
    let offset = 0;
    for (let x = 0; x < width; x += w) {
        let a = angle + offset;
        let h = map(sin(a)*sin(angle2), -1, 1, 20, 400);
        fill(255*(sin(colorAngleR)*sin(colorAngleR)), 255*(sin(colorAngleG)*sin(colorAngleG)), 255*(sin(colorAngleB)*sin(colorAngleB)));
        strokeWeight(0.01);
        rect(x - width / 2 + w / 2, 0, w - 2, h);
        offset += 0.05;
        // offset += 41561961.0; //valeur a benj
    }

    angle += 0.05;
    angle2+=0.01;
    colorAngleR+=0.01;
    colorAngleG+=0.01;
    colorAngleB+=0.01;


}
