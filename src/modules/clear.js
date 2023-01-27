import renderTodos from './todo';
import saveTodo from './save';
import getTodos from './getTask';

const completedTest = (id) => {
  const index = id;
  const todos = getTodos();

  if (todos[index - 1].completed) {
    todos[index - 1].completed = false;
  } else {
    todos[index - 1].completed = true;
  }

  saveTodo(todos);
  renderTodos();
};

const markTodo = ({ target }) => {
  completedTest(target.id);
};

const completedListener = (checkbox) => {
  checkbox.addEventListener('click', markTodo);
};

const checkMarkListener = () => {
  const checkboxes = document.querySelectorAll('.checkbox');
  checkboxes.forEach(completedListener);
};

export default checkMarkListener;
export { completedTest };
