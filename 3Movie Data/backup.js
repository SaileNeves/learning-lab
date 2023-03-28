    //create card
    const newCard = document.createElement("div");
    newCard.classList.add('movie-card')

   //get info from formulary
   
   X = document.getElementById("id value");
   /* EX
   let Title = document.getElementById("title-value").value;
   let Year = document.getElementById("year-value").value;  */
   
    let cardHeader = document.createElement("h2");
    cardHeader.textContent = "Movie:" + Title;
    let cardElm = document.createElement("p")
    cardElm.textContent= "Prefix" + X

    //Define Card content
    const elmName = 
    
    const createElm

    elmName.document.createElement(elmType);
    createElm.textContent= "Prefix: " + elmValue;
    /* EX:
    let createYear = document.createElement("p");
    createYear.textContent = "Year:" + Year;  */

    //Add content to HTML card div
    newCard.append(cardHeader,createYear,createPlot,createCast,createRuntime,createRating)
    document.getElementById("card-container").appendChild(newCard);
    clearForm()