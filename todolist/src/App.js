import React, { Component } from 'react';
import Todo from './components/Todo';
import Header from './components/Header';
import Auth from './components/Auth';
import AuthContext from './auth-context';

class App extends Component {
  state = {
    currentPage: 'main',
    providerValue:{
      status:false,
      login:this.login,
      logout:this.logout
    }
  };

  componentDidMount() {
    this.setState({
      currentPage: 'main',
      providerValue: {
        login:this.login,
        logout:this.logout,
        status:false,
      },
    });
  }

  onAuthHandler = () => {
    this.setState({
      currentPage: 'auth',
    });
  };

  login = () => {
    this.setState({
      currentPage: 'todo',
      providerValue:{ 
        ...this.state.providerValue,
        status:true
      }
    });
  };

  logout = () => {
    this.setState({
      currentPage: 'auth',
      providerValue: {
        ...this.state.providerValue,
        status:false
      },
    });
  };

  onTodoHandler = () => {
    this.setState({
      currentPage: 'todo',
    });
  };

  render() {
    return (
      <>
        <AuthContext.Provider
          value={this.state.providerValue}
        >
          <Header
            onLoadTodos={this.onTodoHandler}
            onLoadAuth={this.onAuthHandler}
          />
          {this.state.currentPage === 'todo' ? <Todo /> : ''}
          {this.state.currentPage === 'auth' ? <Auth /> : ''}
        </AuthContext.Provider>
      </>
    );
  }
}

export default App;
