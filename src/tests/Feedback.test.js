import React from 'react';
import { screen } from "@testing-library/react";
import App from "../App";
import renderWithRouterAndRedux from "./helpers/renderWithRouterAndRedux";
import userEvent from '@testing-library/user-event';
import Feedback from '../pages/Feedback/Feedback';

describe('Testando o componente Feedback', () => {
  it('Verificando se os botões de "ranking" e "play again" estão habilitados.', () => {
    renderWithRouterAndRedux(<Feedback />);
    const rankingBtn = screen.getByRole('button', { name: /ranking/i });
    expect(rankingBtn).toBeEnabled();

    const playAgainBtn = screen.getByRole('button', { name: /play again/i });
    expect(playAgainBtn).toBeEnabled();
  });

  it('Verificando se a mensagem de feedback aparece corretamente.', () => {
    renderWithRouterAndRedux(<Feedback />);
    const feedbackMessage = screen.getByRole('heading', { name: /Could be better.../i, level: 1 });
    expect(feedbackMessage).toBeInTheDocument();
  });

  it('Verificando se a imagem do jogador está presente na tela.', () => {
    renderWithRouterAndRedux(<Feedback />);
    const playerImg = screen.getByAltText('imagem-perfil');
    expect(playerImg).toBeInTheDocument();
  });

  it('Verificando se ao clicar no botão "ranking", é redirecionado pra tela correta.', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/feedback')
    const rankingBtn = screen.getByRole('button', { name: /ranking/i });
    userEvent.click(rankingBtn);

    expect(history.location.pathname).toBe('/ranking');
  });

  it('Verificando se ao clicar no botão "play again", é redirecionado pra tela correta.', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/feedback')
    const playAgainBtn = screen.getByRole('button', { name: /play again/i });
    userEvent.click(playAgainBtn);

    expect(history.location.pathname).toBe('/');
  });
});