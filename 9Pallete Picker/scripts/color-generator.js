RandomColorGen()
//Monochrome Gen Mode
function monochromeGen(){
const baseColor = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`; // Generate a random base color in HSL format.
const numDivs = document.querySelectorAll('.color-display').length; // Get the number of color display divs in the page.

// Calculate the gradient of colors between the base color and the opposite color.
const colorGradient = [];
for (let i = 0; i < numDivs; i++) {
  let lightness = 100 * (i / (numDivs - 1));
  if (i === 0) {
    lightness = 20; // Adjust the lightness value for the first color in the gradient
  } else if (i === numDivs - 1) {
    lightness = 80; // Adjust the lightness value for the last color in the gradient
  }

  const color = {color:`hsl(${baseColor.slice(4, 7)}, 100%, ${lightness}%)` , fontcolor:LightorDark(lightness)};
  colorGradient.push(color);

  console.log(colorGradient);
}

//Assign the code of the colors to the label in the divs
document.querySelectorAll('.colorCode').forEach((code,i)=>{
code.textContent = colorGradient[i].color;
});

// Assign each color to each div in order.
document.querySelectorAll('.color-display').forEach((div, i) => {
  div.style.backgroundColor = colorGradient[i].color;
});
}

function LightorDark(lightness) {
  if (lightness > 50) {
    return 'Dark';
  } else {
    return 'Light';
  }
}

//Random gen Mode
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
//Assign the code of the colors to the label in the divs
document.querySelectorAll('.colorCode').forEach((code,i)=>{
  code.textContent = colorGradient[i];
  });

// Assign each color to each div in order.
document.querySelectorAll('.color-display').forEach((div, i) => {
  div.style.backgroundColor = colorGradient[i];
});
}

//Buttons
let randomButton = document.getElementById("randomG");
randomButton.addEventListener('click' , ()=> RandomColorGen());

let monochromeButton = document.getElementById("monoC");
monochromeButton.addEventListener('click' , ()=> monochromeGen());



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