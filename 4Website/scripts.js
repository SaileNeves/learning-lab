function createCard(num,imgSource,tC,tC2,tC3,linkUrl) {
//create card
    const newCard = document.createElement("div");
    newCard.classList.add("card", "card"+num);

    const Button = document.createElement("button");
    Button.classList.add("button", "button" + num);
    Button.setAttribute("id","button" + num);
    Button.textContent = "Show/Hide";
    Button.addEventListener('click',() =>ShowHideContent("card"+num + " text","button" + num));
    Button.addEventListener('click',() =>ShowHideContent("card"+num + " skill","button" + num));

//create elements of the card
    const Link = document.createElement("a")
    const Img = document.createElement("img");
    const Title = document.createElement("h3");
    const Description = document.createElement("p");
    const SkillList = document.createElement("p");

//add properties to the elements
    Link.href = linkUrl;
    Img.src = imgSource;
    Link.append(Img)
    Title.textContent = tC;
    Description.textContent = tC2;
    Description.setAttribute("id","card"+num + " text");
    Description.classList.add("card-text");
    SkillList.textContent = tC3;
    SkillList.setAttribute("id","card"+num + " skill");
    SkillList.classList.add("card-skillList");

//add link to title
    const projectLink = linkUrl;
    Title.innerHTML = '<a href="' + projectLink + '">' + tC + '</a>';

//append elements
    newCard.append(Link,Title,Description,SkillList,Button);
    
    const parentElement = document.getElementById("container");
    parentElement.appendChild(newCard)
}
createCard(0,"https://www.google.com/logos/doodles/2023/jorge-lafonds-71st-birthday-6753651837110035.2-l.webp","Title","Text here","skills used","https://www.google.com")

function ShowHideContent(contentID,buttonID) {
    const text = document.getElementById(contentID);
    const button = document.getElementById(buttonID);

    if (text.style.display === "none") {
        text.style.display = "block";
        button.innerHTML = "Show less";
    }
    else {
        text.style.display = "none";
        button.innerHTML = "Show more";
    }
}