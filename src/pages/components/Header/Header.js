import React, { Component } from 'react';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HeaderStyle from './styles';
import logo from '../../../trivia.png';

class Header extends Component {
  render() {
    const { email, name, score } = this.props;
    const hash = md5(email).toString();

    return (
      <HeaderStyle>
        <section>
          <img
            data-testid="header-profile-picture"
            src={ `https://www.gravatar.com/avatar/${hash}` }
            alt="imagem-perfil"
          />
          <h3 data-testid="header-player-name">
            { name }
          </h3>
        </section>
        <img src={ logo } alt="logo" />
        <div>
          <p>
            Score:
            {' '}
            <span data-testid="header-score">{ score }</span>
          </p>
        </div>
      </HeaderStyle>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.player.gravatarEmail,
  name: state.player.name,
  score: state.player.score,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};
