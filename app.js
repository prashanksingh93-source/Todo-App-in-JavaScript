const addTodoBtn=document.getElementById('addTodoBtn')
const inputTag=document.getElementById('todoInput')
let TodoText;
let Todos=[]
let TodoString=localStorage.getItem('Todos')
if(TodoString){
    Todos=JSON.parse(TodoString)
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