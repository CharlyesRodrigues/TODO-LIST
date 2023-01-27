// Seleção de Elementos //

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit.btn");

let oldInputValue;
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

};

//toggleForms  escode um formulário e mostra o outro e assim vice e versa
 
 const toggleForms = () =>{

editForm.classList.toggle("hide");
todoForm.classList.toggle("hide");
todoList.classList.toggle("hide");

}

const updateTodo = (text) =>{

  const todos = document.querySelectorAll(".todo");
  
   todos.forEach((todo) =>{

   let todoTitle = todo.querySelector("h3");

   if (todoTitle.innerText === oldInputValue){
       todoTitle.innerText = text

       
    
   }


   });


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
    const parenteEl = targetEl.closest('div');
    let todoTitle; 

    if (parenteEl && parenteEl.querySelector("h3")){

      todoTitle = parenteEl.querySelector("h3").innerText;

    }

    if (targetEl.classList.contains('finish-todo')) {
        parenteEl.classList.toggle("done");
    }

    if (targetEl.classList.contains('remove-todo')) {
        parenteEl.remove();
    }
    
    if (targetEl.classList.contains('edit-todo')) {
      toggleForms();
       editInput.value = todoTitle;
       oldInputValue = todoTitle;
    }
});

cancelEditBtn.addEventListener("click", (e)=> {

e.preventDefault();
toggleForms();  


})
editForm.addEventListener("submit", (e)=>{

e.preventDefault();

const editInputValue = editInput.value;

if (editInputValue){
    //Atualizar
    updateTodo(editInputValue)
}
toggleForms();

})