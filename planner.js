// Strict functional tracker tracking state array
let academicTasks = [];

// DOM Element Targets
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Event Handler: Register actions
addTaskBtn.addEventListener('click', createTask);
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') createTask();
});

// Primary Business Logic Array Functions
function createTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Please enter a valid academic milestone target!");
        return;
    }

    // Creating object representation inside state array
    const taskObject = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    academicTasks.push(taskObject);
    taskInput.value = "";
    renderTasks();
}

function toggleTask(id) {
    academicTasks = academicTasks.map(task => {
        if(task.id === id) {
            return { ...task, completed: !task.completed };
        }
        return task;
    });
    renderTasks();
}

function deleteTask(id) {
    academicTasks = academicTasks.filter(task => task.id !== id);
    renderTasks();
}

// UI DOM Refresher Loop execution
function renderTasks() {
    taskList.innerHTML = "";

    academicTasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''}`;
        
        const span = document.createElement('span');
        span.textContent = task.text;
        li.appendChild(span);

        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'task-actions';

        // Check Complete Button Assignment
        const compBtn = document.createElement('button');
        compBtn.className = 'action-btn complete-btn';
        compBtn.textContent = task.completed ? 'Undo' : 'Done';
        compBtn.addEventListener('click', () => toggleTask(task.id));
        actionsDiv.appendChild(compBtn);

        // Delete Button Assignment
        const delBtn = document.createElement('button');
        delBtn.className = 'action-btn delete-btn';
        delBtn.textContent = 'Delete';
        delBtn.addEventListener('click', () => deleteTask(task.id));
        actionsDiv.appendChild(delBtn);

        li.appendChild(actionsDiv);
        taskList.appendChild(li);
    });
}