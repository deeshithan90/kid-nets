const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Load tasks from localStorage on page load
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
tasks.forEach(task => createTaskElement(task));

// Add task
addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (!taskText) return alert("Please enter a task!");

    const task = { id: Date.now(), text: taskText };
    tasks.push(task);
    saveTasks();
    createTaskElement(task);
    taskInput.value = "";
});

// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Create task HTML element
function createTaskElement(task) {
    const li = document.createElement("li");
    li.className = "task";

    li.innerHTML = `
        <span>${task.text}</span>
        <div class="buttons">
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </div>
    `;

    // Edit
    li.querySelector(".edit").addEventListener("click", () => {
        const newText = prompt("Edit task:", task.text);
        if (newText) {
            task.text = newText;
            li.querySelector("span").textContent = newText;
            saveTasks();
        }
    });

    // Delete
    li.querySelector(".delete").addEventListener("click", () => {
        tasks = tasks.filter(t => t.id !== task.id);
        li.remove();
        saveTasks();
    });

    taskList.appendChild(li);
}
