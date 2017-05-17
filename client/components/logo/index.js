import React, { Component } from 'react';
import { logo, logoText } from './styles';

export default class Logo extends Component {
  render() {
    return  (
      <div className={ logo }>
        <span>
          <object type="image/svg+xml" data="/static/images/logo.svg"></object>
        </span>
        <span className={ logoText }>
          <h1>Trancoso</h1>
          <h6>vendas e aluguel</h6>
        </span>
      </div>
    )
  }
}

