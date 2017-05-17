import React from 'react';
import { connect } from 'react-redux';
import { selectLanguage } from '../actions';
import { Languages } from './Content';

import LanguageSelector from '../components/navbar/languageselector';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(selectLanguage(Languages[ownProps.lang]))
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    active: (state.lang.selected === Languages[ownProps.lang]),
    lang: ownProps.lang
  }
}

const ChooseLanguage = connect(
  mapStateToProps,
  mapDispatchToProps
)(LanguageSelector)

export default ChooseLanguage
