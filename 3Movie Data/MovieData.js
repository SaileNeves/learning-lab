let movieData = {
  "The Darjeeling Limited": {
    plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
    cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
    runtime: 151,
    rating: 7.2,
    year: 2007,
  },
  "The Royal Tenenbaums": {
    plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
    rating: 7.6,
    year: 2001,
    cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
    runtime: 170,
  },
  "Fantastic Mr. Fox": {
    year: 2009,
    plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
    cast: [
      "George Clooney",
      "Meryl Streep",
      "Bill Murray",
      "Jason Schwartzman",
    ],
    runtime: 147,
    rating: 7.9,
  },
  "The Grand Budapest Hotel": {
    rating: 8.1,
    runtime: 159,
    year: 2014,
    plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
  },
};
const movieTitles = Object.keys(movieData);
const movieObjs = Object.values(movieData);

for (let i = 0; i < 4; i++) {
  // Create title
  const movieTitle = movieTitles[i];
  //Create storage location
  const newCard = document.createElement('div');
  newCard.classList.add('movie-card');

  const NewTitle = document.createElement('h2')
  NewTitle.textContent = `Movie: ${movieTitle}`;
  newCard.appendChild(NewTitle);

  // Movie object
  const MovieInfo = movieObjs[i];

  createParagraph('year', newCard, MovieInfo)
  createParagraph('plot', newCard, MovieInfo)
  createParagraph('cast', newCard, MovieInfo)
  createParagraph('runtime', newCard, MovieInfo)
  createParagraph('rating', newCard, MovieInfo)
  
  // Append new card to parent
  const parentElement = document.querySelector('.content');
  parentElement.appendChild(newCard);
}

function createParagraph(propertyName, newCard, filmeInfo) {
  const newP = document.createElement('p');
  newP.textContent = `${propertyName}: ${filmeInfo[propertyName]}`;
  newCard.appendChild(newP);
}

//Show/hide Form button
function toggleForm() {
  let form = document.getElementById("movie-form");
  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}

/* const newCard = document.createElement("div"); */

function createMovieElement(elementType, propertyName, newCardArg) {
  const NewElement = document.createElement(elementType);
  const inputValue = document.getElementById(`${propertyName}-value`).value;
  NewElement.textContent = `${propertyName}: ${inputValue}`;
  newCardArg.appendChild(NewElement)
}

function createCard() {
  const newCard = document.createElement("div");
  newCard.classList.add('movie-card');
  createMovieElement('h2', 'title', newCard);
  createMovieElement('p', 'year', newCard);
  createMovieElement('p', 'plot', newCard);
  createMovieElement('p', 'cast', newCard);
  createMovieElement('p', 'runtime', newCard);
  createMovieElement('p', 'rating', newCard);
  const parentElement = document.querySelector('.content');
  parentElement.appendChild(newCard);
  
}

//Submit button
function submitCard(event) {
  event.preventDefault();
  createCard();
  clearForm();
}

//Clear Form
function clearForm() {
  document.getElementById("movie-form").reset();
}

//Button sort by year
const sortButton = document.querySelector("#sort-by-year");
sortButton.addEventListener("click", sortMoviesByYear);//

//

function sortMoviesByYear() {
  // Retrieve all movie cards from the page
  const movieCards = document.querySelectorAll(".movie-card");

    // Convert NodeList to Array and extract year properties
    const movies = Array.from(movieCards).map(card => {
      return {
        card: card,
        year: parseInt(card.querySelector("p").textContent.slice(-4))
      };
    });

  // Sort movies by year in ascending order
  const Order = movies.sort((a, b) => a.year - b.year);

   // Remove movie cards from the page
   movieCards.forEach(card => card.remove());

   // Reinsert movie cards into the page in the correct order
   movies.forEach(movie => {
     const container = document.querySelector(".content");
     container.appendChild(movie.card);
   });
 }