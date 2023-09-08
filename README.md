# Node API com Fastify e PostgreSQL

Esta é uma API em Node.js que utiliza o framework Fastify e o banco de dados PostgreSQL para gerenciar uma coleção de vídeos. Ela já está em produção e pode ser acessada [aqui](https://node-api-dc65.onrender.com/videos).

## Funcionalidades

- **Listagem de Vídeos**: Retorna uma lista de todos os vídeos disponíveis.
- **Detalhes do Vídeo**: Retorna informações detalhadas sobre um vídeo específico.
- **Adicionar Vídeo**: Permite a adição de novos vídeos ao banco de dados.
- **Atualizar Vídeo**: Permite a atualização das informações de um vídeo existente.
- **Remover Vídeo**: Remove um vídeo do banco de dados.

## Requisitos

Certifique-se de ter os seguintes requisitos instalados antes de executar o projeto:

- Node.js
- PostgreSQL
- npm ou yarn

## Configuração

1. **Clonando o Repositório**

   ```
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. **Instalando Dependências**

   Navegue até o diretório do projeto e instale as dependências.

   ```
   cd seu-repositorio
   npm install
   ```

3. **Configurando o Banco de Dados**

   - Crie um banco de dados PostgreSQL.
   - Edite o arquivo `.env` e configure as variáveis de ambiente para a conexão com o banco de dados.

4. **Executando o Projeto**

   ```
   npm start
   ```

   O servidor estará rodando em `http://localhost:3333`.

## Endpoints

- **Listagem de Vídeos**

  ```
  GET /videos
  ```

- **Detalhes do Vídeo**

  ```
  GET /videos/:id
  ```

- **Adicionar Vídeo**

  ```
  POST /videos
  ```

- **Atualizar Vídeo**

  ```
  PUT /videos/:id
  ```

- **Remover Vídeo**

  ```
  DELETE /videos/:id
  ```

## Contribuindo

Sinta-se à vontade para contribuir! Abra uma nova *issue* ou faça um *pull request* com suas sugestões.


---

Espero que este Read.me ajude a entender e configurar a API. Se precisar de mais informações ou ajuda, não hesite em entrar em contato!
