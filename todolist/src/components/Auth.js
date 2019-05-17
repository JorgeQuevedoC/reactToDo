import React, { Component } from 'react';
import { AuthButton, LogButton, Section } from './styled';

class Auth extends Component {
  render() {
    let context = this.context;
    return (
      <Section>
        {context.status ? (
          <LogButton onClick={context.logout}>
            Haz click aquí para cerrar sesión
          </LogButton>
        ) : (
          <AuthButton onClick={context.login}>
            Haz click aquí para iniciar sesión
          </AuthButton>
        )}
      </Section>
    );
  }
}

export default Auth;
