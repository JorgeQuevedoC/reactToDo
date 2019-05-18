import React, { Component } from 'react';
import { HeaderContainer, HeaderButton } from './styled';
import authContext from "../auth-context";

class Header extends Component {
  render() {
    let context = this.context;
    return (
      <HeaderContainer>
        {context.status ? (
          <HeaderButton onClick={this.props.onLoadTodos}>
            Todo List
          </HeaderButton>
        ) : null}
        <HeaderButton onClick={this.props.onLoadAuth}>Auth</HeaderButton>
      </HeaderContainer>
    );
  }
}
Header.contextType = authContext;
export default Header;
