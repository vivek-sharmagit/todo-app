// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);


// Functions
function addTodo (event){
    //Prevent form from submitting
    event.preventDefault();

    // Creating Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add('todo')

    // Creating LI for list of todo
    const newTodo = document.createElement("li");
    newTodo.classList.add('todo-item');
    newTodo.innerText = todoInput.value;
    todoDiv.appendChild(newTodo);

    //Check Mark Button
    const completedButton =document.createElement('button');   
    completedButton.classList.add('complete-btn');
    completedButton.innerHTML ='<i class="fa-solid fa-check"></i>';
    todoDiv.appendChild(completedButton);

    //Check Trash Button
    const trashButton =document.createElement('button');
    trashButton.classList.add('trash-btn');
    trashButton.innerHTML ='<i class="fa-solid fa-trash"></i>';
    todoDiv.appendChild(trashButton);


    //Append todo to list
    todoList.appendChild(todoDiv);

    //Clear the input value
    todoInput.value = '';
};


function deleteCheck(e){
    const item = e.target;

    //Delete todo
    if(item.classList[0]==='trash-btn'){
        const todo = item.parentElement;
        todo.remove();
    };
    //Check mark
    if(item.classList[0]==='complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    };
}
