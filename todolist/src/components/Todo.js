import React, { Component } from "react";

class Todo extends Component {
  state = {
    todoName: "",
    todoList: []
  };

  componentDidMount() {
    const todos = [
      { id: "Task 10", name: "Task 1" },
      { id: "Task 21", name: "Task 2" },
      { id: "Task 32", name: "Task 3" }
    ];

    this.setState({ todoName: "", todoList: todos });
  }

  inputChangeHandler(event) {
    this.setState({
      todoName: event.target.value
    });
  }

  todoAddHandler = () => {
    const todoItem = {
      id: this.state.todoList.length + this.state.todoName,
      name: this.state.todoName
    };
    this.setState({
      todoList: [...this.state.todoList, todoItem],
      todoName: ""
    });
  };

  todoRemoveHandler = todoId => {
    let newState = [...this.state.todoList].filter(todo => todo.id !== todoId);
    this.setState({
      todoList: newState
    });
  };

  render() {
    return (
      <section>
        <div>
          <input
            type="text"
            placeholder="To Do"
            onChange={event => this.inputChangeHandler(event)}
            value={this.state.todoName}
          />
          <button type="button" onClick={this.todoAddHandler}>
            +
          </button>
        </div>
        <ul>
          {this.state.todoList.map(todo => {
            return (
              <li key={todo.id} onClick={() => this.todoRemoveHandler(todo.id)}>
                {todo.name}
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default Todo;
