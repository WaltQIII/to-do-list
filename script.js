document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const task = taskInput.ariaValueMax.trim();

    if (task) {
        addTask(task);
        taskInput.value = '';
    }
});

function addTask(task) {
    const taskList = document.getElementById('taskList');
    const listItem = document.createElement('li');

    listItem.textContent = task;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(listItem);
    });

    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
}