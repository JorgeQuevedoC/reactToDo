import React, { Component } from 'react';
import Todo from './components/Todo';
import Header from './components/Header';
import Auth from './components/Auth';
import AuthContext from './auth-context';

class App extends Component {
  state = {
    currentPage: 'main',
    authStatus: false,
  };

  componentDidMount() {
    this.setState({
      currentPage: 'main',
      authStatus: false,
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
      authStatus: true,
    });
  };

  logout = () => {
    this.setState({
      currentPage: 'auth',
      authStatus: false,
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
          value={{
            status: this.state.authStatus,
            login: this.login,
            logout: this.logout,
          }}
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
