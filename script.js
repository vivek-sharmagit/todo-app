// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event Listeners
todoButton.addEventListener("click", addTodo);


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
    newTodo.innerText = 'hey';
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
};

