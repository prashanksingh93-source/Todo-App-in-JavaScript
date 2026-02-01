const inputBox=document.getElementById('input-box')
const listcontainer=document.getElementById('list-container')
function AddTask(){
    if(inputBox===''){
      alert("you must write something");
    }
    else{
       let li=document.createElement('li');
       li.innerHTML=inputBox.value;
       listcontainer.appendChild(li)
       let span=document.createElement('span')
       span.innerHTML='\u00d7';
       li.appendChild(span)
    }
    inputBox.value=''
    Save()
}
listcontainer.addEventListener('click',(e)=>{
    if(e.target.tagName==='LI'){
        e.target.classList.toggle('checked');
        Save()
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        Save()
    }
})

function Save(){
  localStorage.setItem('data',listcontainer.innerHTML)
}
function showData(){
    listcontainer.innerHTML=localStorage.getItem('data')
}
showData();