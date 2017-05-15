import React, { Component } from 'react';
import ChooseLanguage from '../../containers/ChooseLanguage';
import Logo from '../logo';

import { header } from './styles';

export default class Header extends Component {
  render() {
    return (
      <div className={ header }>
        <Logo />
        <ChooseLanguage />
      </div>
    )
  }

}
