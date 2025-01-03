const dialog = document.querySelector(".dialog");
const dialog2 = document.querySelector(".dialog2");
const div = document.querySelector(".content");
const addTaskBtns = document.querySelectorAll(".add-task-btn");
const addTaskBtn = document.querySelector(".add-task-btn");
const closeBtn = document.querySelector(".close-btn");
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
const submitBtn = document.querySelector(".submit-btn");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  ntd.style.display = "none";
  let form = new FormData(taskForm);

  let taskTitle = form.get("task-title");
  let taskPriority = form.get("task-priority");
  let date = form.get("schedule");
  let notes = form.get("notes");

  createTask(taskTitle, taskPriority, date, notes);
  taskForm.reset();
  dialog.close();
});

closeBtn.addEventListener("click", () => {
  console.log("close");
  dialog.close();
});
const closeBtn2 = document.querySelector(".close-btn2");
closeBtn2.addEventListener("click", () => {
  dialog2.close();
});

function createTask(title, priority, date, notes) {
  const li = document.createElement("li");
  li.classList.add("task");
  li.innerHTML =
    '<input type="checkbox" class="task-checkbox">' +
    title +
    "<br>" +
    "Priority: " +
    priority +
    " | " +
    "Due: " +
    date +
    " " +
    "<br>" +
    "Notes:" +
    "<br>" +
    notes;

  addTask.appendChild(li);

  const checkbox = li.querySelector(".task-checkbox");
  checkbox.addEventListener("click", () => {
    if (checkbox.checked) {
      li.style.textDecoration = "line-through";
    } else {
      li.style.textDecoration = "none";
    }
  });
  //edit

  const taskEdit = document.createElement("button");
  taskEdit.classList.add("task-edit");
  taskEdit.innerHTML = "Edit";

  taskEdit.addEventListener("click", (e) => {
    dialog2.showModal();
    document.querySelector(".edit-title").setAttribute("value", title);
    const selectElement = document.querySelector(".task-priority");
    selectElement.value = priority;

    const dateElement = document.querySelector(".schedule-input");
    dateElement.value = date;

    const notesInput = document.querySelector(".notes-input");
    notesInput.value = notes;

    const saveBtn = document.querySelector(".save-btn");
    saveBtn.addEventListener("click", (e) => {
      e.preventDefault();

      document.querySelector(".edit-title").value = title;

      console.log("saved!");
      dialog2.close();
    });
  });

  li.appendChild(taskEdit);

  //delete
  const taskDelete = document.createElement("button");
  taskDelete.classList.add("task-delete");
  taskDelete.innerHTML = "Remove";

  taskDelete.addEventListener("click", (e) => {
    taskDelete.closest("li").remove();
  });

  li.appendChild(taskDelete);
}

const lala = "Things I should have done long time ago!";
const p = "High";
const d = "2025-01-02";
const n = "Enter notes here........";

createTask(lala, p, d, n);
