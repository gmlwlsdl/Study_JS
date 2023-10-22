const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

let toDos = [];
const TODOS_KEY = "todos";

function saveTodo() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}


function deleteTodo(event){
    const li = event.target.parentElement;
    console.log(li.id);
    li.remove();
    toDos = toDos.filter(todo => todo.id != parseInt(li.id));
}

function paintTodo(newTodoObj) {
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    span.innerText = newTodoObj.text;

    const button = document.createElement("button");
    button.innerText = "😶‍🌫️";

    button.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();

    const newTodo = todoInput.value;
    todoInput.value="";

    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };

    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodo();
}

todoForm.addEventListener("submit",handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos){
    const parsedTodos = JSON.parse(savedTodos);
    toDos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}
