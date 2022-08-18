const todoInput = document.getElementById('TodoInput');
const addBtn = document.getElementById('addButton');
const Tasks = document.getElementById('tasks');
window.addEventListener('load',getTodo)
addBtn.addEventListener('click',add )
function add(){
    let task = document.createElement('div');
    let deletItem = document.createElement('button');
    let icon = document.createElement('i');
    deletItem.classList.add("delete-item");
    let checkItem=document.createElement("button");
    let checkIcon=document.createElement('i');
    checkItem.className ="check";
    checkIcon.classList = "fa-solid fa-check";
    icon.className = "fa-solid fa-trash";
    task.className = "task";
    task.innerText = todoInput.value
    checkItem.appendChild(checkIcon)
    deletItem.appendChild(icon);
    task.appendChild(checkItem);
    task.appendChild(deletItem);
    Tasks.appendChild(task);
    console.log(task);
    saveLocalTodo(todoInput.value)
}
Tasks.addEventListener('click',Delete)
function Delete(e){
if(e.target.className == "fa-solid fa-trash" ){
    let ItemDelete = e.path[2]
    
    if(ItemDelete.className == "task"){
    ItemDelete.remove()
   
    }
}
else{
    return;
}
}
Tasks.addEventListener('click',check);
function check(e){
    if(e.target.className == "fa-solid fa-check" ){
        let itemCheck = e.path[2];
        
        itemCheck.classList.toggle('red');
    }
}
function saveLocalTodo(todo){
    let todos;
    if(localStorage.getItem('todos')==null){
        localStorage.setItem('todos',todo)
    }else{
    localStorage.setItem('todos',localStorage.getItem("todos")+',' +todo);
    }
}
function getTodo(){
    let stringTodo = localStorage.getItem('todos')
    let todoArray = stringTodo.split(',');
    todoArray.forEach((element)=>{
        let task = document.createElement('div');
        let deletItem = document.createElement('button');
        let icon = document.createElement('i');
        deletItem.classList.add("delete-item");
        let checkItem=document.createElement("button");
        let checkIcon=document.createElement('i');
        checkItem.className ="check";
        checkIcon.classList = "fa-solid fa-check";
        icon.className = "fa-solid fa-trash";
        task.className = "task";
        task.innerText = element
        checkItem.appendChild(checkIcon)
        deletItem.appendChild(icon);
        task.appendChild(checkItem);
        task.appendChild(deletItem);
        Tasks.appendChild(task);
        console.log(task);
    })
}