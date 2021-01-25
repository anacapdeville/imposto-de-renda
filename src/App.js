import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import Registrar from './pages/Registrar';
import Tabelas from './pages/Tabelas';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/registrar" component={ Registrar } />
        <Route exact path="/tabelas" component={ Tabelas } />
      </Switch>
    </div>
  );
}

export default App;
