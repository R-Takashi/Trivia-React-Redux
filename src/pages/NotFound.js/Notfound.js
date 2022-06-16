import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotFoundStyle from './styles';

export default class Notfound extends Component {
  render() {
    const { history } = this.props;
    return (
      <NotFoundStyle>
        <header>
          <h1>Como vc chegou aqui?</h1>
        </header>
        <div>
          <h2>Página não encontrada</h2>
          <button
            type="button"
            onClick={ () => history.push('/') }
          >
            Voltar
          </button>
        </div>
        <img src="https://i.pinimg.com/originals/98/eb/fe/98ebfebc7e992ae68f34d887f220aeb8.gif" alt="not found" />
      </NotFoundStyle>
    );
  }
}

Notfound.propTypes = {
  history: PropTypes.objectOf(PropTypes.shape).isRequired,
};
