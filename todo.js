const todo = document.querySelector(".js-todo"),
    inputTodo = todo.querySelector("input"),
    list = document.querySelector(".js-todoList");

const TODOS_LS = "toDos";
let toDos = [];

function deleteList(event){
    const btn = event.target;
    const li = btn.parentNode;

    list.removeChild(li);
    const clear = toDos.filter(function(todo){
        return todo.id !== parseInt(li.id);
    })
    toDos = clear;
    saveTodo();

}

function displayTodo(text){
    const deleteBtn = document.createElement("button");
    const li = document.createElement("li");
    const span = document.createElement("span");

    deleteBtn.innerText = "❌";
    deleteBtn.addEventListener("click",deleteList);

    const newId = toDos.length + 1;
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(deleteBtn);
    li.id = newId;
    list.appendChild(li);
  
    const toDosObj = {
      text: text,
      id: newId
    };
  
    toDos.push(toDosObj);
    saveTodo();

}

function saveTodo(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function loadList() {
    const loadedToDos = localStorage.getItem(TODOS_LS);

    if (loadedToDos !== null) {
      const parsedToDos = JSON.parse(loadedToDos);
      parsedToDos.forEach(function (todo) {
        displayTodo(todo.text);
      });
    }
}

function handleSubmit(event){
    event.preventDefault();
    const currentTodo = inputTodo.value;
    displayTodo(currentTodo);
    inputTodo.value = "";
}

function init(){
    loadList();
    todo.addEventListener("submit", handleSubmit)
}
init();
