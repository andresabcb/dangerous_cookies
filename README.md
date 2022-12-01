# Dangerous Cookies Plugin

### Introdução

Para a disciplina de Tecnologias Hacker, foi pedido que criassemos um plugin para o Firefox que medisse a quantidade de cookies que está sendo usada.
Aqui estão detalhadas as partes do meu desenvolvimento.

### manifest.json

Neste arquivo, estão contidas as permissões e o detalhamento do que o meu plugin vai utilizar.

### central.js

Aqui estão as conexões necessárias para pegar as informações para a análise de Local Storage e de Embed Links (conexões e domínios de terceira parte).

### cookies.js

Neste arquivo pegamos e tratamos os cookies (se são de first ou third party e se são de sessão ou navegação).

### embed.js

Aqui descobrimos todos os links que estão na página (mesmo em imagens e embutidos em outros itens).

### localstorage.js

Este arquivo vai descobrir os itens que fazem parte do Local Storage (que é o armazenamento de dados pelo site).

### plugin.css e plugin.html

São os responsáveis pelo retorno ao usuário, envolvendo tudo que está no popup.

## Úteis

Para testar o plugin, entre no Firefox e acesse o endereço abaixo: 
> about:debugging#/runtime/this-firefox

E insira o arquivo central.js que foi criado para o projeto.

## Requisitos do projeto

- [X] Apresentar as conexões a domínios de terceira parte em uma navegação web **(2 pontos)**;  
- [ ] Potenciais ameaças de sequestro de navegador (hijacking e hook) **(1 ponto)**; 
- [X] Detectar o armazenamento de dados (storage local – html5) no dispositivo do usuário **(3 pontos)**;
- [X] A quantidade de cookies injetados no carregamento de uma página **(2 pontos)**.  
- [X] Se possível diferencie em cookies de primeira e terceira parte, bem como sessão ou navegação **(3 pontos)**;  
- [ ] Criar uma pontuação a partir de uma metodologia, indicando se a página respeita a privacidade do usuário. A sua metodologia terá como base a quantidade de cookies, storage local e conexões externas realizadas **(3 pontos)**.

#### Desejáveis:
- [ ] Detecção de Canvas fingerprint **(1 ponto)**;  
- [ ] Detectar se a página possui uma política de privacidade **(1 ponto)**.
