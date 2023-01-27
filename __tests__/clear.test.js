/**
 * @jest-environment jsdom
 */

import clearCompleted from "../src/modules/complete";
import addTodo from "../src/modules/add";
import todoMock from "../__mock__/toDoMock";
import { completedTest } from "../src/modules/clear";

describe("Test for both marked new task and editing task in the list", () => {
  test("Add new todo", () => {
    localStorage.clear();
    todoMock("Solve DSA challeges");
    const addForm = document.querySelector("#todo-form");
    addTodo(addForm);
    const list = document.querySelector("ul");
    expect(list.children.length).toBe(1);
  });
  test("checks is a new todo is marked", () => {
    let container = document.querySelector("ul");
    const item = container.children[0].id;
    completedTest(item);
    expect(container.children[0].querySelector("input").checked).not.toBe(true);
  });

  test("check if the todos are cleared", () => {
    clearCompleted();
    const completedTasks = document.querySelectorAll("input:checked");
    expect(completedTasks.length).toBe(0);
  });
});
