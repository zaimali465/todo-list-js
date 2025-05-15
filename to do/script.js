function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const taskDiv = document.createElement("div");
  taskDiv.className = "task";

  const span = document.createElement("span");
  span.textContent = taskText;

  const editBtn = document.createElement("button");
  editBtn.className = "edit-btn";
  editBtn.textContent = "Edit";
  editBtn.onclick = () => {
    const newText = prompt("Edit your task:", span.textContent);
    if (newText && newText.trim() !== "") {
      span.textContent = newText.trim();
    }
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => taskDiv.remove();

  taskDiv.appendChild(span);
  taskDiv.appendChild(editBtn);
  taskDiv.appendChild(deleteBtn);

  document.getElementById("taskList").appendChild(taskDiv);
  input.value = "";
}

function toggleMenu() {
  alert("Hamburger menu clicked — Whenever i made the nav bar in future its goes here!");
}
