const todoForm = document.querySelector('.form-todo');
const todoList = document.querySelector('.todo-list');
const inputText = document.querySelector('.form-todo input[type="text"]')

todoForm.addEventListener('submit', (e) => {
    e.preventDefault(); // form ko submit nhi hone dega

    // creating li element
    const li = document.createElement("li")

    // assining value to list element 
    li.innerHTML = `<span>${inputText.value}</span>
    <div class="button">
        <button class="done">Done</button>
        <button class="remove">Remove</button>
    </div>`

    // cleaning the document
    inputText.value = ""

    // append element to todo list
    todoList.append(li);  
})

// ab ham kya karenge using event delegation 
// ul ko select karenge uske baad jaha click karenge us 
// element ko hm get kr skte hai
todoList.addEventListener('click',(e)=>{
    // e.targe hame dega konsa element click hua hai ul ke andar
    // or uska class done hoga toh apply this condition 
    if(e.target.classList.contains('done')){
         const listText = e.target.parentNode.previousElementSibling;
         listText.style.textDecoration = 'line-through'
         listText.style.textDecorationColor = 'red'  
    }

    if(e.target.classList.contains('remove')){
        // remove button ke parent and uske parent
        // isse hm li pe aagye
        const listText = e.target.parentNode.parentNode;
        listText.remove();

    }
})