const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

let todos = [];

// Function to render todos
function renderTodos() {
  // Clear existing todos
  todoList.innerHTML = '';

  // Render each todo item
  todos.forEach((todo, index) => {
    const todoItem = createTodoElement(todo, index);
    todoList.appendChild(todoItem);
  });
}

// Function to create todo list item element
function createTodoElement(todo, index) {
  const todoItem = document.createElement('li');
  todoItem.classList.add('bg-white', 'rounded-md', 'p-2', 'flex', 'justify-between', 'items-center');
  const isChecked = todo.completed ? 'checked' : '';
  todoItem.innerHTML = `
    <label class="flex items-center">
      <input type="checkbox" class="mr-2" ${isChecked} onchange="toggleCompleted(${index})">
      <span class="${todo.completed ? 'line-through' : ''}">${todo.text}</span>
    </label>
    <button class="text-blue-500 font-bold hover:text-red-700" onclick="removeTodo(${index})">Remove</button>
  `;
  return todoItem;
}

// Function to add a new todo
function addTodo(event) {
  event.preventDefault();
  const todoText = todoInput.value.trim();

  if (todoText === '') {
    alert("You haven't entered a task to add to the list");
    return;
  }

  if (todos.some(todo => todo.text === todoText)) {
    alert('This task already exists in your to-do list');
    return;
  }

  todos.push({ text: todoText, completed: false });
  renderTodos();
  todoInput.value = '';
}

// Function to remove a todo
function removeTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

// Function to toggle todo completion status
function toggleCompleted(index) {
  todos[index].completed = !todos[index].completed;
  renderTodos();
}

// Event listener for form submission
todoForm.addEventListener('submit', addTodo);

// Initial rendering of todos
renderTodos();






