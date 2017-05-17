import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from '../../containers/Content';

let MainPanel = ({ content }) => {
  return (
    <div>
      <img src="http://placehold.it/1207x704"></img>
    </div>
  )
}

MainPanel = connect(mapStateToProps)(MainPanel)

export default MainPanel
