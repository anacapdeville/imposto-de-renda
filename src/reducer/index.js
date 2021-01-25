import { ADICIONAR_FUNCIONARIO, EXCLUIR_FUNCIONARIO } from '../actions';

const INITIAL_STATE = {funcionarios: []}

function reducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADICIONAR_FUNCIONARIO:
      return {...state, funcionarios: [...state.funcionarios, action.funcionario]};
    case EXCLUIR_FUNCIONARIO:
      return { ...state, funcionarios: [state.funcionarios.filter((funcionario) => funcionario.nome !== action.nome)]}
    default:
      return state;
  }
}

export default reducer;