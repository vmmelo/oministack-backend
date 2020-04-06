# oministack-backend
API desenvolvida utilizando nodejs, expressjs e knexjs (para o banco de dados com sqlite)
Para rodar a aplicação basta instalar as dependências com ```npm install``` e iniciar ```npm start``` ou ```npm start``` para iniciar com o nodemon. O servidor estará rodando localhost na porta 3001 ```localhost:3001```
Utilizei as seguintes dependências:
- ```cors``` para permitir outras URLs se conectarem com a aplicação
- ```nodemon``` para atualizar o código automaticamente quando fizer alterações sem precisar parar o node
- ```sqlite3``` para o banco de dados
- ```knexjs``` para conexão com o banco de dados
- ```express``` para facilitar a criação de rotas
- ```celebrate``` para fazer validações no Express (a biblioteca utiliza o Joi por baixo)
- ```jest``` para fazer testes unitários (devDependencies pois não vai usar em produção)
- ```cross-env``` para criar variavel de ambiente no script dentro de package.json, para definir em que ambiente está
- ```supertest``` para fazer testes de integracao (devDependencies pois não vai usar em produção)

Para rodar os testes da aplicação ```npm test```

Deploy da aplicação feito com Heroku, adicionando uma variavel de ambiente PORT=80 para conseguir acessar o ambiente
