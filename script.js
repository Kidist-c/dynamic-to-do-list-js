document.addEventListener('DOMContentLoaded',function(){
    const addButton=document.getElementById('add-task-btn');
    const taskInput=document.getElementById('task-input');
    const taskList=document.getElementById('task-list');
    function addTask(){
        const taskText=taskInput.value.trim();
        if(taskText=== " "){
            alert("enter a task");

        }else{
            const list=document.createElement('li');
            list.textcontent=taskText;
            const removebtn=document.createElement('button');
            removebtn.textcontent="remove";
            removebtn.className="remove-btn";
            list.appendChild(removebtn);
            taskList.appendChild(list);
            taskInput.value=" ";
            addButton.addEventListener("click",addTask)
            taskInput.addEventListener("keypress",function(event){
                if(event.key==='Enter'){
                    addTask();
                };
            }
        }
        
    }
    document.addEventListener('DOMContentLoaded',addTask);
})

        
    

