import { tasks } from "./task.js";

function saveTask() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const storedTasks = JSON.parse(localStorage.getItem("tasks"));
  if (storedTasks) tasks.push(...storedTasks);
}

export { saveTask, loadTasks };
