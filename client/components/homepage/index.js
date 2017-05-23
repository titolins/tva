import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { example, p, link } from './styles';

import { addContent } from '../../actions';

import Header from '../header';
import MainPanel from './mainpanel';

export default class Homepage extends Component {
  /*eslint-disable */
  static onEnter({store, nextState, replaceState, callback}) {
    // Load here any data.
    callback(); // this call is important, don't forget it
    //
    /*eslint-enable */
  }

  render() {
    return <div>
      <Helmet
        title='Trancoso Vendas e Aluguel'
        meta={[
          {
            property: 'og:title',
            content: 'Aluguel e venda de casas em Trancoso'
          }
        ]} />
      <Header />
      <MainPanel contentId='mainContent'/>

    </div>
  }

}
