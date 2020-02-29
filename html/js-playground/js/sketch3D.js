//requires p5.js

let angle = 0; //for the sinus
let w = 50; //width of each line
let rotation = 15;

//creates the canvas
function setup() {
    //3d canvas with webgl rendering
    createCanvas(400, 400, WEBGL);
}

//draws in the created canvas
function draw() {
    background(0x26, 0x32, 0x38);
    translate(0,25,-50);
    rectMode(CENTER);

    rotateX(angle);

    //draws each rectangles according to the sin(a) with an offset
    let offset = 0;
    for (let x = 0; x < width; x += w) {
        push();
        let a = angle + offset;
        let h = map(sin(a), -1, 1, 0, 100);
        fill(0x00, 0x96, 0x88);
        translate(x - width / 2 + w / 2, 0, 0);
        // box(w);
        //cool options
        // box((2+sin(a))*7); //whoop whoop
        box(sin(a)*(w-5));
        offset += 0.05;
        pop();
    }

    angle += 0.05;
}