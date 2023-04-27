/* // Get the save button,the hue, saturation, and lightness sliders and the color result div
let colorResult = document.getElementById("color-result");
let hueSlider = document.getElementById("hue-slider");
let saturationSlider = document.getElementById("saturation-slider");
let lightnessSlider = document.getElementById("lightness-slider");
let saveButton = document.getElementById("save-button");

// Add event listeners
hueSlider.addEventListener("input", updateColor);
saturationSlider.addEventListener("input", updateColor);
lightnessSlider.addEventListener("input", updateColor);
saveButton.addEventListener("click", saveColor);
 */
/* // Function to update the color result div
function updateColor() {
  var hue = hueSlider.value;
  var saturation = saturationSlider.value;
  var lightness = lightnessSlider.value;
  var color = "hsl(" + hue + "," + saturation + "%," + lightness + "%)";
  colorResult.style.backgroundColor = color;
}

// Function to save the color
function saveColor() {
  var color = colorResult.style.backgroundColor;
  // code to save the color...
}

function generateColors() {
  var hueColors = [];
  for (var i = 0; i <= 360; i += 30) {
    hueColors.push("hsl(" + i + ", 100%, 50%)");
  }
  hueSlider.style.backgroundImage = "linear-gradient(to bottom, " + hueColors.join(",") + ")";
  saturationSlider.style.backgroundImage = "linear-gradient(to right, white, " + hueColors
} */


//Color picker display control
let colorPickerOpen = document.querySelectorAll(".colorCode");
colorPickerOpen.forEach((div)=> {
 div.addEventListener('click',()=> toggleColorPicker)
});


function toggleColorPicker(){
    const colorPicker = document.getElementById('color-picker');
    if (colorPicker.style.display === 'none') {
      colorPicker.style.display = 'flex';
    } else {
      colorPicker.style.display = 'none';
    }
  }