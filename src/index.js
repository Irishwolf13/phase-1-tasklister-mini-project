document.addEventListener("DOMContentLoaded", () => {           // This is here to make sure the Dom Loads everything before Java runs
  let myForm = document.querySelector('form')                   // Grabs the Dom item that is our form

  myForm.addEventListener('submit', (e) => {    // Adds event listener for the submit
    e.preventDefault();                         // Very important to prevent the default functions of the submit 'button'
    myNewTask = document.querySelector('#new-task-description');  //Because dashes(-) are used, we can't select via ID, so we querySelector
    thingsToDo(myNewTask.value)   //Calls the function we want to run when we click on the Submit 'button'
    myForm.reset();               //This clears the form input so the user can put in another input without deleting Text
  })
});

//All the fun stuff we want to happen when we click the Submit 'button'
function thingsToDo(toDo) {
  let myListItem = document.createElement('li')
  let myButton = document.createElement('i')
  myButton.setAttribute('class', "fa-regular fa-circle-xmark")
  myButton.addEventListener('click', thingsDone)
  myButton.addEventListener('mouseenter', mouseEnter)
  myButton.addEventListener('mouseleave', mouseLeave)
  myListItem.textContent = `${toDo}   `;
  myListItem.appendChild(myButton)
  document.querySelector("#tasks").appendChild(myListItem)
}

//All the fun stuff we want to happen when we click any X button near our HunnyDoList
function thingsDone(e) {
  e.target.parentNode.remove();
}

function mouseEnter(e) {
  e.target.setAttribute('class', "fa-solid fa-circle-xmark")
}
function mouseLeave(e) {
  e.target.setAttribute('class', "fa-regular fa-circle-xmark")
}

// <i class="fa-regular fa-circle-xmark"></i>
// let myButton = document.createElement('button')