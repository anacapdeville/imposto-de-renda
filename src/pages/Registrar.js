import React from 'react';
import { connect } from 'react-redux';
import { adicionarFuncionario } from '../actions';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Registrar extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      cpf: '',
      salário: 0,
      desconto: '',
      dependentes: 0,
    }
    this.handleChange = this.handleChange.bind(this);
    this.enviandoDadosFuncionario = this.enviandoDadosFuncionario.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  enviandoDadosFuncionario(event) {
    event.preventDefault();
    const { nome, cpf, salario, desconto, dependentes } = this.state;
    const salarioBase = salario - desconto - (dependentes * 164.56);
    let valorADeduzir = 0;
    if(salario <= 1903.98) {
      valorADeduzir = 0;
    } else if(salario >= 1903.99 && salario <= 2826.65) {
      valorADeduzir = (salarioBase * 7.5 / 100) - 142.8;
    } else if(salario >= 2826.66 && salario <= 3751.05) {
      valorADeduzir = (salarioBase * 15 / 100) - 354.8;
    } else if(salario >= 3751.06 && salario <= 4664.68) {
      valorADeduzir = (salarioBase * 22.5 / 100) - 636.13;
    } else if(salario > 4664.68) {
      valorADeduzir = (salarioBase * 27.5 / 100) - 869.36;
    }
    const funcionario = { nome, cpf, salario, desconto, dependentes, valorADeduzir };
    const { registrandoFuncionario } = this.props;
    registrandoFuncionario(funcionario);
  }

  render() {
    return (
      <div>
        <h1>Registrar funcionario</h1>
        <form onSubmit={ this.enviandoDadosFuncionario }>
          <label htmlFor="nome">
            Nome:
            {" "}
            <input
              type="text"
              placeholder="Nome"
              name="nome"
              onChange={ this.handleChange }
              id="nome"
              required
            />
          </label>
          <br />
          <label htmlFor="cpf">
            CPF:
            {" "}
            <input
              type="text"
              placeholder="CPF"
              name="cpf"
              onChange={ this.handleChange }
              id="cpf"
              required
            />
          </label>
          <br />
          <label htmlFor="salario">
            Salário bruto:
            {" "}
            <input
              type="number"
              placeholder="Salário"
              name="salario"
              onChange={ this.handleChange }
              id="salario"
              required
            />
          </label>
          <br />
          <label htmlFor="desconto">
            Desconto da previdência:
            {" "}
            <input
              type="text"
              placeholder="Desconto"
              name="desconto"
              onChange={ this.handleChange }
              id="desconto"
              required
            />
          </label>
          <br />
          <label htmlFor="dependentes">
            Número de dependentes:
            {" "}
            <input
              type="number"
              placeholder="0"
              name="dependentes"
              onChange={ this.handleChange }
              id="dependentes"
              required
            />
          </label>
          <br />
          <button type="submit">Registrar funcionário</button>
        </form>
        <Link to="/"><button type="button">Página inicial</button></Link>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  registrandoFuncionario: (funcionario) => dispatch(adicionarFuncionario(funcionario))
})

Registrar.propTypes = {
  adicionarFuncionario: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(Registrar);
