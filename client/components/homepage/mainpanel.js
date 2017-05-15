import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from '../../containers/Content';

let MainPanel = ({ content }) =>{
  return (
    <div>{ content.test }</div>
  )
}

MainPanel = connect(mapStateToProps)(MainPanel)

export default MainPanel
