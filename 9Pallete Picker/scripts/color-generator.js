RandomColorGen()

function monochromeGen(){
// Generate a random base color in HSL format.
const baseColor = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
// Get the number of color display divs in the page.
const numDivs = document.querySelectorAll('.color-display').length;

// Calculate the gradient of colors between the base color and the opposite color.
const colorGradient = [];
for (let i = 0; i < numDivs; i++) {
  let lightness = 100 * (i / (numDivs - 1));
  if (i === 0) {
    lightness = 20; // Adjust the lightness value for the first color in the gradient
  } else if (i === numDivs - 1) {
    lightness = 80; // Adjust the lightness value for the last color in the gradient
  }
  const color = `hsl(${baseColor.slice(4, 7)}, 100%, ${lightness}%)`; 
  colorGradient.push(color);
}

// Assign each color to each div in order.
document.querySelectorAll('.color-display').forEach((div, i) => {
  div.style.backgroundColor = colorGradient[i];
});
}

function RandomColorGen(){
const baseColor = Math.floor(Math.random() * 360);
const oppositeColor = (baseColor + 180) % 360; //Calculate the oposite color to the base color
const numDivs = document.querySelectorAll('.color-display').length;

// Color Calculation
const colorGradient = [];
for (let i = 0; i < numDivs; i++) {
  const hue = baseColor + (oppositeColor - baseColor) * (i / (numDivs - 1));
  const color = `hsl(${hue}, 100%, 50%)`;
  colorGradient.push(color);
}

document.querySelectorAll('.color-display').forEach((div, i) => {
  div.style.backgroundColor = colorGradient[i];
});
}


//refactoring

/* function RefactoredGen(){

    const baseColor = Math.floor(Math.random() * 360); // Generate a random base color in HSL format.
    const oppositeColor = (baseColor + 180) % 360; //Calculate the oposite color to the base color
    const numDivs = document.querySelectorAll('.color-display').length; // Get the number of color display divs in the page.
    const colorGradient = [];

    if (randomOptionSelected) {
        randomcolorGenOption()
    }
    if(monoOptionSelected){
        monochromeGenOption()
    }
    document.querySelectorAll('.color-display').forEach((div, i) => {
        div.style.backgroundColor = colorGradient[i];
}};

randomcolorGenOption(){
for (let i = 0; i < numDivs; i++) {
  const hue = baseColor + (oppositeColor - baseColor) * (i / (numDivs - 1));
  const color = `hsl(${hue}, 100%, 50%)`;
  colorGradient.push(color);
}};

function monochromeGenOption(){
    for (let i = 0; i < numDivs; i++) {
        let lightness = 100 * (i / (numDivs - 1));
        if (i === 0) {
          lightness = 20; // Adjust the lightness value for the first color in the gradient
        } else if (i === numDivs - 1) {
          lightness = 80; // Adjust the lightness value for the last color in the gradient
        }
        const color = `hsl(${baseColor.slice(4, 7)}, 100%, ${lightness}%)`; 
        colorGradient.push(color);
      }
} */