const todoForm = document.querySelector('.form-todo')
const userInput = document.querySelector('.form-todo input[type="text"]')
const todoList = document.querySelector(".todo-list")



todoForm.addEventListener('click', (e) => {
    e.preventDefault();

    const value = userInput.value;


    if (value.length != 0) {
        const newLi = document.createElement('li');
        newLi.innerHTML = `<span>${value}</span>
                <div class="button">
                    <button class="edit">Edit</button>
                    <button class="done">Done</button>
                    <button class="remove">Remove</button>
                   

                </div>
                <div class="edit-text">
                    <input type="text" placeholder="Enter your text">
                    <button class="editing-done">Done</button>
                </div>
                `
        userInput.value = "";
        todoList.append(newLi)
    }

})

// list-content


// now working on button 
todoList.addEventListener('click', (e) => {
    if (e.target.classList.contains("done")) {
        const selectedELement = e.target.parentNode.previousElementSibling;
        selectedELement.style.textDecorationLine = "line-through"
        selectedELement.style.textDecorationThickness = "4px"
        selectedELement.style.textDecorationColor = "red"

    }
    if (e.target.classList.contains("remove")) {
        const selectedELement = e.target.parentNode.parentNode;
        selectedELement.remove()
    }

    // working on editing part
    if (e.target.classList.contains("edit")) {
        const selectedElement = e.target.parentNode.nextElementSibling;
        selectedElement.style.display = "block"
        selectedElement.style.display = "flex";

        // new edited text
        const editedText = document.querySelector('.edit-text input[type="text"]')
        

        //   applying event on editing done button
        todoList.addEventListener('click',(e)=>{
            if(e.target.classList.contains('editing-done')){
                if(editedText.value.length > 0){
                    const currentList = e.target.parentNode.previousElementSibling.previousElementSibling;
                    currentList.textContent = editedText.value;
                    e.target.parentNode.style.display = "none";
                    editedText.value = "";
                }
                else{
                    e.target.parentNode.style.display = "none";
                }
            }
        })
       


    }


})



