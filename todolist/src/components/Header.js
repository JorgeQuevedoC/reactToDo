import React, { Component } from "react";
import authContext from "../auth-context";

class Header extends Component {
  render() {
    let context = this.context;
    return (
      <header>
        {context.status ? (
          <button onClick={this.props.onLoadTodos}>Todo List</button>
        ) : null}
        <button onClick={this.props.onLoadAuth}>Auth</button>
      </header>
    );
  }
}
Header.contextType = authContext;
export default Header;
