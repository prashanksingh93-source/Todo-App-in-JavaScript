const addTodoBtn=document.getElementById('addTodoBtn')
const inputTag=document.getElementById('todoInput')
const todoListU1=document.querySelector("#todoList")

let TodoText;
let Todos=[]
let TodoString=localStorage.getItem('Todos')
if(TodoString){
    Todos=JSON.parse(TodoString)
}

const populateTodos=()=>{

    let string=''
    for(let todo of Todos){
        string += `<li class="todo-item ${todo.isComplete?'completed':''}" >
                    <input type="checkbox" class="todo-checkbox ${todo.isComplete?'checked':''}">
                    <span class="todo-text">${todo.title}</span>
                    <button class="delete-btn">×</button>
                </li>`
    }

    todoListU1.innerHTML=todoListU1.innerHTML + string
}

addTodoBtn.addEventListener('click',()=>{
   TodoText=inputTag.value;
   inputTag.value=''
   console.log(TodoText)
   let todo={
    title: TodoText,
    isComplete:false
   }
   Todos.push(todo)
   localStorage.setItem('Todos',JSON.stringify(Todos))


})
populateTodos();

let todoCheckBoxs=document.querySelectorAll('.todo-checkbox')
todoCheckBoxs.forEach((element)=>{
    element.addEventListener('click',(e)=>{
         if(e.target.checked){
            element.parentNode.classList.add('completed')}
        else{element.parentNode.classList.remove('completed')}
        })
})
