import React from "react";
import { screen } from "@testing-library/react";
import { ranking } from "./mocks/localstorageMock";
import App from "../App";
import renderWithRouterAndRedux from "./helpers/renderWithRouterAndRedux";
import userEvent from "@testing-library/user-event";

describe('Testando o componente Ranking', () => {
  global.localStorage.setItem('ranking', ranking);
  it('Verificando se renderiza rankins que estão salvos no localStorage.', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/ranking');

    const titleEl = screen.getByRole('heading', { name: /ranking/i, level: 1 });
    expect(titleEl).toBeInTheDocument();

    const btnBackEl = screen.getByRole('button', { name: /tela inicial/i });
    expect(btnBackEl).toBeInTheDocument();

    JSON.parse(ranking).map((player) => {
      const nameEl = screen.getByText(player.name);
      const scoreEl = screen.getByText(player.score);
      const avatarEl = screen.getByRole('img', { name: `imagem de perfil de ${player.name}` });

      expect(nameEl).toBeInTheDocument();
      expect(scoreEl).toBeInTheDocument();
      expect(avatarEl.src).toContain(player.picture);
    });
  });

  it('Verifica se, ao apertar no botão de voltar, ele direciona para a tela de Login.', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/ranking');

    const btnBackEl = screen.getByRole('button', { name: /tela inicial/i });
    expect(btnBackEl).toBeInTheDocument();

    userEvent.click(btnBackEl);

    expect(history.location.pathname).toBe('/');
  });

});
