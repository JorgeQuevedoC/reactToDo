import React, { Component } from 'react';
import axios from 'axios';
import {
  Section,
  TodoInput,
  TodoContainer,
  TodoButton,
  TodoListElement,
  TodoLi,
} from './styled';

class Todo extends Component {
  state = {
    todoName: '',
    todoList: [],
  };

  componentDidMount() {
    axios
      .get('https://reacthooks-5dd63.firebaseio.com/todos.json')
      .then(res => {
        const todoData = res.data;
        const todos = Object.keys(todoData).reduce((arr, key) => {
          arr = [...arr, { id: key, name: todoData[key].name }];
          return arr;
        }, []);
        this.setState({ todoList: todos });
      })
      .catch(err => console.log(err));
  }

  inputChangeHandler(event) {
    this.setState({
      todoName: event.target.value,
    });
  }

  todoAddHandler = () => {
    axios
      .post('https://reacthooks-5dd63.firebaseio.com/todos.json', {
        name: this.state.todoName,
      })
      .then(res => {
        const todoItem = { id: res.data.name, name: this.state.todoName };
        this.setState({
          todoList: [...this.state.todoList, todoItem],
        });
      })
      .catch(err => console.log(err));
  };

  todoRemoveHandler = todoId => {
    axios
      .delete(`https://reacthooks-5dd63.firebaseio.com/todos/${todoId}.json`)
      .then(() => {
        let newState = [...this.state.todoList].filter(
          todo => todo.id !== todoId,
        );
        this.setState({
          todoList: newState,
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Section>
        <TodoContainer>
          <TodoInput
            type="text"
            placeholder="Todo"
            onChange={this.inputChangeHandler}
            value={this.state.todoName}
          />
          <TodoButton type="button" onClick={this.todoAddHandler}>
            +
          </TodoButton>
        </TodoContainer>
        <TodoListElement>
          {this.state.todoList.map(todo => {
            return (
              <TodoLi
                key={todo.id}
                onClick={() => this.todoRemoveHandler(todo.id)}
              >
                {todo.name}
              </TodoLi>
            );
          })}
        </TodoListElement>
      </Section>
    );
  }
}

export default Todo;
