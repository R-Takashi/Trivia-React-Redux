import React from 'react';
import { screen } from "@testing-library/react";
import App from "../App";
import renderWithRouterAndRedux from "./helpers/renderWithRouterAndRedux";
import userEvent from '@testing-library/user-event';

describe('Testando o componente Login', () => {
  it('Verificando se o botão está desabilitado quando é passado dados inválidos.', () => {
    renderWithRouterAndRedux(<App />);
    const inputName = screen.getByLabelText(/nome/i);
    const inputEmail = screen.getByLabelText(/email/i);
    const btnDisabled = screen.getByRole('button', { name: /play/i });

    expect(inputName).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(btnDisabled).toBeDisabled();

    userEvent.type(inputName, 'aaaa');
    userEvent.type(inputEmail, 'teste.com');

    const btnEnabled = screen.getByRole('button', { name: /play/i });
    expect(btnEnabled).toBeDisabled();
  });

  it('Verificando se o botão está habilitado quando é passado dados válidos.', () => {
    renderWithRouterAndRedux(<App />);
    const inputName = screen.getByLabelText(/nome/i);
    const inputEmail = screen.getByLabelText(/email/i);
    const btnDisabled = screen.getByRole('button', { name: /play/i });

    expect(inputName).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(btnDisabled).toBeDisabled();

    userEvent.type(inputName, 'aaaa');
    userEvent.type(inputEmail, 'teste@teste.com');

    const btnEnabled = screen.getByRole('button', { name: /play/i });
    expect(btnEnabled).not.toBeDisabled();
  });

  it('Verificando se, ao apertar no botão, é redirecionado a uma nova página.', async () => {
    const {history} = renderWithRouterAndRedux(<App />);
    const inputName = screen.getByLabelText(/nome/i);
    const inputEmail = screen.getByLabelText(/email/i);
    const btnDisabled = screen.getByRole('button', { name: /play/i });

    expect(inputName).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(btnDisabled).toBeDisabled();

    userEvent.type(inputName, 'aaaa');
    userEvent.type(inputEmail, 'teste@teste.com');

    const btnEnabled = screen.getByRole('button', { name: /play/i });
    expect(btnEnabled).not.toBeDisabled();

    userEvent.click(btnEnabled);

    // jest.useFakeTimers({timerLimit: 5000})
    // expect(history.location.pathname).toBe('/game');
    const entrei = await screen.findByText(/entrei/i);
    expect(entrei).toBeInTheDocument();
  });
})