# Testes Automatizados com Cypress

Este repositório contém testes automatizados para o front-end de uma aplicação utilizando o framework **Cypress**. O objetivo desses testes é garantir que as funcionalidades de login, manipulação de carrinho de compras e interação com a interface do usuário estejam funcionando corretamente.

## Pré-requisitos

Antes de executar os testes, verifique se você tem os seguintes pré-requisitos instalados:

- **Node.js**: [Baixe o Node.js](https://nodejs.org/) se ainda não o tiver instalado.
- **npm** (gerenciador de pacotes do Node.js): Já está incluído ao instalar o Node.js.

## Configuração do Projeto

1. **Clone este repositório**:

   Para obter o código, clone este repositório para o seu ambiente local:
   ```bash
   git clone + URL do repositório
   ```

2. **Acesse o diretório do projeto**:

   Após clonar o repositório, entre no diretório do projeto:
   ```bash
   cd seu-repositorio
   ```

3. **Instale as dependências do projeto**:

   O projeto utiliza o Cypress para testes automatizados, portanto, é necessário instalar as dependências. Execute o seguinte comando para instalar o Cypress e outras dependências necessárias:
   ```bash
   npm install
   ```

   Esse comando vai baixar todas as dependências listadas no arquivo `package.json`, incluindo o **Cypress**.

```

## Executando os Testes

### 1. **Abrir o Cypress UI**

Para abrir a interface gráfica do Cypress e rodar os testes de forma interativa, execute o seguinte comando:

```bash
npx cypress open
```

Isso abrirá a interface gráfica do Cypress, onde você poderá escolher os testes para executar. Clique nos testes que deseja rodar e eles serão executados no navegador.

### 2. **Rodar os Testes em Modo Headless**

Se preferir rodar os testes de maneira automatizada, sem a interface gráfica, você pode usar o modo headless:

```bash
npx cypress run
```

Os resultados dos testes serão exibidos diretamente no terminal.

## Descrição dos Testes

### 1. **Testes de Login**:

- **Deve preencher o campo de e-mail**: Verifica se o campo de e-mail é preenchido corretamente.
- **Deve preencher o campo de senha**: Verifica se o campo de senha é preenchido corretamente.
- **Deve submeter o formulário de login com sucesso**: Verifica se o login é realizado com sucesso usando as credenciais corretas.
- **Deve mostrar erro de login com dados inválidos**: Verifica se uma mensagem de erro é exibida quando as credenciais fornecidas são inválidas.

### 2. **Testes de Carrinho de Compras**:

- **Deve adicionar o produto correto ao carrinho**: Verifica se um produto é corretamente adicionado ao carrinho.
- **Deve limpar a lista de compras**: Verifica se o carrinho pode ser limpo corretamente.

## Estrutura dos Testes

Os testes são escritos em **JavaScript** utilizando o **Cypress**. Os arquivos de teste estão localizados na pasta `cypress/e2e/`. O Cypress possui uma API poderosa para testes de integração com a interface do usuário, permitindo a simulação de ações de usuários, como preenchimento de formulários e cliques.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).