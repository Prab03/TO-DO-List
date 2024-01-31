function addtoview()
{
    var iT=document.getElementById("textInput").value;
    if(iT.trim()!=="")
    {
        var newiT=document.createElement("p");
        newiT.textContent=iT;
        document.getElementById("inputContainer").appendChild(newiT);
        document.getElementById("iT").value="";
        saveTaskToLocalStorage(iT);
    }
}
function saveTaskToLocalStorage(taskText) {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const newTask = { id: Date.now(), title: taskText, description: '' };
    storedTasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
  }