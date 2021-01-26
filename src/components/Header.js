import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillHouseFill } from 'react-icons/bs';

class Header extends React.Component {
  render() {
    return (
      <div>
        <nav className="links-header">
          <Link to="/"><button type="button" data-testid="botao-pagina-inical" className="botao-header"><BsFillHouseFill size={ 18 } /></button></Link>
          <Link to="/registrar"><button type="button" className="botao-header">Registrar funcionário</button></Link>
          <Link to="/tabela"><button type="button" className="botao-header">Tabelas e cálculos do IRRF</button></Link>          
        </nav>
      </div>

    )
  }
}

export default Header;
