
document.querySelectorAll('#buyingTasks input[type="checkbox"]').forEach(checkbox => {
  checkbox.addEventListener('click', function () {
    const task = this.parentElement;
    task.classList.toggle("completed");
  });
});

document.querySelectorAll('#cleaningTasks input[type="checkbox"]').forEach(checkbox => {
  checkbox.addEventListener('click', function () {
    const task = this.parentElement;
    task.classList.toggle("completed");
  });
});

document.querySelectorAll('#cleaningTasks .deleteMe').forEach(button => {
  button.addEventListener('click', function () {
    const listItem = this.parentElement;
    listItem.remove();
  });
});

document.querySelectorAll('#buyingTasks .deleteMe').forEach(button => {
  button.addEventListener('click', function () {
    const listItem = this.parentElement;
    listItem.remove();
  });
});