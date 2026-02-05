const newToDo = document.getElementById("new-to-do");
const submit = document.getElementById("submit");

submit.disabled = newToDo.value.trim() === "";

newToDo.addEventListener("input", () => {
  if (newToDo.value.trim() === "") {
    submit.disabled = true;
  } else {
    submit.disabled = false;
  }
});

function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  list.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.dataset.index = index;
    
    const taskText = document.createElement("span");
    taskText.textContent = todo.task;
    taskText.classList.add("me-2");

    const span = document.createElement("span");
    span.classList.add("badge", "bg-primary", "rounded-pill");

    const check = document.createElement("i");
    check.classList.add("fa-solid", "fa-check");
    check.setAttribute("aria-hidden", "true");

    const trash = document.createElement("i");
    trash.classList.add("fa-solid", "fa-trash");
    trash.setAttribute("aria-hidden", "true");

    span.appendChild(check);
    span.appendChild(trash);
    
    li.appendChild(taskText);
    li.appendChild(span);

    list.appendChild(li);    
  });
}

let todos = [
  { task: "Whisper a secret to a passing bird", completed: false },
  { task: "Leave a tiny cookie for the garden gnomes", completed: false }
];

populateTodoList(todos);

function addNewTodo(event) {
  event.preventDefault();
  
  const value = newToDo.value.trim();
  if (value === "") return;

  todos.push({task: value, completed: false});
  populateTodoList(todos);

  newToDo.value = "";
  submit.disabled = true;
}

submit.addEventListener("click", addNewTodo);

const ul = document.getElementById("todo-list");

ul.addEventListener("click", (e) => {
  const li = e.target.closest("li"); 
  if (!li) return;

  const index = li.dataset.index;

  if (e.target.classList.contains("fa-trash")) {
    todos.splice(index, 1);
    populateTodoList(todos);
  } else if (e.target.classList.contains("fa-check")) {
    todos[index].completed = !todos[index].completed;
    li.classList.toggle("completed");
  }
});


// Advanced challenge: Write a function that checks the todos in the todo list and deletes the completed ones
// (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
