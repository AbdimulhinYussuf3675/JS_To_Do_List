import saveTodo from './save.js';
import getTodos from './getTask.js';
import renderTodos from './todo.js';

const validated = (addTodoForm, todos) => {
  const description = addTodoForm.children[0].value.trim();
  if (description.length > 0) {
    return { description, completed: false, index: todos.length + 1 };
  }
  return null;
};

const addTodo = (addTodoForm) => {
  const todos = getTodos();
  const todo = validated(addTodoForm, todos);
  todos.push(todo);
  if (todo === null) return;
  saveTodo(todos);
  renderTodos();
};

export default addTodo;
