const form = document.getElementById("input-form");
const inputField = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const completeList = document.getElementById("complete-list");


form.addEventListener('submit',addTask);
taskList.addEventListener('click',completeTask);
completeList.addEventListener('click',completeTask);

function addTask(e){
    e.preventDefault();
    if(inputField.value !== ""){
        const task = inputField.value;
        const li = document.createElement("li");
        const delBtn = document.createElement("button");
        const doneBtn = document.createElement("button");
        doneBtn.appendChild(document.createTextNode("Done"));
        delBtn.appendChild(document.createTextNode("X"));
        doneBtn.className="btn done-btn";
        delBtn.className="btn delete-btn";
        li.appendChild(document.createTextNode(task));
        li.className="item";
        li.append(doneBtn,delBtn);
        taskList.appendChild(li);
        inputField.value="";
    }
}


function completeTask(e){
    if(e.target.classList.contains("done-btn")){
        const task = e.target.parentElement
        const completeTask = task.childNodes[0].data;
        const li= document.createElement('li');
        const delBtn = document.createElement("button");
        delBtn.appendChild(document.createTextNode("X"));
        delBtn.className="btn delete-btn";
        li.className="item";
        li.append(document.createTextNode(completeTask),delBtn);
        completeList.appendChild(li);
        task.remove();
    }
    else if (e.target.classList.contains("delete-btn")){
        const task = e.target.parentElement;
        task.remove();
    }
}
