import React, { Component } from 'react';

export class PasswordGenerator extends Component {
  static displayName = 'Password Generator';

  constructor(props) {
    super(props);
    this.state = { password: '' };
      this.generatePassword = this.generatePassword.bind(this);
  }

    generatePassword() {
    this.setState({
        password: Math.floor((1 + Math.random()) * 0x1000000000000000).toString(16)
    });
  }

  render() {
    return (
      <div>
        <p>Generate a Secure Random Password:</p>
            <button className="btn btn-primary" onClick={this.generatePassword}>Generate Password</button>

        <p aria-live="polite">Password: <strong>{this.state.password}</strong></p>

      </div>
    );
  }
}
