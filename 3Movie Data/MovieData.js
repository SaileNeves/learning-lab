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

//Turn Objects Into array
const movieDataArray = Object.values(movieData);
const movieTitles = Object.entries(movieData);

// Get a reference to the card container element
const cardContainer = document.getElementById('card-container')

//Loop trough the array and get the object properties
for (let i = 0; i < movieDataArray.length; i++){
    const title = movieTitles[0];
    const movie = movieDataArray[i];

    // Create the card element
    const card = document.createElement("div")
    card.classList.add('card');

    // Create a list to hold the movie's properties
    const propertyList = document.createElement('ul');

    // Loop through the movies's properties and create a list item for each one
  for (const property in movie) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${property}:</strong> ${movie[property]}`;
    propertyList.appendChild(listItem);

     //Add Title
     const movieTitle = document.createElement("h2");
     movieTitle.textContent = title;
     card.appendChild(movieTitle);
  }

}
// Add the property list to the card
card.appendChild(propertyList);

// Add the card to the container
cardContainer.appendChild(card);
