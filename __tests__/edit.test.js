/**
 * @jest-environment jsdom
 */

import addTodo from "../src/modules/add";
import { editTest } from "../src/modules/edit";
import todoMock from "../__mock__/toDoMock";

describe("Test editing task in the list", () => {
  test("Add new todo", () => {
    localStorage.clear();
    todoMock("Solve DSA challeges");
    const addForm = document.querySelector("#todo-form");
    addTodo(addForm);
    const list = document.querySelector("ul");
    expect(list.children.length).toBe(1);
  });
  test('check Editing Todo', () => {
    const container = document.querySelector('ul');
    const item = container.children[0].id;
    editTest(item, 'Solve DSA challeges');
    expect(container.children[0].textContent.trim()).toBe('Solve DSA challeges')
  })
});
