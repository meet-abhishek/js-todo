// app.js
import { saveTask, loadTasks } from "./utils/localStorage";
import {
  addTask,
  toggleTaskCompletion,
  deleteTask,
  editTask,
} from "./utils/taskMethods";
import { renderTasks } from "./utils/renderDom";

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
