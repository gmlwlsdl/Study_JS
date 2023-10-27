const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

let toDos = [];
const TODOS_KEY = "todos";
const before = "checkbox_unclick";

function saveTodo() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

// 체크박스 표시 후 n초 뒤 li 삭제 시도
// function wait(event) {
//     setTimeout(deleteTodo(event),3000);
// }

function deleteTodo(event){
    const li = event.target.parentElement;
    console.log(li.id);
    // li.remove();
    toDos = toDos.filter(todo => todo.id != parseInt(li.id));
    saveTodo();
}

function paintTodo(newTodoObj) {
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    // const span = document.createElement("span");
    // span.innerText = newTodoObj.text;
    const label = document.createElement("label");
    label.htmlFor=newTodoObj.id;
    label.classList.add("list_label");
    label.innerText = newTodoObj.text;

    const check = document.createElement("input");
    check.id=newTodoObj.id;
    check.setAttribute("type", "checkbox");
    check.classList.add("before");
    
    // button.innerText = "😶‍🌫️";

    check.addEventListener("click", deleteTodo);
    
    li.appendChild(check);
    // li.appendChild(span);
    li.appendChild(label);
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
