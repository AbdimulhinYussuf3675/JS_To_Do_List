import './style.css';
import addTodo from './modules/add.js';
import renderTodos from './modules/todo.js';

const addTodoForm = document.querySelector('#todo-form');
renderTodos();

addTodoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addTodo(addTodoForm);
  renderTodos();
  addTodoForm.reset();
});
