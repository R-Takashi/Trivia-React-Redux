import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './components/Input';
import { setStorage } from '../services/localStorage';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      player: '',
      isDisabled: true,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    }, () => {
      const { email, player } = this.state;
      const validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      this.setState({
        isDisabled: !(validateEmail.test(email) && player.length > 0),
      });
    });
  }

  onSubmit = async () => {
    const response = await fetch('https://opentdb.com/api_token.php?command=request');
    const result = await response.json();

    setStorage(result.token);

    const { history } = this.props;
    history.push('/game');
  }

  render() {
    const { email, player, isDisabled } = this.state;
    const { history } = this.props;
    return (
      <div>
        <form>
          <Input
            id="input-player-name"
            name="player"
            type="text"
            label="Nome: "
            placeholder="Insira seu nome"
            value={ player }
            func={ this.handleChange }
          />
          <Input
            id="input-gravatar-email"
            name="email"
            type="email"
            label="Email: "
            placeholder="Insira seu email"
            value={ email }
            func={ this.handleChange }
          />
          <button
            type="button"
            data-testid="btn-play"
            disabled={ isDisabled }
            onClick={ this.onSubmit }
          >
            Play
          </button>

          <button
            type="button"
            data-testid="btn-settings"
            onClick={ () => history.push('/settings') }
          >
            Configurações
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.shape).isRequired,
};
