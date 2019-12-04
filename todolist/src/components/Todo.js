import React, { Component } from "react";
import axios from "axios";

class Todo extends Component {
  state = {
    todoName: "",
    todoList: []
  };

  componentDidMount() {
    axios
      .get("https://reacthooks-5dd63.firebaseio.com/todos.json")
      .then(res => {
        const todoData = res.data;
        const todos = Object.keys(todoData).reduce((arr, key) => {
          arr = [...arr, { id: key, name: todoData[key].name }];
          return arr;
        }, []);
        this.setState({ todoName: "", todoList: todos });
      })
      .catch(err => console.log(err));
  }

  inputChangeHandler(event) {
    this.setState({
      todoName: event.target.value
    });
  }

  todoAddHandler = () => {
    axios
      .post("https://reacthooks-5dd63.firebaseio.com/todos.json", {
        name: this.state.todoName
      })
      .then(res => {
        const todoItem = { id: res.data.name, name: this.state.todoName };
        this.setState({
          todoList: [...this.state.todoList, todoItem],
          todoName: ""
        });
      })
      .catch(err => console.log(err));
  };

  todoRemoveHandler = todoId => {
    axios
      .delete(`https://reacthooks-5dd63.firebaseio.com/todos/${todoId}.json`)
      .then(() => {
        let newState = [...this.state.todoList].filter(
          todo => todo.id !== todoId
        );
        this.setState({
          todoList: newState
        });
      })
      .catch(err => console.log(err));
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
