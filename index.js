// VARIABLES
const todoImput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const todoPriority = document.querySelector("#priority");
const filterOption = document.querySelector("filter");
// const todoStatus = document.querySelector(".status")

let tasksArray = []


// FUNCTIONS
const onTaskSubmit = (event) => {
    event.preventDefault();

    // ajout valeur au tableau
    tasksArray.push ({task: todoImput.value, priority: todoPriority.value, status:"To do"})
    console.log (tasksArray)
    todoList.innerHTML=""
    tasksArray.forEach ((task, i) => {
        todoDiv = document.createElement("li")
        todoList.appendChild(todoDiv)
        // Todo Li
        // const todoDiv = document.createElement("li");
        todoDiv.classList.add("todo");
        todoDiv.innerHTML = `<div class="status">
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
        
        <button class="erase-button" id="erase-${i}">
        <i class="fa-solid fa-trash-can"></i>
        </button>
        `
        const newSelect = document.getElementById(`select-${i}`)
        newSelect.addEventListener("change", (e) => {
            completion (e, i)
        })
        console.log (tasksArray[i].task)

        const delLine = document.getElementById(`erase-${i}`)
        delLine.addEventListener("click", () => {
            deleteChecked(i)
        })
        console.log()
        
    // Reset de la value
    
})
todoImput.value = "";
todoPriority.value = ""
    // console.log (todoDiv)
}
    
//  Button Part

const deleteChecked = (e, i) => {
  const item = e.target;
//   console.log(item);
  //   Delete Part
  if (item.classList[0] === "erase-button") {
    // supprimer toute la barre
    const todo = item.parentElement;
    todo.remove();
    tasksArray[i].remove()
  }
  //   modification part
  if (item.classList[0] === "modification-button") {
    const modification = item.parentNode.childNodes[1];
    console.log(modification);

  }
};

const completion = (e, i) => {
  console.log(i);
  const todo = e.target.parentElement.parentElement;
  if (e.target.value === "done") {
    todo.classList.add("completed");
  } else {
    todo.classList.remove("completed");
  }

}
