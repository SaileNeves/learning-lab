/* hoverButtonList = document.querySelector(".hoverbuttons")
hoverButtonList.addEventListener('click', )


document.addEventListener('DOMContentLoaded', function() {
    const hoverArea = document.querySelector('.hoverButtons');
    const buttonList = document.querySelector('.button-list');

    hoverArea.addEventListener('mouseover', function() {
        buttonList.style.display = 'block';
    });

    hoverArea.addEventListener('mouseout', function() {
        buttonList.style.display = 'none';
    });
}); */

/*Top Nav*/

palleteBtn = document.getElementById("pltButton");
palleteBtn.addEventListener('click', ()=> toggleFavList());


function toggleFavList(){
    const myDiv = document.getElementById('myDiv');

    if (myDiv.style.display === 'none') {
      myDiv.style.display = 'flex';
    } else {
      myDiv.style.display = 'none';
    }
  }