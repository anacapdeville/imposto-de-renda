import { ADICIONAR_FUNCIONARIO, EXCLUIR_FUNCIONARIO } from '../actions';

const INITIAL_STATE = {funcionarios: []}

function reducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADICIONAR_FUNCIONARIO:
      return {...state, funcionarios: [...state.funcionarios, action.funcionario]};
    case EXCLUIR_FUNCIONARIO:
      return {funcionarios: state.funcionarios.filter((funcionario) => funcionario.idFuncionario !== action.id)};
    default:
      return state;
  }
}

export default reducer;