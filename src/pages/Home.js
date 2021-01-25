import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { excluirFuncionario } from '../actions';
import { BsXCircleFill } from 'react-icons/bs';

class Home extends React.Component {
  constructor() {
    super();
    this.deletarFuncionario = this.deletarFuncionario.bind(this);
  }

  deletarFuncionario(id) {
    const { excluindoFuncionario } = this.props;
    excluindoFuncionario(id);
  }

  render() {
    const { dadosFuncionarios } = this.props;
    return (
      <div>
        <nav>
          <Link to="/registrar"><button type="button">Registrar funcionário</button></Link>
          <button type="button">Tabelas e cálculos do IRRF</button>
        </nav>
        <section>
          <h1>Tabelas e cálculos do IRRF</h1>
          <p>A tabela do IR é um dos principais instrumentos para auxiliar os contribuintes na hora de enviar as informações fiscais para a Receita. Afinal, é nesse documento que constam as alíquotas do Imposto de Renda.</p>
          <p>Isso quer dizer que é essa a fonte para você saber qual é o percentual que deve ser aplicado sobre os seus rendimentos. Portanto, na hora de fazer o cálculo e declarar seus rendimentos, ter essa tabela é fundamental para que você não envie nenhum dado errado e, consequentemente, não caia na malha fina.</p>
        </section>
        <section>
          <h1>Seus funcionários</h1>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>CPF</th>
                <th>Salário</th>
                <th>Desconto</th>
                <th>Dependentes</th>
                <th>Desconto IRPF</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {dadosFuncionarios && dadosFuncionarios.map((funcionario) => (
                <tr key={ funcionario.nome }>
                  <td>{ funcionario.nome }</td>
                  <td>{ funcionario.cpf }</td>
                  <td>{ funcionario.salario }</td>
                  <td>{ funcionario.desconto }</td>
                  <td>{ funcionario.dependentes }</td>
                  <td>{ funcionario.valorADeduzir }</td>
                  <td><button onClick={ () => this.deletarFuncionario(funcionario.idFuncionario)}><BsXCircleFill /></button></td>
                </tr>
              ))}
            </tbody>            
          </table>
        </section>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  excluindoFuncionario: (id) => dispatch(excluirFuncionario(id)),
})

const mapStateToProps = (state) => ({
  dadosFuncionarios: state.reducer.funcionarios,
})



export default connect(mapStateToProps, mapDispatchToProps)(Home);