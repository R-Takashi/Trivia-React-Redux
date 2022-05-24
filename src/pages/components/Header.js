import React, { Component } from 'react';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, name } = this.props;
    const hash = md5(email).toString();
    console.log(email, name);

    return (
      <div>
        <img data-testid="header-profile-picture" src={`https://www.gravatar.com/avatar/${hash}`} />
        <h3 data-testid="header-player-name">{ name }</h3>
        <p data-testid="header-score">0</p>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.player.gravatarEmail,
  name: state.player.name,
});

export default connect(mapStateToProps)(Header);
