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

    fetch("/api/houses",{
      method: 'GET',
      dataType: 'jsonp'
    })
      .then((response) => {
        response.json();
        console.log(response);
        console.log(response.keys());
        console.log(response.length);
      }).then((responseJson) => {
        console.log(responseJson.keys());
        console.log(responseJson.length);
        store.dispatch(addContent(responseJson));
      }).then(() => {
        callback(); // this call is important, don't forget it
      })
      .catch((error) => {
        console.log(error);
      });


    //
  }
  /*eslint-enable */

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
