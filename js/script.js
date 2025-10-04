let tasks = [];

function addTask() {
    const toDoInputName = document.getElementById("task-form-input-name");
    const toDoInputDate = document.getElementById("task-form-input-date");

// check if the fields are filled or not
    if (inputValidation(toDoInputName.value, toDoInputDate.value)) {
        // if filled it will print out the task name and the date and put them in array
       alert("task " + "\"" + toDoInputName.value + "\"" + " has been sucesfully added." + " date: " + toDoInputDate.value);
       let todo = {task: toDoInputName.value, date: toDoInputDate.value};
       tasks.push(todo);
       RetrieveTasks();
        
    }
}

function RetrieveTasks() {
    const taskList = document.getElementById("task-list");

    taskList.innerHTML = '';

    tasks.forEach((todo, index) => {
        taskList.innerHTML += `<li class="border p-2 mb-2 flex justify-between items-center">
            <div>
                <p class="font-bold">${todo.task}</p>
                <p class="text-sm text-gray-500">${todo.date}</p>
            </div>
            <button onclick="deleteTask(${index})" class="bg-red-500 text-white p-1 rounded">Delete</button>
        </li>`;
    });
 }

function showFilterFields() {
    document.getElementById("filter-fields").style.display = "flex";
}

function filterTask() {
    const filterName = document.getElementById("filter-name").value.toLowerCase();
    const filterDate = document.getElementById("filter-date").value;

    const filteredTasks = tasks.filter(todo => {
        const matchesName = filterName === "" || todo.task.toLowerCase().includes(filterName);
        const matchesDate = filterDate === "" || todo.date === filterDate;
        return matchesName && matchesDate;
    });

    const taskList = document.getElementById("task-list");
    taskList.innerHTML = '';
    filteredTasks.forEach((todo, index) => {
        taskList.innerHTML += `<li class="border p-2 mb-2 flex justify-between items-center">
            <div>
                <p class="font-bold">${todo.task}</p>
                <p class="text-sm text-gray-500">${todo.date}</p>
            </div>
            <button onclick="deleteTask(${tasks.indexOf(todo)})" class="bg-red-500 text-white p-1 rounded">Delete</button>
        </li>`;
    });
}

function deletAllTask() {
    tasks = [];
    RetrieveTasks();
 }

// Function to delete a task by index
function deleteTask(index) {
    tasks.splice(index, 1);
    RetrieveTasks();
}

function inputValidation(todo, date) {
    if (todo === '' ||date === '') {
        alert("please fill all Fields");
        return false;
        
    }
    return true;

}

