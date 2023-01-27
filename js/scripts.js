// Seleção de Elementos //

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit.btn");


//Funções//

const savetodo = (text) => {

    const todo = document.createElement("div");
    todo.classList.add("todo");

    const todoTitle = document.createElement("h3");
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);
    console.log(todo); // testando todo


    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-todo");
    doneBtn.innerHTML = '<i class="fa-sharp fa-solid fa-check-double"></i>'
    todo.appendChild(doneBtn);

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-todo");
    editBtn.innerHTML = '<i class="fa-sharp fa-solid fa-pen-to-square"></i>'
    todo.appendChild(editBtn);


    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove-todo");
    deleteBtn.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>'
    todo.appendChild(deleteBtn);

    todoList.appendChild(todo);
    todoInput.value = "";
    todoInput.focus();

}

//Eventos//

todoForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const inputValue = todoInput.value

    if (inputValue) {

        savetodo(inputValue)
    }

});


document.addEventListener("click", (e) => {

    const targetEl = e.target;
    const parenteEl = targetEl.closest('div')

    if (targetEl.classList.contains('finish-todo')) {
        parenteEl.classList.toggle("done");
    }

    if (targetEl.classList.contains('remove-todo')) {
        parenteEl.remove();
    }

});