# Eldorado - Brasileirão

Status: em desenvolvimento.

## Resumo
Este projeto visa mostrar várias estatísticas do campeonato brasileiro. Ele tem propósito de aprendizado somente.

## Informações técnicas
Este projeto contém dois módulos: o backend, onde trata a API para a comunicação com o banco de dados; e o frontend. Para desenvolver a API, Python, com o auxílio de Flask, e node.js foram utilizados. Para o frontend, foi utilizado o react. O banco de dados escolhido foi o MongoDB.

Obviamente a pasta node_modules não foi colocada no repositório, portanto o comando "npm install" é necessário para instalar todos os módulos necessários.

Para rodar, em desenvolvimento, o módulo backend, é necessário rodar o comando node (ou nodemon) sobre o arquivo server.js. Já, para o frontend, decidi usar a porta 8080. Com isso, é necessário rodar o seguinte comando: "export PORT=8080; npm start" na pasta do módulo, caso o sistema operacional seja Linux. Sendo Windows, o comando é: "set PORT=8080 && npm start".

P.S.: Existe um motivo para eu utilizar duas linguagens distintas para a API. A ideia deste projeto é praticar node.js. Com isso, poderia-se pensar que seria utilizado somente o node.js para o backend. Porém uma das tarefas é atualizar as partidas do campeonato brasileiro e, para isso, escolhi acessar o site da CBF com as informações necessárias. Existe um pacote em Python chamado Beautiful Soup que facilita bastante o parse de html, já que não conheço nenhuma API gratuita para conseguir as informações sobre as partidas. Portanto decidi utilizá-lo para esta tarefa específica. Para expor suas funções via API, fiz uso do framework de Python chamado Flask.