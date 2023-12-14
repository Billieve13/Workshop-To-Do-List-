
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

function myFunc(event){
  event.preventDefault();

  var cleaning = document.getElementById("cleaningTasks").value;
  var buying = document.getElementById("buyingTasks").value;

  localStorage.setItem('Is a cleaning task', cleaning);
  localStorage.setItem('Is a buying task', buying);
}




