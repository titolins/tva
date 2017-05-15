export const Languages = {
  PT: 'PT_BR',
  EN: 'EN_US'
}

const Content = {
  PT_BR: {
    mainContent: {
      test: 'TESTE'
    }
  },
  EN_US: {
    mainContent: {
      test: 'TEST'
    }
  }
}

const getStaticContent = (lang, contentId) => {
  return Content[lang][contentId];
}

export const mapStateToProps = (state, ownProps) => {
  return {
    content: getStaticContent(state.lang.selected, ownProps.contentId)
  }
}

