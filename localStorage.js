import tasks from "./task.js";

function saveTask() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const storedTasks = JSON.parse(localStorage.getItem("tasks"));
  if (storedTasks) tasks.push(...storedTasks);
  console.log(storedTasks || "No tasks to load");
}

export { saveTask, loadTasks };
