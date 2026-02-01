const inputBox=document.getElementById('input-box')
const listcontainer=document.getElementById('list-container')
function AddTask(){
    if(inputBox=''){
        alert('you must write something');
    }
    else{
       let li=document.createElement('li');
       li.innerHTML=inputBox.value;
       listcontainer.appendChild(li)
 }
}