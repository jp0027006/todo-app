import React, { Component } from "react";
import Todo from "./Todo";
import Addtodo from "./Addtodo";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "Buy PS5" },
      { id: 2, content: "Pay Bills" },
      { id: 3, content: "Go to the gym" }
    ],
  };

  AddTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos,
    });
  };

  DeleteTodo = (id) => {
    let todo = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos: todo,
    });
  };

  render() {
    return (
      <div className="todo-app container mt-5" style={{ maxWidth: "600px" }}>
        <div className="card text-bg-light mb-3">
          <div className="card-header" style={{ textAlign:"center" }}>
            <h1 className="text-primary">Todo's list</h1>
          </div>
          <div className="card-body">
            <Todo DeleteTodo={this.DeleteTodo} todos={this.state.todos} />
            <Addtodo AddTodo={this.AddTodo} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
