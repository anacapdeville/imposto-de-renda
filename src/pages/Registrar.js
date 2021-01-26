import React from 'react';
import { connect } from 'react-redux';
import { adicionarFuncionario } from '../actions';
import PropTypes from 'prop-types';
import Header from '../components/Header';

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
    const salarioNumeroAmericano = parseFloat(salario.replace(',', '.'));
    const salarioBase = salarioNumeroAmericano - desconto - (dependentes * 164.56);
    let valorADeduzir = 0;
    if (salarioNumeroAmericano <= 1903.98) {
      valorADeduzir = 0;
    } else if (salarioNumeroAmericano >= 1903.99 && salario <= 2826.65) {
      valorADeduzir = (salarioBase * 7.5 / 100) - 142.8;
    } else if (salarioNumeroAmericano >= 2826.66 && salario <= 3751.05) {
      valorADeduzir = (salarioBase * 15 / 100) - 354.8;
    } else if (salarioNumeroAmericano >= 3751.06 && salario <= 4664.68) {
      valorADeduzir = (salarioBase * 22.5 / 100) - 636.13;
    } else if (salarioNumeroAmericano > 4664.68) {
      valorADeduzir = (salarioBase * 27.5 / 100) - 869.36;
    }
    let idFuncionario = new Date();

    const funcionario = { nome, cpf, salarioNumeroAmericano, desconto, dependentes, valorADeduzir, idFuncionario };
    const { registrandoFuncionario } = this.props;
    registrandoFuncionario(funcionario);
  }

  render() {
    return (
      <div>
        <Header />
        <div className="conteudo-paginas">
          <h1>Registrar funcionario</h1>
          <form onSubmit={this.enviandoDadosFuncionario}>
            <label htmlFor="nome">
              Nome:
              {" "}
              <input
                type="text"
                placeholder="Nome"
                name="nome"
                onChange={this.handleChange}
                id="nome"
                data-testid="input-nome"
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
                onChange={this.handleChange}
                id="cpf"
                required
              />
            </label>
            <br />
            <label htmlFor="salario">
              Salário bruto:
              {" "}
              <input
                type="text"
                placeholder="Salário"
                name="salario"
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
                id="dependentes"
                required
              />
            </label>
            <br />
            <button
              type="submit"
              data-testid="botao-registrar-funcionario"
              className="botao-registrar-funcionario"
            >
              Registrar funcionário
            </button>
          </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  registrandoFuncionario: (funcionario) => dispatch(adicionarFuncionario(funcionario)),
})

const mapStateToProps = (state) => ({
  dadosFuncionarios: state.reducer,
})

Registrar.propTypes = {
  registrandoFuncionario: PropTypes.func.isRequired,
  dadosFuncionarios: PropTypes.array.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Registrar);
