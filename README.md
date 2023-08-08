# Jogo Mario

Este documento fornece informações sobre o projeto do Jogo Mario, uma implementação simples criada como forma de estudo. O jogo apresenta detalhes sobre sua funcionalidade, estrutura de arquivos, como jogar e como personalizar o jogo.

## Descrição

O projeto do Jogo Mario é um jogo simples baseado em navegador, onde os jogadores controlam o personagem Mario para evitar obstáculos (canos) e alcançar a maior pontuação possível. O jogo conta o tempo que o jogador passa jogando e exibe o recorde atual. O jogo possui uma mecânica de pulo que permite ao jogador fazer o Mario pular para evitar os obstáculos.

## Estrutura de Arquivos

O projeto é composto pelos seguintes arquivos:

- `index.html`: Este é o arquivo principal do jogo que contém a estrutura HTML do jogo, incluindo os elementos do jogo, como Mario, canos e placares.
- `css/style.css`: Este arquivo contém os estilos CSS que são aplicados aos elementos do jogo para criar a aparência visual.
- `js/script.js`: Neste arquivo JavaScript, a lógica do jogo é implementada. Ele controla o movimento do Mario, detecção de colisões, registro de pontuação e manipulação de eventos.

## Como Jogar

1. Abra o arquivo `index.html` em um navegador da web compatível com JavaScript.
2. O Mario estará no canto esquerdo da tela.
3. Pressione qualquer tecla para fazer o Mario pular e evitar os canos que se movem da direita para a esquerda.
4. O jogo conta o tempo que você joga e exibe o seu recorde atual.
5. Se o Mario colidir com um cano, o jogo termina. Clique no botão "Reiniciar" para jogar novamente.

## Personalização

Você pode personalizar o jogo de acordo com suas preferências:

- **Imagens**: Substitua as imagens na pasta `images` por suas próprias imagens para personalizar o Mario, os canos e o plano de fundo.
- **Estilos**: Edite o arquivo `css/style.css` para ajustar a aparência visual do jogo, como cores, tamanhos e animações.
- **Mecânica do Jogo**: No arquivo `js/script.js`, você pode ajustar os valores de pulo, velocidade dos canos e detecção de colisões para tornar o jogo mais desafiador ou mais acessível.

## Créditos

Este projeto foi personalizado por Adrian Carvalho como parte de um estudo, tendo sua base criada por Manual do Dev. O projeto é baseado na temática do personagem Mario, que é propriedade da Nintendo.
