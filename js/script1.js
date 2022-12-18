const todoForm = document.querySelector(".form-todo");
const todoList = document.querySelector(".todo-list");
const todoValue = document.querySelector('.form-todo input[type="text"]');

// Adding Event on Todo form
todoForm.addEventListener('submit', (e) => {
    e.preventDefault(); // stopping form to be sumited/refreshing page 

    // creating new list element 
    if (todoValue.value.length > 0) {
        const newLi = document.createElement("li");
        newLi.innerHTML = `<span id="list-content">${todoValue.value}</span>
    <div class="button">
        <button class="edit">Edit</button>
        <button class="done">Done</button>
        <button class="remove">Remove</button>
        
    </div>

    <div class="edit-text">
        <input type="text" placeholder="Enter your text">
        <button class="editing-done">Done</button>
    </div>`

        // Now Appending this new list to or todo list ul
        todoList.append(newLi);
        todoValue.value = '';  //this is to make empty add task inpu
    }

})

// Working on edit, done and remove butons
todoList.addEventListener('click', (e) => {
    // on clicking done button 
    if (e.target.classList.contains("done")) {
        const targetElement = e.target.parentNode.previousElementSibling;
        targetElement.style.textDecorationLine = "line-through";
        targetElement.style.textDecorationThickness = '5px';
        targetElement.style.textDecorationColor = "red";
    }
    else if (e.target.classList.contains("remove")) {
        const targetElement = e.target.parentNode.parentNode;
        targetElement.remove();
    }
    else if (e.target.classList.contains("edit")) {
        const targetElement = e.target.parentNode.nextElementSibling;
        targetElement.style.display = 'flex'

        // applying event on done button 
        todoList.addEventListener('click', (e) => {
            if (e.target.classList.contains("editing-done")) {
                //getting edited text
                const editText = targetElement.childNodes[1];

                // if there is new text then we will assing value
                if (editText.value.length > 0) {
                    // assigning new text to list element
                    const listText = e.target.parentNode.previousElementSibling.previousElementSibling;
                    listText.textContent = editText.value;

                    editText.value = '';

                    // now hiding edit div
                    targetElement.style.display = 'none';
                }
                else{
                    targetElement.style.display = 'none';
                }

            }
        })

    }
})
