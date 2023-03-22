// Get all the elements with the class "card-text" and store them in an array
const descriptions = document.querySelectorAll(".card-text");

// Loop through the array of elements and hide them by setting their "display" property to "none"
descriptions.forEach(element => {
    element.style.display = "none";
});

// Define a function called "showHideDescription" that takes in two parameters: "textID" and "buttonID"
function showHideDescription(textID, buttonID) {
    // Use "document.querySelector()" to find the element with the ID specified in the "textID" parameter and store it in a variable called "text"
    const text = document.querySelector(textID);
    // Use "document.querySelector()" to find the element with the ID specified in the "buttonID" parameter and store it in a variable called "button"
    const button = document.querySelector(buttonID);

    // If the "display" property of the "text" element is currently set to "none", do the following:
    if (text.style.display === "none") {
        // Set the "display" property of the "text" element to "block", making it visible
        text.style.display = "block";
        // Set the inner HTML of the "button" element to "Show less"
        button.innerHTML = "Show less";
    } 
    // Otherwise, if the "display" property of the "text" element is not set to "none", do the following:
    else {
        // Set the "display" property of the "text" element to "none", making it hidden
        text.style.display = "none";
        // Set the inner HTML of the "button" element to "Show more"
        button.innerHTML = "Show more";
    }
}


// 1. Create a new html element using javascript and add it to the html document for the users to see
/* const NewP = document.createElement("p")

console.log(NewP)

// 2. Create an object with name, id, description, image src. Access its properties and create a html element using the object data
const NewObject = {
    name:"what",
    id:"3",
    description:"asdf",
    imagesrc:"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
}

NewP.textContent = NewObject.description
const container = document.querySelector(".container");

container.appendChild(NewP) */

/* const NewDiv = document.createElement("div")

const NewCard = {
    class:"card card3",
    title:"title",
    text:"text here",
    link:"link here",
    img:"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    target:"blank"
}

NewDiv.className = NewCard.class

const container = document.querySelector(".container")
container.appendChild(NewDiv)

const NewAnchor = document.createElement("a")
NewAnchor.href = NewCard.link
NewAnchor.target = NewCard.target

const NewTitle = document.createElement("h2")
NewTitle.textContent = NewCard.title

const NewText = document.createElement("p")
NewText.textContent = NewCard.text
NewText.className = "card-text"
NewText.style = "display: none;"
NewText.id ="card3-text"

const ButtonDiv = document.createElement("div")
ButtonDiv.className = "center"

NewDiv.append(NewAnchor , NewTitle ,NewText,)

 */


// 3. Create an array of objects, loop through the array and for each item, create a new html element, name, description
const DataArray = [{

    class:"card",
    title:"title",
    text:"text here",
    link:"link here",
    img:"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    target:"blank"
},

{
 class:"card",
 title:"title here"},

{
 class:"card",
title:"title here"},

{
    class:"card",
   title:"title here"}, 

{
    class:"card",
   title:"title here"},

{
    class:"card",
   title:"title here"},

{
    class:"card",
   title:"title here"},

{
    class:"card",
   title:"title here"},

]


//Loop trough the array
for (let i=0; i<DataArray.length; i++) {
    //create new constant that creates a new html element
    const newDiv = document.createElement("div")
    //Define the content of the new element by searching the data array by index and getting the class element of the object in the current iteration and adding it again while ading 3 to the value the second time.
    newDiv.className = DataArray[i].class +" "+DataArray[i].class+ Number(i+3)
//select the place in the html code to add the elements
    const container = document.querySelector(".container")
    //add the new elements
    container.appendChild(newDiv)
}


// add the class name starting from 3
//show all the objects in the array


// // Get the first object of the array
// let div = document.createElement("div")
// let Data = DataArray[0]

// // Get an array of its own property names using Object.keys()
// let keys = Object.keys(Data);
// console.log(keys)



    // i=0 4>4 i++ 

    // dataArr[0].name 
    // dataArr[0].description  */