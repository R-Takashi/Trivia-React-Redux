import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getRanking } from '../../services/localStorage';
import Container from '../Game/styles';
import { RankingStyle, RankingCard } from './styles';

export default class Ranking extends Component {
  constructor() {
    super();

    this.state = {
      ranking: [],
    };
  }

  componentDidMount() {
    const ranking = getRanking() || [];
    this.setState({
      ranking: ranking.sort((a, b) => b.score - a.score),
    });
  }

  render() {
    const { history } = this.props;
    const { ranking } = this.state;
    return (
      <Container>
        <RankingStyle>
          <h1 data-testid="ranking-title">Ranking</h1>
          <ol>
            {ranking.length > 0 && (
              ranking.map((player, index) => (
                <RankingCard key={ index }>
                  <h3>
                    Rank
                    {' '}
                    { index + 1 }
                  </h3>
                  <img
                    src={ player.picture }
                    alt={ `imagem de perfil de ${player.name}` }
                  />
                  <h2
                    data-testid={ `player-name-${index}` }
                  >
                    {player.name}
                  </h2>
                  <p
                    data-testid={ `player-score-${index}` }
                  >
                    {player.score}
                  </p>
                </RankingCard>
              ))
            )}
          </ol>
          <button
            type="button"
            onClick={ () => history.push('/') }
            data-testid="btn-go-home"
          >
            Voltar para a tela inicial
          </button>
        </RankingStyle>
      </Container>
    );
  }
}

Ranking.propTypes = {
  history: PropTypes.objectOf(PropTypes.shape).isRequired,
};
