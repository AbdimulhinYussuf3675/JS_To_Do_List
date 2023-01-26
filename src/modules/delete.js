import renderTodos from './todo.js';
import saveTodo from './save.js';
import getTodos from './getTask.js';


const deleteTodo = (id) => {
  const index = id;
  const todos = getTodos().filter((todo) => todo.index !== Number(index))
    .map((todo, i) => {
      todo.index = i - 1;
      return todo;
    });

  saveTodo(todos);
  renderTodos();
};

const deleteTask = ({ target }) => {
  const index = target.closest('svg').id;
  deleteTodo(index);
};

const eventDelete = (trashIcon) => {
  trashIcon.addEventListener('click', deleteTask);
};
const deleteListener = () => {
  const trashIcons = document.querySelectorAll('.trash-icon');
  trashIcons.forEach(eventDelete);
};

export default deleteListener;
export { deleteTodo };