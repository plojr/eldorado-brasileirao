# Eldorado - Brasileirão

Status: em desenvolvimento.

## Resumo
Este projeto visa mostrar várias várias estatísticas interessantes do campeonato brasileiro. Ele tem propósito de aprendizado somente.

## Informações técnicas
Este projeto contém dois módulos: o backend, onde trata a API para a comunicação com o banco de dados; e o frontend. Para desenvolver a API, foi utilizado o node.js. Para o frontend, foi utilizado o react. O banco de dados escolhido foi o MongoDB.

Obviamente a pasta node_modules não foi colocada no repositório, portanto o comando "npm install" é necessário para instalar todos os módulos necessários.

Para rodar, em desenvolvimento, o módulo backend, é necessário rodar o comando node (ou nodemon) sobre o arquivo server.js. Já, para o frontend, decidi usar a porta 8080. Com isso, é necessário rodar o seguinte comando: "export PORT=8080; npm start" na pasta do módulo, caso o sistema operacional seja Linux. Sendo Windows, o comando é: "set PORT=8080 && npm start".