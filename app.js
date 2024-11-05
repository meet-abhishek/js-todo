// app.js
import { saveTask, loadTasks } from "./localStorage.js";
import {
  addTask,
  toggleTaskCompletion,
  deleteTask,
  editTask,
} from "./taskMethods.js";
import tasks from "./task.js";

console.log('app starting');
document.getElementById("add-task").addEventListener("click", () => addTask(renderTasks));
document
  .getElementById("task-input")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      addTask(renderTasks);
    }
  });

window.addEventListener("DOMContentLoaded", () => {
  loadTasks();
  renderTasks();
});

function renderTasks() {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = "";

  tasks.forEach((element, index) => {
    const listItem = document.createElement("li");
    listItem.innerText = element.task;
    if (element.completed) listItem.classList.add("completed");

    const completeButton = document.createElement("button");
    completeButton.classList.add("complete-btn");
    const icon = document.createElement("i");
    icon.classList.add("fas", "fa-check");
    completeButton.appendChild(icon);
    completeButton.addEventListener("click", () => {
      toggleTaskCompletion(index, renderTasks);
      saveTask();
    });

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", (event) => {
      event.stopPropagation();
      editTask(index, renderTasks);
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", (event) => {
      event.stopPropagation();
      deleteTask(index, renderTasks);
      saveTask();
    });

    listItem.appendChild(completeButton);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
  });
  saveTask();
}
console.log('app exiting');
