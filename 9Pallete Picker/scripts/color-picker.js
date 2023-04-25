
let colorDivs = document.querySelectorAll(".color-display");
let colorPicker = document.querySelector(".color-picker");

colorDivs.forEach(div => {
    div.addEventListener("click", (event) => toggleColorPicker(event));
  });

//funcionamento do argumento event

  // let event = "click".propriedades.
  //the anonymous function takes the  event and send it as an argument to the child function.
  //the child function was built to take the event object that the event listener creates and passes to it's first argument.
  //It takes the object as a parameter,and modify it's properties,in this case the opening location.

function toggleColorPicker(event){
  const x = event.pageX;
  const y = event.pageY;
  colorPicker.style.display = "block";
  colorPicker.style.left = `${x}px`;
  colorPicker.style.top = `${y}px`;
  colorPicker.classList.toggle("active");
}

  //Show Color picker window

/* button = document.querySelector(".button")
button.addEventListener('click', event => {
  console.log('button pressed')
  console.log(event)
})
 */