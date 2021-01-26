import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillHouseFill } from 'react-icons/bs';

class Header extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/"><button type="button" data-testid="botao-pagina-inical"><BsFillHouseFill size={20} /></button></Link>
          <Link to="/registrar"><button type="button">Registrar funcionário</button></Link>
          <Link to="/tabela"><button type="button">Tabelas e cálculos do IRRF</button></Link>          
        </nav>
      </div>

    )
  }
}

export default Header;
