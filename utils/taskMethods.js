// taskMethods.js
import tasks from "./task.js";
import { saveTask } from "./localStorage.js";

function addTask(renderTasks) {
  let task = document.getElementById("task-input").value.trim();

  if (!task) {
    alert("Enter a task");
    return;
  }

  tasks.push({ task, completed: false });
  document.getElementById("task-input").value = "";

  renderTasks(); // Use the passed renderTasks function
  saveTask();
}

function toggleTaskCompletion(index, renderTasks) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks(); // Re-render tasks after updating completion status
}

function deleteTask(index, renderTasks) {
  tasks.splice(index, 1);
  renderTasks(); // Re-render tasks after deletion
}

function editTask(index, renderTasks) {
  const taskList = document.getElementById("task-list");
  const listItem = taskList.children[index]; // Get the specific list item based on index
  listItem.innerHTML = ""; // Clear current list item content

  const editInput = document.createElement("input");
  editInput.type = "text";
  editInput.value = tasks[index].task;
  editInput.classList.add("edit-input");

  const saveButton = document.createElement("button");
  saveButton.textContent = "Save";
  saveButton.addEventListener("click", () => {
    tasks[index].task = editInput.value.trim();
    renderTasks(); // Re-render the tasks
    saveTask(); // Save the updated tasks to local storage
  });

  const cancelButton = document.createElement("button");
  cancelButton.textContent = "Cancel";
  cancelButton.addEventListener("click", () => {
    renderTasks(); // Re-render tasks without saving
  });

  listItem.appendChild(editInput);
  listItem.appendChild(saveButton);
  listItem.appendChild(cancelButton);

  editInput.focus();
}

export { addTask, toggleTaskCompletion, deleteTask, editTask };
