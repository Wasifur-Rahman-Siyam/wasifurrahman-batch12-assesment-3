const task = document.querySelector('#task');
const todoBtn = document.querySelector('#add-task');

// root
window.onload = () =>{
    main();
}

// main functions
function main() {
    todoBtn.addEventListener('click', addTodo);
    showTodos();
}

// events
function addTodo (){
    if (task.value == '') {
        alert('Please give a task name');
    }
    else{
        if(localStorage.getItem('todos') == null) {
            localStorage.setItem('todos','[]');
            const todos = JSON.parse(localStorage.getItem('todos'));
            todos.push(task.value);
            localStorage.setItem('todos',JSON.stringify(todos));
            showTodos();
            task.value='';
        }
        else {
            const todos = JSON.parse(localStorage.getItem('todos'));
            todos.push(task.value);
            localStorage.setItem('todos',JSON.stringify(todos));
            showTodos();
            task.value='';
        }
    }
}

function showTodos() {
    let todos = JSON.parse(localStorage.getItem('todos'));
    let display = '';
    for (todo in todos){
        display += `
            <tr>
            <td>
            ${todos[todo]}
            </td>
            <td>
                <button class="btn btn-primary" onclick="editTodo(${todo})">&#9998;</button>
                <button class="btn btn-danger" onclick="deleteTodo(${todo})">&#128465;</button>
            </td>
        </tr>
        `;
    }
    var tbody = document.querySelector("tbody");
    tbody.innerHTML = display;
}

//Utilitiy
function editTodo(id){
    task.value = JSON.parse(localStorage.getItem('todos'))[id];
    const btnHolder = document.querySelector('#btn-holder');
    btnHolder.innerHTML= `
    <button type="button" class="btn btn-danger" onclick="updateTodo(${id})">Update</button>
    `;
}
function updateTodo(id){
    let todos = JSON.parse(localStorage.getItem('todos'));
    todos[id] = task.value;
    localStorage.setItem('todos', JSON.stringify(todos));
    showTodos();
    task.value = '';
}
function deleteTodo(id){
    if (confirm("Are you sure to delete")){
        let todos = JSON.parse(localStorage.getItem('todos'));
        todos.splice(id,1);
        localStorage.setItem('todos',JSON.stringify(todos));
        showTodos();
    }
   
}   