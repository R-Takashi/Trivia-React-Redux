import React from 'react';
import { screen } from "@testing-library/react";
import App from "../App";
import renderWithRouterAndRedux from "./helpers/renderWithRouterAndRedux";
import userEvent from '@testing-library/user-event';
import { questionsMocks } from './mocks/questionsMocks';

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

  it('Verificando se, ao apertar no botão Play, é redirecionado à uma nova página.', async () => {
    const INITIAL_STATE = questionsMocks;

    const {history} = renderWithRouterAndRedux(<App />, INITIAL_STATE);
    
    const name = 'Teste';
    const inputName = screen.getByLabelText(/nome/i);
    const inputEmail = screen.getByLabelText(/email/i);
    const btnDisabled = screen.getByRole('button', { name: /play/i });
  
    expect(inputName).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(btnDisabled).toBeDisabled();
  
    userEvent.type(inputName, name);
    userEvent.type(inputEmail, 'teste@teste.com');
  
    const btnEnabled = screen.getByRole('button', { name: /play/i });
    expect(btnEnabled).not.toBeDisabled();
    
    userEvent.click(btnEnabled);
  
    const nameEl = await screen.findByText(name);
    expect(nameEl).toBeInTheDocument();
    expect(history.location.pathname).toBe('/game');
  });

  it('Verificando se o botão Configurações está na tela.', () => {
    renderWithRouterAndRedux(<App />);
    const btnSettings = screen.getByRole('button', { name: /play/i });
    expect(btnSettings).toBeInTheDocument();
  });

  it('Verificando se ao apertar no botão Configurações, vai para a página de configurações.', () => {
    const {history} = renderWithRouterAndRedux(<App />);
    const btnSettings = screen.getByRole('button', { name: /configurações/i });
    expect(btnSettings).toBeInTheDocument();
    userEvent.click(btnSettings);
    const title = screen.getByRole('heading', {level: 1, name: "Configurações"});
    expect(title).toBeInTheDocument();
    expect(history.location.pathname).toBe('/settings');
  });
})