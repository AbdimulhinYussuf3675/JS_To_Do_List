import renderTodos from './todo';
import getTodos from './getTask';
import saveTodo from './save';

const editInterface = (target) => {
  const background = '#e7e5b0';
  const parentList = target.closest('li');
  parentList.style.paddingBlock = '3px';
  parentList.style.background = background;
  const description = parentList.querySelector('p').textContent;
  parentList.querySelector('p').remove();
  parentList.querySelector('.trash-icon').style.display = 'block';
  parentList.querySelector('.menuIcon').style.display = 'none';
  const todoContentContiner = parentList.querySelector('div');
  const form = document.createElement('form');
  form.setAttribute('id', 'todo-form');
  form.className = 'todo-item-form';
  const input = document.createElement('input');
  input.setAttribute('name', 'description');
  input.setAttribute('autofocus', 'true');
  input.setAttribute('value', description);
  input.style.background = background;
  form.setAttribute('id', 'todo-form');
  form.appendChild(input);
  todoContentContiner.appendChild(form);
};

const verify = (value) => {
  const description = value.trim();
  if (description.length > 0) {
    return { description, completed: false, index: 1 };
  }
  return null;
};

const editTest = (id, description) => {
  const todos = getTodos();
  const editedTodo = verify(description);
  if (editedTodo === null) return;
  const index = id;
  todos[index - 1].description = editedTodo.description;
  saveTodo(todos);
  renderTodos();
};

const update = (e) => {
  e.preventDefault();
  editTest(e.target.menuIcon.closest('svg').id, e.target.children[0].value);
};

const updateTodoFormListener = ({ target }) => {
  editInterface(target);
  const updateForm = document.querySelector('.todo-item-form');
  updateForm.menuIcon = target;
  updateForm.addEventListener('submit', update);
};

const editInterfaceListener = (menuIcon) => {
  menuIcon.addEventListener('click', updateTodoFormListener);
};

const checkUpdateEvent = () => {
  const menuIcon = document.querySelectorAll('.menuIcon');
  menuIcon.forEach(editInterfaceListener);
};

export default checkUpdateEvent;
export { editTest };