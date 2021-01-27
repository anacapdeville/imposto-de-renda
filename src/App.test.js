import { screen, fireEvent } from '@testing-library/react';
import App from './App';
import renderWithRouter from './renderWithRouter';

test('a página inicial possui botões que direcionam para página de adicionar funcionário e para a página com tabela do IRRF', () => {
  const { getByRole, getByText, getByTestId } = renderWithRouter(<App />);

  const botaoParaPaginaRegistrar = screen.getByRole('button', { name: 'Registrar funcionário' });
  expect(botaoParaPaginaRegistrar).toBeInTheDocument();
  fireEvent.click(botaoParaPaginaRegistrar);
  const tituloRegistar = screen.getByRole('heading', { name: 'Registrar funcionario' });
  expect(tituloRegistar).toBeInTheDocument();

  const botaoParaPaginaInicial = screen.getByTestId('botao-pagina-inical');
  fireEvent.click(botaoParaPaginaInicial);

  const botaoParaTabela = screen.getByRole('button', { name: 'Tabelas e cálculos do IRRF' });
  expect(botaoParaTabela).toBeInTheDocument();
  fireEvent.click(botaoParaTabela);
  const tituloTabela = screen.getByText('Tabela progressiva do IRRF');
  expect(tituloTabela).toBeInTheDocument();
});

test('a página incial possui dois títulos e uma tabela', () => {
  const { getAllByRole, getByRole } = renderWithRouter(<App />);

  const titulos = screen.getAllByRole('heading');
  expect(titulos.length).toBe(2);
  const tituloPaginaInicial = screen.getByRole('heading', { name: 'Tabelas e cálculos do IRRF' });
  expect(tituloPaginaInicial).toBeInTheDocument();

  const tabela = screen.getByRole('table');
  expect(tabela).toBeInTheDocument();
});

test('a página de registrar funcionário possui um botão que direciona para a página inicial e um botão que direciona para página com tabela do IRRF', () => {
  const { getByRole, getByText, getByTestId } = renderWithRouter(<App />);

  const botaoParaPaginaRegistrar = screen.getByRole('button', { name: 'Registrar funcionário' });
  fireEvent.click(botaoParaPaginaRegistrar);

  const botaoParaPaginaInicial = screen.getByTestId('botao-pagina-inical');
  fireEvent.click(botaoParaPaginaInicial);
  const tituloPaginaInicial = screen.getByRole('heading', { name: 'Tabelas e cálculos do IRRF' });
  expect(tituloPaginaInicial).toBeInTheDocument();

  fireEvent.click(botaoParaPaginaRegistrar);

  const botaoParaTabela = screen.getByRole('button', { name: 'Tabelas e cálculos do IRRF' });
  expect(botaoParaTabela).toBeInTheDocument();
  fireEvent.click(botaoParaTabela);
  const tituloTabela = screen.getByText('Tabela progressiva do IRRF');
  expect(tituloTabela).toBeInTheDocument();
});

test('a página de registrar funcionários possui os campos Nome, CPF, Salário bruto, Desconto da previdência e Número de dependentes como label', () => {
  const { getByText, getByRole } = renderWithRouter(<App />);

  const botaoParaPaginaRegistrar = screen.getByRole('button', { name: 'Registrar funcionário' });
  fireEvent.click(botaoParaPaginaRegistrar);

  const labelNome = screen.getByText('Nome:');
  expect(labelNome).toBeInTheDocument();

  const labelCpf = screen.getByText('CPF:');
  expect(labelCpf).toBeInTheDocument();

  const labelSalario = screen.getByText('Salário bruto:');
  expect(labelSalario).toBeInTheDocument();

  const labelDesconto = screen.getByText('Desconto da previdência:');
  expect(labelDesconto).toBeInTheDocument();

  const labelDependentes = screen.getByText('Número de dependentes:');
  expect(labelDependentes).toBeInTheDocument();
});

test('a página de registrar funcionário possui quatro campos input de texto e um de número', () => {
  const { getAllByRole, getByRole } = renderWithRouter(<App />);

  const botaoParaPaginaRegistrar = screen.getByRole('button', { name: 'Registrar funcionário' });
  fireEvent.click(botaoParaPaginaRegistrar);

  const inputsTexto = screen.getAllByRole('textbox');
  expect(inputsTexto.length).toBe(4);

  const inputNumero = screen.getByRole('spinbutton');
  expect(inputNumero).toBeInTheDocument();
});

test('a página com a tabela do IRRF possui botões que direcionam para página de adicionar funcionário e para a página inicial', () => {
  const { getByRole, getByTestId } = renderWithRouter(<App />);

  const botaoParaTabela = screen.getByRole('button', { name: 'Tabelas e cálculos do IRRF' });
  fireEvent.click(botaoParaTabela);

  const botaoParaPaginaRegistrar = screen.getByRole('button', { name: 'Registrar funcionário' });
  expect(botaoParaPaginaRegistrar).toBeInTheDocument();
  fireEvent.click(botaoParaPaginaRegistrar);
  const tituloRegistar = screen.getByRole('heading', { name: 'Registrar funcionario' });
  expect(tituloRegistar).toBeInTheDocument();

  const botaoParaPaginaInicial = screen.getByTestId('botao-pagina-inical');
  expect(botaoParaPaginaInicial).toBeInTheDocument();
  fireEvent.click(botaoParaPaginaInicial);
  const tituloPaginaInicial = screen.getByRole('heading', { name: 'Tabelas e cálculos do IRRF' });
  expect(tituloPaginaInicial).toBeInTheDocument();
});

test('a página com a tabela do IRRF possui uma tabela', () => {
  const { getByRole } = renderWithRouter(<App />);

  const botaoParaTabela = screen.getByRole('button', { name: 'Tabelas e cálculos do IRRF' });
  fireEvent.click(botaoParaTabela);

  const tabela = screen.getByRole('table');
  expect(tabela).toBeInTheDocument();
});
