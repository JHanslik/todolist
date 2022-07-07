// VARIABLES
const todoImput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const todoPriority = document.querySelector("#priority");

// TEST LI MODIFICATION
const modificationClass = document.querySelector("modification-button");
console.log(modificationClass);

// FUNCTIONS
const onTaskSubmit = (event) => {
  event.preventDefault();

  // Todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // Créer le Select
  const newSelect = document.createElement("div");
  newSelect.innerHTML = `<select name="" id="">
        <option value="todo">To do</option>
        <option value="doing">Doing</option>
        <option value="done">Done (fait)</option>
    </select>`;
  newSelect.classList.add("status");
  todoDiv.appendChild(newSelect);

  // Li creation
  const newTodo = document.createElement("li");
  newTodo.innerText = todoImput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  // Priority number
  const newPriority = document.createElement("li");
  newPriority.innerText = todoPriority.value;
  newPriority.classList.add("item-priority");
  todoDiv.appendChild(newPriority);

  // modification button
  const modificationButton = document.createElement("button");
  modificationButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
  modificationButton.classList.add("modification-button");
  todoDiv.appendChild(modificationButton);

  // Delete Button
  const eraseButton = document.createElement("button");
  eraseButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  eraseButton.classList.add("erase-button");
  todoDiv.appendChild(eraseButton);

  // ToDo add to the list
  todoList.appendChild(todoDiv);

  //  Reset de la value
  todoImput.value = "";
  todoPriority.value = "";
};

//  Delete Part

const deleteChecked = (e) => {
  const item = e.target;
  if (item.classList[0] === "erase-button") {
    // supprimer toute la barre
    const todo = item.parentElement;
    todo.remove();
  }
};
todoList.addEventListener("click", deleteChecked);

// Modification Part

const modification = () => {
  console.log("ok");
};
modificationClass.addEventListener("click", modification);
