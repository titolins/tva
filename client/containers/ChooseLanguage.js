import React from 'react';
import { connect } from 'react-redux';
import { chooseLanguage } from '../actions';
import { Languages } from './Content';

let ChooseLanguage = ({ dispatch }) => {
  return (
    <div>
      <a href="#" onClick={e => {
        e.preventDefault();
        dispatch(chooseLanguage(Languages.PT));
        }}
      >PT</a> 
      <a href="#" onClick={e => {
        e.preventDefault();
        dispatch(chooseLanguage(Languages.EN));
        }}
      >EN</a>
    </div>
  )
}

ChooseLanguage = connect()(ChooseLanguage)

export default ChooseLanguage
