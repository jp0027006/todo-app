import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    content: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.AddTodo(this.state);
    this.setState({
      content: "",
    });
  };

  render() {
    return (
      <div>
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <label className="sr-only" htmlFor="content">
            Add Todo:
          </label>
          <input
            className="form-control mb-2"
            type="text"
            name="content"
            id="content"
            value={this.state.content}
            onChange={this.handleChange}
          />
          <button className="btn btn-primary mb-2">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
