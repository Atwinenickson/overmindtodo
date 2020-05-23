import React from "react";
import { useApp } from "../app";

import TodoItem from "./TodoItem";
import TodoFooter from "./TodoFooter";

const TodoApp = () => {
  const { state, actions } = useApp();

  return (
    <div>
      <header className="header">
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={state.newTodoTitle}
          onChange={(event) =>
            actions.changeNewTodoTitle(event.currentTarget.value)
          }
          onKeyDown={(event) => {
            if (event.keyCode !== 13) return;
            actions.addTodo();
          }}
        />
      </header>
      <section className="main">
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          onChange={() => actions.toggleAllTodos()}
          checked={state.isAllTodosChecked}
        />
        <label htmlFor="toggle-all">Mark all as completed</label>
        <ul className="todo-list">
          {state.currentTodos.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                isEditing={state.editingTodoId === todo.id}
              />
            );
          })}
        </ul>
      </section>
      <TodoFooter />
    </div>
  );
};

export default TodoApp;
