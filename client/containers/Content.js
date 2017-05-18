export const Languages = {
  PT: 'PT_BR',
  EN: 'EN_US'
}

export const Content = {
  PT_BR: {
    mainContent: {
      test: 'teste'
    },
    navbar: {
      about: 'sobre trancoso',
      contact: 'contato',
      sales: 'vendas',
      rent: 'aluguel',
      comercialRent: 'aluguel comercial',
      services: 'serviços'
    }

  },
  EN_US: {
    mainContent: {
      test: 'test'
    },
    navbar: {
      about: 'about trancoso',
      contact: 'contact',
      sales: 'sales',
      rent: 'rent',
      comercialRent: 'comercial rent',
      services: 'services'
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

