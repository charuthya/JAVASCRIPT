// function editPhoto(photo, brightness, contrast, saturation) {
//     console.log(`Photo: ${photo}`);
//     console.log(`Brightness: ${brightness}%`);
//     console.log(`Contrast: ${contrast}%`);
//     console.log(`Saturation: ${saturation}%`);
//     console.log("Final edited photo is ready!");
// }

// // Using normal function
// editPhoto("myphoto.jpg", 50, 30, 20);
// editPhoto("myphoto.jpg", 70, 30, 20);
// editPhoto("myphoto.jpg", 70, 80, 20);


// Currying Function

function editPhotoCurried(photo) {
    return function(brightness) {
        return function(contrast) {
            return function(saturation) {
                console.log(`Photo: ${photo}`);
                console.log(`Brightness: ${brightness}%`);
                console.log(`Contrast: ${contrast}%`);
                console.log(`Saturation: ${saturation}%`);
                console.log("Final edited photo is ready!");
            };
        };
    };
}

// editPhotoCurried("myphoto")(50) (30) (20)

// Using curried function step by step
const step1 = editPhotoCurried("myphoto.jpg"); // choose photo
const step2 = step1(50);                       // apply brightness
const step3 = step2(30);                       // apply contrast
const step4 = step3(20);                                  // apply saturation
console.log(step4)                                  
// console.log(step1)                                  

// const newBrightnessStep = step1(70);  // brightness changed to 70%
// newBrightnessStep(30)(20);            // use previous contrast + saturation

