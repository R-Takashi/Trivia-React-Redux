import React, { Component } from 'react';
import NotFoundStyle from './styles';

export default class Notfound extends Component {
  render() {
    return (
      <NotFoundStyle>
        <h1>Como vc chegou aqui?</h1>
        <img src="https://i.pinimg.com/originals/98/eb/fe/98ebfebc7e992ae68f34d887f220aeb8.gif" alt="not found" />
      </NotFoundStyle>
    );
  }
}
