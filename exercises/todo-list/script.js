const formContainer = document.querySelector('.form');
const inputElement = document.querySelector('#input');
const todosULElementContainer = document.querySelector('.todos');

const todos = JSON.parse(localStorage.getItem('todos'));

if (todos) {
  todos.forEach((todo) => addTodo(todo));
}

formContainer.addEventListener('submit', function (event) {
  event.preventDefault();

  addTodo();
});

function addTodo(todo) {
  let todoText = inputElement.value;

  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const todoEl = document.createElement('li');
    if (todo && todo.completed) {
      todoEl.classList.add('completed');
    }

    todoEl.innerText = todoText;

    todoEl.addEventListener('click', function () {
      todoEl.classList.toggle('completed');
      updateLS();
    });

    todoEl.addEventListener('contextmenu', function (event) {
      event.preventDefault();

      todoEl.remove();
      updateLS();
    });

    todosULElementContainer.appendChild(todoEl);

    inputElement.value = '';

    updateLS();
  }
}

function updateLS() {
  todosEl = document.querySelectorAll('li');

  const todos = [];

  todosEl.forEach((todoEl) => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains('completed'),
    });
  });

  localStorage.setItem('todos', JSON.stringify(todos));
}
