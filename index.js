// VARIABLES
const todoImput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const todoPriority = document.querySelector("#priority");
const filterOption = document.querySelector("filter");
const btn = document.getElementById("btn");

let tasksArray = [];

// FUNCTIONS
const onTaskSubmit = (event) => {
  event.preventDefault();

  // ajout valeur au tableau
  tasksArray.push({
    task: todoImput.value,
    priority: todoPriority.value,
    status: "To do",
  });
  displayTasks()
  
  // Reset de la value
  todoImput.value = "";
  todoPriority.value = "";

};



// fonction pour push dans le tableau
const displayTasks = array => {
  // reset de todoList dans le DOM
  todoList.innerHTML = ""

  // boucle pour insérer éléments dans le dom
  tasksArray.forEach((task, i) => {
    todoList.innerHTML += `<li class="todo">
        <div class="status">
        <select name="" id="select-${i}">
        <option value="todo">To do</option>
        <option value="doing">Doing</option>
        <option value="done">Done</option>
        </select>
        </div>
        
        <p class = "todo-item">${tasksArray[i].task}</p>
        
        <p class="item-priority">${tasksArray[i].priority}</p>
        
        <button class="modification-button">
        <i class="fa-solid fa-pen-to-square"></i>
        </button>
        
        <button class="erase-button" id="erase-${i}" onclick="deleteChecked()">
        <i class="fa-solid fa-trash-can"></i>
        </button>
        </li>
        `;

    // status function
    const newSelect = document.getElementById(`select-${i}`);
    newSelect.addEventListener("change", (e) => {
      completion(e, i);
      inProgress(e, i);
    });

    // // delete function
    // const delLine = document.getElementById(`erase-${i}`);
    // delLine.addEventListener("click", (e) => {
    //   // console.log (e)
    //   deleteChecked(e, i);
    // });

    // filter function
    // const filter = document.getElementById(`filter-${i}`)
    // filter.addEventListener("change", (e) => {
    //   filterTasks(e, i)
    // })
  });
}

// displayTask function

//  Button Part

const deleteChecked = () => {
  tasksArray.splice(this, 1);
  displayTasks()
  console.log(tasksArray);
};
//   modification part
// if (item.classList[0] === "modification-button") {
//   const modification = item.parentNode.childNodes[1];
//   console.log(modification);

// };

const completion = (e, i) => {
  console.log(i);
  const todo = e.target.parentElement.parentElement;
  if (e.target.value === "done" && i === tasksArray.length - 1) {
    todo.classList.add("completedEnd");
  } else if (e.target.value === "done") {
    todo.classList.add("completed");
  } else {
    todo.classList.remove("completed");
  }
};

const inProgress = (e, i) => {
  const todo = e.target.parentElement.parentElement;
  if (e.target.value === "doing" && i === tasksArray.length - 1) {
    todo.classList.add("inProgressEnd");
  } else if (e.target.value === "doing") {
    todo.classList.add("inProgress");
  } else {
    todo.classList.remove("inProgress");
  }
};
