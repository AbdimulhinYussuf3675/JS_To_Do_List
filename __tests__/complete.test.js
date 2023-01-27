/**
 * @jest-environment jsdom
 */
import { completedTest } from '../src/modules/clear';
import addTodo from "../src/modules/add";
import todoMock from "../__mock__/toDoMock";

describe('tests functions responsible for marking completed list from items', () => {
    test('Add new todo', () => {
        localStorage.clear();
        todoMock('Solve DSA challeges');
        const addForm = document.querySelector('#todo-form');
        addTodo(addForm);
        const list = document.querySelector('ul');
        expect(list.children.length).toBe(1);
      });

    test('check if todo is marked compleated', () => {
        let container = document.querySelector('ul');
        const item = container.children[0].id;
        completedTest(item);
        container = document.querySelector('ul');
        expect(container.children[0].querySelector('input').checked).toBe(true);
    })
});
