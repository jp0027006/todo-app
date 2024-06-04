import React from "react";

const Todo = ({ todos, DeleteTodo }) => {
  const todolist = todos.length ? (
    todos.map((todo) => (
      <div className="collection-item card-text mb-3" key={todo.id}>
        <div className="d-flex justify-content-between">
          <span>{todo.content}</span>
          <button
            className="btn btn-danger me-md-2"
            onClick={() => {
              DeleteTodo(todo.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    ))
  ) : (
    <strong className="center card-text">You have no todo's left, YAY !!!</strong>
  );

  return <div className="todo-collection">{todolist}</div>;
};

export default Todo;
