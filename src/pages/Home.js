import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <button type="button">Registrar funcionário</button>
          <button type="button">Tabelas e cálculos do IRRF</button>
        </nav>
        <section>
          <h1>Tabelas e cálculos do IRRF</h1>
          <p>A tabela do IR é um dos principais instrumentos para auxiliar os contribuintes na hora de enviar as informações fiscais para a Receita. Afinal, é nesse documento que constam as alíquotas do Imposto de Renda.</p>
          <p>Isso quer dizer que é essa a fonte para você saber qual é o percentual que deve ser aplicado sobre os seus rendimentos. Portanto, na hora de fazer o cálculo e declarar seus rendimentos, ter essa tabela é fundamental para que você não envie nenhum dado errado e, consequentemente, não caia na malha fina.</p>
        </section>
        <section>
          <h1>Seus funcionários</h1>
        </section>
      </div>
    )
  }
}

export default Home;