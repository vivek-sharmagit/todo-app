// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Event Listeners
document.addEventListener('DOMContentLoaded', getTodos)
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

// Functions
function addTodo(event) {
  //Prevent form from submitting
  event.preventDefault();

  // Creating Todo Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // Creating LI for list of todo
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");
  newTodo.innerText = todoInput.value;
  todoDiv.appendChild(newTodo);

  //Add to LOCALSTORAGE
  storeLocalTodos(todoInput.value);
  //Check Mark Button
  const completedButton = document.createElement("button");
  completedButton.classList.add("complete-btn");
  completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
  todoDiv.appendChild(completedButton);

  //Check Trash Button
  const trashButton = document.createElement("button");
  trashButton.classList.add("trash-btn");
  trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
  todoDiv.appendChild(trashButton);

  //Append todo to list
  todoList.appendChild(todoDiv);

  //Clear the input value
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  //Delete todo
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;

    //Animation
    todo.classList.add("fall");
    removeLocalStorageTodos(todo)
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  //Check mark
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  // console.log(todos);

  todos.forEach(function (todo) {
    if (todo && todo.classList) {
      switch (e.target.value) {
        case "all":
          todo.style.display = "flex";
          // console.log("all");
          break;
        case "completed":
          if (todo.classList.contains("completed")) {
            todo.style.display = "flex";
            // console.log("completed");
          } else {
            todo.style.display = "none";
          }
        case "completed":
          if (todo.classList.contains("completed")) {
            todo.style.display = "flex";
            // console.log("completed");
          } else {
            todo.style.display = "none";
          }
          break;
        case "uncompleted":
          if (!todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
      }
    }
  });
}


function storeLocalTodos(todo) {
  // First we check if todos is already exist
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}




function getTodos(todo) {
  console.log('hell');
  // First we check if todos is already exist
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach((todo) => {
    // Creating Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Creating LI for list of todo
    const newTodo = document.createElement("li");
    newTodo.innerText = todo; // the todo from localstorage
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //Check Mark Button
    const completedButton = document.createElement("button");
    completedButton.classList.add("complete-btn");
    completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    todoDiv.appendChild(completedButton);

    //Check Trash Button
    const trashButton = document.createElement("button");
    trashButton.classList.add("trash-btn");
    trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    todoDiv.appendChild(trashButton);

    //Append todo to list
    todoList.appendChild(todoDiv);
  });
}
//To delete todos from localStorage
function removeLocalStorageTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));   
  }
  // console.log(todo.children[0].innerText);
  // console.log(todos.indexOf('apple'));
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex, 1));
  localStorage.setItem("todos", JSON.stringify(todos));
}

