import React, { Component } from 'react';
import Logo from '../logo';
import Navbar from '../navbar';

import { header } from './styles';

export default class Header extends Component {
  render() {
    return (
      <div className={ header }>
        <Logo />
        <Navbar contentId="navbar" />
      </div>
    )
  }

}
