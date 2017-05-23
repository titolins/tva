import React, { Component } from 'react';
import { Link } from 'react-router';

import { connect } from 'react-redux';
import { mapStateToProps } from '../../containers/Content';

import ChooseLanguage from '../../containers/ChooseLanguage';

import {
  dropdownItem,
  spacer,
  cf,
  menu,
  dropdown,
  navbar,
  upperOpts,
  mainOpts
} from './styles';


class Navbar extends Component {
  buildDropdownMenu = (menuItems) => {
    return (
      <div className={ menu }>
        <span className={ spacer }></span>
        {menuItems.map((item) => {
          return (
            <span className={ dropdownItem }>
              <a href="#"><h4>{ item.title }</h4></a>
              <span className={ spacer }></span>
            </span>
          )
        })}
      </div>
    )
  }

  componentDidMount() {
    console.log("component did mount");
    fetch("/api/houses")
      .then((response) => {
        console.log(response)
        response.text()
      }).then((responseJson) => {
        console.log(responseJson);
      })
  }


  render() {
    let { content } = this.props;
    let salesComponents = this.buildDropdownMenu(content.sales.items || []);

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
              <a href="#"><h4>{ content.sales.title }</h4></a>
              { salesComponents }
            </li>
          </ul>
        </div>
      </nav>
    )
  }

}

Navbar = connect(mapStateToProps)(Navbar)


/*
Navbar.contextTypes = {
  redux: React.PropTypes.object
}

Navbar.componentDidMount = () => {
  console.log("ok transition");
  //console.log(this.context.redux);
  fetch("/api/houses")
  .then((response) => {
    console.log(response);
    response.json();
  }).then((responseJson) => {
    console.log(responseJson);
  })
}
*/

export default Navbar
