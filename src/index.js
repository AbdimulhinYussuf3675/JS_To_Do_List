import './style.css';
import addTodo from './modules/add.js';
import renderTodos from './modules/todo.js';
import clearCompleted from './modules/complete';

const addTodoForm = document.querySelector('#todo-form');
const clearTodo = document.querySelector('.complete-clear');
const addIcon = document.querySelector('#addbtn')

clearTodo.addEventListener('click', () =>{
  clearCompleted();
})
renderTodos();

addIcon.addEventListener('click', () => {
  addTodo(addTodoForm);
  addTodoForm.reset();
});

addTodoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addTodo(addTodoForm);
  renderTodos();
  addTodoForm.reset();
});
