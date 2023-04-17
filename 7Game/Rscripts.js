//Button Controller
const buttonIds = [1,2,3,4];
buttonIds.forEach(id => {
    const button = document.getElementById(`button-${id}`);
    button.addEventListener('click',()=> {
    toggleBtn(id);
    handlePlayerInput(id);
    });
});

