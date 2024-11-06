import { saveTask, loadTasks } from "./utils/localStorage.js";
import {
  addTask,
  toggleTaskCompletion,
  deleteTask,
  editTask,
} from "./utils/taskMethods.js";
import { renderTasks } from "./utils/renderDom.js";

document
  .getElementById("add-task")
  .addEventListener("click", () => addTask(renderTasks));
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

document
  .getElementById("login-register-btn")
  .addEventListener("click", () => userLoginRegister());
document.getElementById("email").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    userLoginRegister();
  }
});

function userLoginRegister() {
  const email = document.getElementById("email").value.trim();
  if (!email) {
    alert("Enter your email");
    return;
  }
  window.location.href = "dashboard.html";
}
