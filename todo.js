const dialog = document.querySelector(".dialog");
const div = document.querySelector(".content");
const addTaskBtns = document.querySelectorAll(".add-task-btn");
const addTaskBtn = document.querySelector(".add-task-btn");
const closeBtn = document.querySelector(".close-btn");

addTaskBtns.forEach((button) => {
  button.addEventListener("click", () => {
    dialog.showModal();
  });
});

closeBtn.addEventListener("click", () => {
  dialog.close();
});

addTaskBtn.click();
