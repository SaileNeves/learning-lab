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
    
    for(let i = 0; i < 4; i++) {
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
  
        // Create elements for properties
        for(let property in MovieInfo) {
            createParagraph(property, newCard, MovieInfo);
        }

        // Append new card to parent
        const parentElement = document.querySelector('.content');
        parentElement.appendChild(newCard);
    }

    
function createParagraph(propertyName, newCard, filmeInfo){
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

  function createMovieElement() {
    const newCard = document.createElement("div");

    let Title = document.getElementById("title-value").value;
    let Rating = document.getElementById("rating-value").value;
    console.log(Title)
  }


  //Submit button
  function createCard(event) {
    event.preventDefault();

    const newCard = document.createElement("div");
    createMovieElement('title', 'h2', newCard);
    createMovieElement('rating', 'p', newCard);
    clearForm()
  }

  function clearForm() {
    document.getElementById("movie-form").reset();
  }