import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default class App extends Component {

  render() {
    return <div>
      <Helmet title='Trancoso vendas e aluguel' />
      {this.props.children}
    </div>;
  }

}
