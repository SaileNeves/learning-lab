// script.js

const newHeading = 'Hello, World!';
const headingElement = document.querySelector('#main-heading');
headingElement.textContent = newHeading;

const NewTextColor = document.getElementById('Home');

NewTextColor.style.color = 'blue';
NewTextColor.style.backgroundColor = "green";

const today = document.getElementById("date");
today.textContent = new Date();
