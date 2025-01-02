const dialog = document.querySelector(".dialog");
const div = document.querySelector(".content");
const addTaskBtns = document.querySelectorAll(".add-task-btn");
const addTaskBtn = document.querySelector(".add-task-btn");
const closeBtn = document.querySelector(".close-btn");
const submitBtn = document.querySelector(".submit-btn");
const taskForm = document.querySelector(".task-form");
const addTask = document.querySelector(".add-task");
const h3 = document.querySelector("h3");
const mainContent = document.querySelector(".main-content");
const ntd = document.querySelector(".ntd");

addTaskBtns.forEach((button) => {
  button.addEventListener("click", () => {
    dialog.showModal();
  });
});

closeBtn.addEventListener("click", () => {
  dialog.close();
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  ntd.style.display = "none";
  let form = new FormData(taskForm);

  let taskTitle = form.get("task-title");
  let taskPriority = form.get("task-priority");
  let date = form.get("schedule");
  let notes = form.get("notes");

  const li = document.createElement("li");
  li.classList.add("add-task");
  li.innerHTML = taskTitle;
  addTask.appendChild(li);

  const taskDelete = document.createElement("button");

  taskDelete.classList.add("task-delete");
  taskDelete.innerText = "delete";

  taskDelete.addEventListener("click", (e) => {
    taskDelete.closest("li").remove();
    if (addTask.hasChildNodes()) {
      ntd.style.display = "none";
    } else {
      ntd.style.display = "";
    }
  });

  li.appendChild(taskDelete);
  dialog.close();
});
