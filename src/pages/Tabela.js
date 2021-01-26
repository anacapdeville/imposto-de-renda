import React from 'react';
import Header from '../components/Header';

class Tabela extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="conteudo-paginas">
          <h1>Tabela progressiva do IRRF</h1>
          <table>
            <thead>
              <tr>
                <th>Base de cálculo</th>
                <th>Alíquota</th>
                <th>Parcela a deduzir do IRPF</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Até R$ 1.903,98</td>
                <td>Isento</td>
                <td>R$ 0,00</td>
              </tr>
              <tr>
                <td>De R$ 1.903.99 até R$ 2.826,65</td>
                <td>7,5%</td>
                <td>R$ 142,80</td>
              </tr>
              <tr>
                <td>De R$ 2.826,66 até R$ 3.751,05</td>
                <td>15%</td>
                <td>R$ 354,80</td>
              </tr>
              <tr>
                <td>De R$ 3.751,06 até R$ 4.664,68</td>
                <td>22,5%</td>
                <td>R$ 636,13</td>
              </tr>
              <tr>
                <td>Acima de R$ 4.664,68</td>
                <td>27,5%</td>
                <td>R$ 869,36</td>
              </tr>
            </tbody>
          </table>
          <p>O cálculo é realizado da seguinte maneira:</p>
          <p>Salário Base IR = Salário Bruto - Desconto da previdência - (Dedução por dependente X quantidade de dependentes)</p>
          <p>Desconto IRRF = (Salário base IR X Alíquota) - Parcela a deduzir</p>
          <p>O valor da dedução por dependente é R$ 164,56</p>
        </div>
      </div>
    )
  }
}

export default Tabela;
