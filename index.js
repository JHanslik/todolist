// VARIABLES
const todoImput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const todoPriority = document.querySelector("#priority");
let todoStatus;
const btn = document.getElementById("btn");
const filterSelect = document.getElementById("filter");
const todoRandom = document.getElementById("random");
let tasksArray = [];


// FUNCTIONS
const onTaskSubmit = (event) => {
  event.preventDefault();
  // ajout valeur au tableau
  let task = {
    task: todoImput.value,
    priority: todoPriority.value,
    status: "Todo",
    class: "",
  };
  tasksArray.push(task);
  displayTasks();

  // Reset de la value
  todoImput.value = "";
  todoPriority.value = "";
};

// fonction pour push dans le tableau
const displayTasks = (array) => {
  // reset de todoList dans le DOM
  todoList.innerHTML = "";

  // boucle pour insérer éléments dans le dom
  tasksArray.forEach((task, i) => {
    todoList.innerHTML += `
    <li class="todo ${tasksArray[i].class}" id="item-${i}">
      <p class="status">${tasksArray[i].status}</p>
        
      <p class = "todo-item">${tasksArray[i].task}</p>
        
      <p class="item-priority">${tasksArray[i].priority}</p>
        
      <button class="modification-button" onclick="edit(${i})">
        <i class="fa-solid fa-pen-to-square"></i>
      </button>
        
      <button class="erase-button" id="erase-${i}" onclick="deleteChecked(${i})">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </li>
    `;

    // console.log (tasksArray)
  });
};

//  Button Part

const deleteChecked = (i) => {
  tasksArray.splice(i, 1);
  displayTasks();
};

// Edit Function
const edit = (i) => {
  let liTask = document.getElementById(`item-${i}`);
  let task = tasksArray[i];

  liTask.innerHTML = `
  <div class="status">
    <select name="" id="item-${i}-select" onchange="completion(${i})">
      <option value="Status">Status</option>
      <option value="Todo">To do</option>
      <option value="Doing">Doing</option>
      <option value="Done">Done</option>
    </select>
  </div>
  
  <form>
    <input type="text" value="${tasksArray[i].task}" class="todo-item-edit" id="item-${i}-input" />
    <select name="Priority" id="item-${i}-priority" class="item-priority-edit">
      <option value="">Priority</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
  </form>

  <button class="modification-button" onclick="displayTasks()">
    <i class="fa-solid fa-xmark"></i>
  </button>
        
  <button class="erase-button" id="modify-${i}" onclick="modify(${i})">
    <i class="fa-solid fa-check"></i>
  </button>
  `;
};

// Status Function
const completion = (i) => {
  const select = document.getElementById(`item-${i}-select`);
  const todo = select.parentElement.parentElement;
  if (select.value === "Done" && i === tasksArray.length - 1) {
    tasksArray[i].class = "completedEnd";
    todo.classList.add("completedEnd");
  } else if (select.value === "Doing" && i === tasksArray.length - 1) {
    tasksArray[i].class = "inProgressEnd";
    todo.classList.add("inProgressEnd");
  } else if (select.value === "Done") {
    tasksArray[i].class = "completed";
    todo.classList.add("completed");
  } else if (select.value === "Doing") {
    tasksArray[i].class = "inProgress";
    todo.classList.add("inProgress");
  } else {
    tasksArray[i].class = "";
    todo.classList.remove("completed");
  }
};

// Edit Validation Function
const modify = (i) => {
  let input = document.getElementById(`item-${i}-input`);
  let select = document.getElementById(`item-${i}-select`);
  let priority = document.getElementById(`item-${i}-priority`);
  tasksArray[i].task = input.value;
  tasksArray[i].priority = priority.value;
  tasksArray[i].status = select.value;
  displayTasks();
};

// Filter function (not working)
function filter(status) {
  console.log(tasksArray);
  let filteredTasks = tasksArray.filter(function (task) {
    return task.status === status || status === "all";
  });
  displayTasks(filteredTasks);
  console.log("ué");
}

// Random Function
const random = () => {
  let randomTasks = [
    "Aller faire les courses",
    "Aller se faire tester",
    "Faire le gateau pour l'anniversaire",
    "Finir le projet Javascript",
    "Chercher une alternance",
  ];

  let task = {
    task: randomTasks[Math.floor(Math.random() * randomTasks.length)],
    priority: Math.floor(Math.random() * 6),
    status: "Todo",
    class: "",
  };

  tasksArray.push(task);
  displayTasks(task);
};
todoRandom.addEventListener("click", random);

// Priority Order Function
function orderPriority(operator) {
  var sortedTasks = [];

  if (operator === "+") {
    sortedTasks = tasksArray.sort(function (a, b) {
      return b.priority - a.priority;
    });
  } else {
    sortedTasks = tasksArray.sort(function (a, b) {
      return a.priority - b.priority;
    });
  }

  displayTasks(sortedTasks);
}
