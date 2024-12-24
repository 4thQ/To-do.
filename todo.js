const dialog = document.querySelector(".dialog");
const div = document.querySelector(".content");
const addTaskBtns = document.querySelectorAll(".add-task-btn");
const addTaskBtn = document.querySelector(".add-task-btn");
const closeBtn = document.querySelector(".close-btn");
const submitBtn = document.querySelector(".submit-btn");
const taskForm = document.querySelector(".task-form");
const addTask = document.querySelector(".add-task");
const h3 = document.querySelector("h3");

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

  let form = new FormData(taskForm);

  let taskTitle = form.get("task-title");
  let taskPriority = form.get("task-priority");
  let date = form.get("schedule");
  let notes = form.get("notes");

  const li = document.createElement("li");
  li.innerHTML = taskTitle;
  addTask.appendChild(li);
  li.addEventListener("click", (e) => {
    li.style.textDecoration == "line-through"
      ? (li.style.textDecoration = "")
      : (li.style.textDecoration = "line-through");
  });

  const taskDelete = document.createElement("button");

  taskDelete.classList.add("task-delete");
  taskDelete.innerText = "delete";
  taskDelete.addEventListener("click", (e) => {
    console.log("hey");
    taskDelete.closest("li").remove();
  });

  li.appendChild(taskDelete);

  dialog.close();
});
