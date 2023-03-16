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