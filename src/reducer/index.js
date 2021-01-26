import { ADICIONAR_FUNCIONARIO, EXCLUIR_FUNCIONARIO } from '../actions';

const INITIAL_STATE = [];

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADICIONAR_FUNCIONARIO:
      return [...state, action.funcionario];
    case EXCLUIR_FUNCIONARIO:
      return state.filter((funcionario) => funcionario.idFuncionario !== action.id);
    default:
      return state;
  }
}

export default reducer;
