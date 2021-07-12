import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { PasswordGenerator } from './components/Counter';

import './custom.css'

export default class App extends Component {
  static displayName = 'Password Generator';

  render () {
    return (
      <Layout>
        <Route path='/passwordGenerator' component={PasswordGenerator} />
      </Layout>
    );
  }
}
