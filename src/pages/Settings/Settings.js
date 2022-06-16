import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SettingsStyle from './styles';
import { setConfig } from '../../redux/actions';

class Settings extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      categoryId: '',
      difficulty: '',
      type: '',
      amount: 5,
      saved: false,
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  savedConfigs = () => {
    const DELAY = 2000;
    this.setState({
      saved: true,
    });
    setTimeout(() => {
      this.setState({
        saved: false,
      });
    }, DELAY);
  }

  fetchCategories = async () => {
    const result = await fetch('https://opentdb.com/api_category.php');
    const categoryList = await result.json();
    const categories = categoryList.trivia_categories;
    this.setState({
      categories,
    });
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  }

  setQuestions = () => {
    const { amount, categoryId, difficulty, type } = this.state;
    const { setConfigs } = this.props;
    const config = {
      id: categoryId,
      difficulty,
      type,
      amount,
    };
    setConfigs(config);
    this.savedConfigs();
  }

  render() {
    const { categories, categoryId, difficulty, type, amount, saved } = this.state;
    const { history } = this.props;
    return (
      <SettingsStyle>

        <h1 data-testid="settings-title">
          Configurações
        </h1>

        <form>

          <label htmlFor="questions">
            Quantidade:
            {' '}
            <input
              type="number"
              name="amount"
              max={ 50 }
              min={ 5 }
              value={ amount }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="category">
            Categoria:
            {' '}
            <select
              id="category"
              name="categoryId"
              value={ categoryId }
              onChange={ this.handleChange }
            >
              <option value="">Any Category</option>
              { categories?.map((category) => (
                <option
                  key={ category.id }
                  value={ category.id }
                >
                  {category.name}
                </option>
              ))}
            </select>
          </label>

          <label htmlFor="difficulty">
            Dificuldade:
            {' '}
            <select
              id="difficulty"
              name="difficulty"
              value={ difficulty }
              onChange={ this.handleChange }
            >
              <option value="">Any difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </label>

          <label htmlFor="type">
            Tipo:
            {' '}
            <select
              id="type"
              name="type"
              value={ type }
              onChange={ this.handleChange }
            >
              <option value="">Any Type</option>
              <option value="multiple">Multiple Choice</option>
              <option value="boolean">True / False</option>

            </select>
          </label>

          <button
            type="button"
            onClick={ this.setQuestions }
          >
            salvar
          </button>

          <button
            type="button"
            onClick={ () => history.push('/') }
          >
            Voltar
          </button>

        </form>

        {
          saved && <h2> Configurações Salvas </h2>
        }

      </SettingsStyle>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setConfigs: (configs) => dispatch(setConfig(configs)),
});

Settings.propTypes = {
  history: PropTypes.objectOf(PropTypes.shape).isRequired,
  setConfigs: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Settings);
