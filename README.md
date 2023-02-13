# Eleições 2022 - Apuração do 1º Turno

Apurações de votos (TSE) criado por [Leonan Thomaz](https://leonanthomaz.vercel.app/)

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fleonanthomaz%2Feleicoes2022-primeiroTurno&count_bg=%2379C83D&title_bg=%23555555&icon=tinder.svg&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)
[![GitHub stars](https://img.shields.io/github/stars/leonanthomaz/eleicoes2022-primeiroTurno?style=social)](https://github.com/login?return_to=%leonanthomaz%eleicoes2022-primeiroTurno) 
![GitHub forks](https://img.shields.io/github/forks/leonanthomaz/eleicoes2022-primeiroTurno?style=social) 

## 🖥️ Tecnologias

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 🚀 Sobre o projeto

Portal onde apresenta estatísticas dos candidatos a presidência da República do dia 02/10/2022, consumindo API do TSE.

## Instalação

Comandos básicos GIT:

```
$ git clone https://github.com/leonanthomaz/eleicoes2022-primeiroTurno.git
$ cd project
$ npm install
```

## Setup

### Url obtida
```
https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json

```

## Dicionário da API

### Data e Hora (Atualização)
- <b>Hora local</b>: hg  
- <b>Data local</b>: dg 

### Votos
- <b>Validos</b>: vnom
- <b>Anulados</b>: van
- <b>Anulados sob judice</b>: vansj
- <b>Nulos (totais)</b>: tvn
- <b>Nulos (porcentagem)</b>: ptvn
- <b>Brancos</b>: vb
- <b>Brancos (porcentagem)</b>: pvb
- <b>Votos Totais</b>: tv

### Candidato
- <b>Identificador</b>: seq
- <b>Nome do candidato</b>: nm
- <b>Partido</b>: cc
- <b>Numero</b>: n
- <b>Situação</b>: st
- <b>Eleito</b>: e
- <b>Porcentagem obtida</b>: pvap
- <b>Total de Votos</b>: vap

### Estatisticas gerais
- <b>Comparecimento</b>: pc
- <b>Porcentagem de abstenções</b>: pa
- <b>Abstenções</b>: a
- <b>Seções (contabilizadas)</b>: s
- <b>Seções (totais apuradas)</b>: st
- <b>Seções (porcentagem apuradas)</b>: pst



