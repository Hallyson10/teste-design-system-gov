# Design System do Governo Federal

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Este repositório concentra os componentes, documentações e templates do Design System do Governo Federal.

Como iniciar a criação de um novo trabalho neste repositório:

1 - Clone o repositório

```git
git clone git@git.serpro:dsgov/dsgov-dsgov.git
```

2 - Verifique se o projeto está na branch develop

3 - Entre na pasta do clone e execute os comandos:

```node
npm run init
```

4 - No Visual Studio code execute o comando (CTRL + P):

```node
ext install ritwickdey.LiveServer
```

> Mais informações sobre a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

5 - Para executar o projeto execute o comando

```node
npm run start
```

6 - Abra a pasta **dist** e clique com o botão direito em cima da página html do componente/templates que você está alterando.

7 - Aguarde a abertura do navegador com a página solicitada

## Testando o Projeto

### Iniciar o ambiente de testes

```node
npm run start:test
```

### Iniciar o cypress

```node
npm run cypress:interface
```

### Endereço do servidor

[http://localhost:9000](http://localhost:9000)
