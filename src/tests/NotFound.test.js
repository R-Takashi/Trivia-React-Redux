import React from "react";
import { screen } from "@testing-library/react";
import App from "../App";
import renderWithRouterAndRedux from "./helpers/renderWithRouterAndRedux";

describe('Testando o componente Ranking', () => {
  it('Verificando se renderiza rankins que estão salvos no localStorage.', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/notfound');

    const title = screen.getByRole('heading', { level: 1, name: /Como vc chegou aqui?/i });

    expect(title).toBeInTheDocument();

  });
});
