import React from 'react';
import { screen } from "@testing-library/react";
import App from "../App";
import renderWithRouterAndRedux from "./helpers/renderWithRouterAndRedux";
import { questionsMocks } from "./mocks/questionsMocks";
import userEvent from '@testing-library/user-event';
import { getQuestions } from '../redux/actions';

describe('Testando o componente de Game', () => {
  const INITIAL_STATE = questionsMocks;
  jest.setTimeout(35000);

  it('Verifica o Header da tela de Game.', async () => {
    const { history } = renderWithRouterAndRedux(<App />, INITIAL_STATE);
    history.push('/game');

    const profilePicEl = await screen.findByRole('img', { name: "imagem-perfi" });
    expect(profilePicEl).toBeInTheDocument();

    const nameEl = screen.getByText(INITIAL_STATE.player.name);
    expect(nameEl).toBeInTheDocument();

    const score = screen.getByTestId('header-score');
    expect(score).toBeInTheDocument();
    expect(score.textContent).toContain('0');
  });

  it('Verifica se a tela de perguntas renderiza corretamente.', () => {
    const { history } = renderWithRouterAndRedux(<App />, INITIAL_STATE);
    history.push('/game');

    INITIAL_STATE.questions.results.forEach((question) => {
      const themeEl = screen.getByRole('heading',
        { name: question.category });
      expect(themeEl).toBeInTheDocument();
  
      const questionEl = screen.getByText(question.question);
      expect(questionEl).toBeInTheDocument();

      question.incorrect_answers.forEach((answer) => {
        const incorrectAnswerEl = screen.getByRole('button', { name: answer });
        expect(incorrectAnswerEl).toBeInTheDocument();
      });

      const correctAnswerEl = screen.getByRole('button', { name: question.correct_answer });
      expect(correctAnswerEl).toBeInTheDocument();

      userEvent.click(correctAnswerEl);

      const nextBtnEl = screen.getByRole('button', { name: 'Next' });
      expect(nextBtnEl).toBeInTheDocument();

      userEvent.click(nextBtnEl);
    });
  });

  it('Verifica se, ao acertar uma resposta, o score é aumentado de acordo com a dificuldade.', async () => {
    const { history } = renderWithRouterAndRedux(<App />, INITIAL_STATE);
    history.push('/game');

    const scoreZeroEl = await screen.findByTestId('header-score');
    expect(scoreZeroEl.textContent).toContain('0');

    INITIAL_STATE.questions.results.forEach((question) => {
      const correctAnswerEl = screen.getByRole('button', { name: question.correct_answer });
      expect(correctAnswerEl).toBeInTheDocument();
      userEvent.click(correctAnswerEl);

      const nextBtnEl = screen.getByRole('button', { name: 'Next' });
      expect(nextBtnEl).toBeInTheDocument();
      userEvent.click(nextBtnEl);
    });

    const scoreCalculate = screen.getByTestId('header-score');
    expect(scoreCalculate.textContent).toContain('320');
  });

  it('Verifica se, ao passar um token inválido, volta para a tela de Login.', async () => {
    const { history, store } = renderWithRouterAndRedux(<App />, INITIAL_STATE);
    store.dispatch(getQuestions({
      response_code: 3,
      results: [],
    }));
    history.push('/game');
    const loginInputEl = await screen.findByRole('textbox', { name: /email/i });
    expect(loginInputEl).toBeInTheDocument();
  });

  it('Verifica se, ao esperar mais de 30 segundos, os botões de respostas estejam desativados.', async () => {
    renderWithRouterAndRedux(<App />);
    const nameInput = screen.getByRole('textbox', { name: /nome/i });
    const emailInput = screen.getByRole('textbox', { name: /email/i });

    userEvent.type(nameInput, 'Teste');
    userEvent.type(emailInput, 'teste@teste.com');

    const btnPlay = screen.getByRole('button', { name: /play/i });
    userEvent.click(btnPlay);

    await new Promise((resolve) => setTimeout(resolve, 35000));    

    const firstQuestion = screen.getAllByTestId('answer-options');
    firstQuestion.forEach((answerQuestion) => {
      const answer = screen.getByRole('button', { name: answerQuestion.textContent });
      expect(answer).toBeDisabled();
    });
  }, 35000);
});