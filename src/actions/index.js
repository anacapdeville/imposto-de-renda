export const ADICIONAR_FUNCIONARIO = 'ADICIONAR_FUNCIONARIO';

export const EXCLUIR_FUNCIONARIO = 'EXCLUIR_FUNCIONARIO';

export const adicionarFuncionario = (funcionario) => ({
  type: ADICIONAR_FUNCIONARIO,
  funcionario,
})

export const excluirFuncionario = (id) => ({
  type: EXCLUIR_FUNCIONARIO,
  id,
})
