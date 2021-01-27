# Cálculo de imposto de renda retido na fonte (IRRF)


## Tabela de conteúdos
  * [Sobre](#Sobre)
  * [Instalação](#instalação)
  * [Como usar](#como-usar)
  * [Tecnologias](#tecnologias)

## Sobre
Esse projeto permite fazer o cálculo de imposto de renda retido na fonte (IRRF) a partir dos dados dos funcionários informados pelo usuário. As informações de cada funcionário e o cálculo do IRRF são mostradas em uma tabela na página inicial. Além disso, a aplicação possui uma página com a tabela do IRRF.

##### Tela da página inicial:
![pagina-inicial](https://github.com/anacapdeville/imposto-de-renda/blob/master/images/pagina-inicial.png?raw=true)
##### Tela da página de registrar funcionário:
![pagina-registrar](https://github.com/anacapdeville/imposto-de-renda/blob/master/images/registrar.png?raw=true)
##### Tela da página com tabela do IRRF:
![pagina-tabela](https://github.com/anacapdeville/imposto-de-renda/blob/master/images/tabela.png?raw=true)

## Instalação
1. Acesse o terminal e clone o projeto:

```
git clone git@github.com:anacapdeville/imposto-de-renda.git
```

2. Acesse a página e instale as dependências:
```
cd activities-chart-github
npm install
```

3. Inicializa o projeto:
```
npm start
```

## Como usar
A página inicial fornece algumas informações sobre o IRRF e a tabela com os dados dos funcionários. Para registrar um novo funcionário clique em "Registrar funcionário" na parte superior da tela. Abrirá uma página com um formulário para ser preenchido com os dados do funcionário. Após preencher todo o formulário clique no botão "Registrar funcionário" que está abaixo do formulário. Para verificar a informação preenchida vá para a página inicial clicando no ícone de home na parte superior da tela. Para ver a tabela do IRRF clique em "Tabelas e cálculos do IRRF" na parte superior da tela.
## Tecnologias
Esse projeto foi desenvolvido em React, utilizando Redux para controle de estado e React Router para controle da navegação. Para obter ícones foi utilizada a biblioteca React Icons.