/* Rex Chen Jinlei */
function addTask() {
    const taskList = document.getElementById('taskList');
    const newTask = document.getElementById('newTask').value;
    if (newTask.trim() !== '') {
        const li = document.createElement('li');
        li.innerHTML = `<span class="task">${newTask}</span>
                        <button onclick="remove(this)">Remove</button>
                        <button onclick="complete(this)">Complete</button>`;
        taskList.appendChild(li);
        document.getElementById('newTask').value = ''; 
    } else {
        alert('Please enter a task!');
    }
}


function remove(button) {
    const li = button.parentElement;
    li.parentElement.removeChild(li);
}


function complete(button) {
    const task = button.previousElementSibling;
    task.style.textDecoration = 'line-through';
}