const inputbox = document.getElementById('inputbox');
const addbtn = document.getElementById('addbtn');
const under = document.getElementById('under');

let editTodo = null;

const addTodo = () => {
    const inputText = inputbox.value.trim();

    if (inputText.length <= 0) {
        alert("you must write something in your to do");
        return;
    }

    if (addbtn.value === "Edit") {
        // Passing the original text to editLocalTodos function before edit it in the todoList
        // editLocalTodos(editTodo.target.previousElementSibling.innerHTML);
        editTodo.target.previousElementSibling.innerHTML = inputText;
        editLocalTodos(editTodo.target.previousElementSibling.innerHTML);
        addbtn.value = "Add";
        inputbox.value = "";
    }
    else{

    const li = document.createElement("li");
    const p = document.createElement("p");

    p.innerHTML = inputText;
    li.appendChild(p);
    
    const edtbtn = document.createElement("button");
    edtbtn.innerText = "Edit";   // ✅ FIX HERE
    edtbtn.classList.add("btn", "editBtn");
    li.appendChild(edtbtn);

    const dltbtn = document.createElement("button");
    dltbtn.innerText = "Remove";
    dltbtn.classList.add("btn", "deletbtn");
    li.appendChild(dltbtn);

    under.appendChild(li);
    inputbox.value = "";

    saveLocalTodos(inputText);
 }
}

// addbtn.addEventListener('click', addTodo);

const updateTodo = (e) => {
    if (e.target.innerHTML === "Remove") {
        under.removeChild(e.target.parentElement);
        deleteLocalTodos(e.target.parentElement)
    }

    if(e.target.innerHTML === "Edit"){
        inputbox.value = e.target.previousElementSibling.innerHTML;
        inputbox.focus();
        addbtn.value = "Edit";
        editTodo = e;
    }
}

const saveLocalTodos = (todo) => {
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

const getLocalTodos = () => {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
        todos.forEach(todo => {

            //Creating p tag
            const li = document.createElement("li");
            const p = document.createElement("p");
            p.innerHTML = todo;
            li.appendChild(p);


            // Creating Edit Btn
            const editBtn = document.createElement("button");
            editBtn.innerText = "Edit";
            editBtn.classList.add("btn", "editBtn");
            li.appendChild(editBtn);

            // Creating Delete Btn
            const deleteBtn = document.createElement("button");
            deleteBtn.innerText = "Remove";
            deleteBtn.classList.add("btn", "deleteBtn");
            li.appendChild(deleteBtn);

            under.appendChild(li);
        });
    }
}

const deleteLocalTodos = (todo) =>{
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"))
    } 

    let todoText = todo.children[0].innerHTML;
    let todoIndex = todos.indexOf(todoText);
    todos.splice(todoIndex, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    // Array functions : slice / splice
    console.log(todoIndex);
}

const editLocalTodos = (todo) => {
    let todos = JSON.parse(localStorage.getItem("todos"));
    let todoIndex = todos.indexOf(todo);
    todos[todoIndex] = inputbox.value;
    localStorage.setItem("todos", JSON.stringify(todos));
}

document.addEventListener('DOMContentLoaded', getLocalTodos);
addbtn.addEventListener('click', addTodo);
under.addEventListener('click', updateTodo);
