/**
 * @jest-environment jsdom
 */
import addTodo from '../src/modules/add';
import { deleteTodo } from '../src/modules/delete';
import todoMock from '../__mock__/toDoMock';

describe('tests functions responsible for adding and deleting list items', () => {
  test('check if addTodo exists', () => {
    expect(addTodo).toBeDefined();
  });
  test('Add new todo', () => {
    localStorage.clear();
    todoMock('Solve DSA challeges');
    const addForm = document.querySelector('#todo-form');
    addTodo(addForm);
    const list = document.querySelector('ul');
    expect(list.children.length).toBe(1);
  });

  test('Deleting item from the list', () => {
    let container = document.querySelector('ul');
    const itemIndex = container.children[0].id;
    deleteTodo(itemIndex);
    container = document.querySelector('ul');
    expect(container.children.length).not.toBe(1);
  });
});
