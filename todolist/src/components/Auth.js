import React, { Component } from "react";
import authContext from "../auth-context";

class Auth extends Component {
  render() {
    return (
      <authContext.Consumer>
        {({ status, login, logout }) => {
          let buttonToDisplay = status ? (
            <section>
              <button onClick={logout}>
                Haz click aquí para cerrar sesión
              </button>
            </section>
          ) : (
            <section>
              <button onClick={login}>
                Haz click aquí para iniciar sesión
              </button>
            </section>
          );
          return buttonToDisplay;
        }}
      </authContext.Consumer>
    );
  }
}

export default Auth;
