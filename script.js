const selectedInput = document.querySelector("input");
const addTodoBtn = document.querySelector(".add-todo");
const todos = document.querySelector(".todos");

selectedInput.focus()

 
addTodoBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const text = selectedInput.value.trim();
  if (!text) return;
  addTodo(text);
});

todos.addEventListener("click", function (e) {
  const item = e.target;
  console.log({item});
  if (item.classList.contains("fa-square")) {
    item.parentElement.classList.add("completed");
    item.classList.replace("fa-square", "fa-check-square");
    return;
  } 
  if (item.classList.contains("fa-check-square")) {
    item.parentElement.classList.remove("completed");
    item.classList.replace("fa-check-square", "fa-square");
    return;
  }
  if (item.classList.contains("fa-trash")) {
    let b = confirm('Are you sure that you want to delete this todo?');
    console.log({b});
    if (b) {
      item.parentElement.remove();
    }
  }
});


function addTodo(text) {
  // create li
  const createdLi = document.createElement("li");
  createdLi.classList.add("todo");
  todos.appendChild(createdLi);
  //add span
  const span = document.createElement("span");
  span.classList.add("todo-text");
  span.innerText = text;
  createdLi.appendChild(span);
  //add comp icon
  const compIcon = document.createElement("i"); // p input h1
  compIcon.classList.add("fas", "fa-square");
  createdLi.appendChild(compIcon);
  //add trash icon
  const trashIcon = document.createElement("i");
  trashIcon.classList.add("fas", "fa-trash");
  createdLi.appendChild(trashIcon);
  //clear and focus input
  clearAndFocus();
}

function clearAndFocus() {
  selectedInput.value = "";
  selectedInput.focus();
}