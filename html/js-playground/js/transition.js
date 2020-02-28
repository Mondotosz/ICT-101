let numberOfClick = 0;

const run = () => {
    numberOfClick += 1;
    console.log('you clicked : ' + numberOfClick);
    if (numberOfClick >= 500) {
        open("https://google.com");
    }
};
