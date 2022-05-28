import React, { Component } from 'react';
import SettingsStyle from './styles';

export default class Settings extends Component {
  render() {
    return (
      <SettingsStyle>
        <h1 data-testid="settings-title">
          Configurações
        </h1>
      </SettingsStyle>
    );
  }
}
