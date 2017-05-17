import React, { Component } from 'react';
import { Link } from 'react-router';

import { connect } from 'react-redux';
import { mapStateToProps } from '../../containers/Content';

import ChooseLanguage from '../../containers/ChooseLanguage';

import { spacer, cf, menu, dropdown, navbar, upperOpts, mainOpts } from './styles';

let Navbar = ({ content }) => {
  return (
    <nav className={navbar}>
        <div className={upperOpts}>
          <ul className={ cf }>
            <li><ChooseLanguage lang="EN"/></li>
            <li><ChooseLanguage lang="PT"/></li>
            <li><Link to="#"><h5>{ content.contact }</h5></Link></li>
            <li><Link to="#"><h5>{ content.about }</h5></Link></li>
          </ul>
        </div>
        <div className={mainOpts}>
          <ul className={ cf }>
            <li><a href="#"><h4>{ content.services }</h4></a></li>
            <li><a href="#"><h4>{ content.comercialRent }</h4></a></li>
            <li><a href="#"><h4>{ content.rent }</h4></a></li>
            <li className={ dropdown }>
              <a href="#"><h4>{ content.sales }</h4></a>
              <div className={ menu }>
                <span className={ spacer }></span>
                <a href="#"><h4>abcdefghijklmno</h4></a>
                <span className={ spacer }></span>
                <a href="#"><h4>abcd</h4></a>
                <span className={ spacer }></span>
                <a href="#"><h4>testing</h4></a>
                <span className={ spacer }></span>
                <a href="#"><h4>wooow</h4></a>
                <span className={ spacer }></span>
              </div>
            </li>
          </ul>
        </div>
      </nav>
  )
}

Navbar = connect(mapStateToProps)(Navbar)

export default Navbar
