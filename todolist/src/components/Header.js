import React, { Component } from 'react';
import { HeaderContainer, HeaderButton } from './styled';

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

export default Header;
