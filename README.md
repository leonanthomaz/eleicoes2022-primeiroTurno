# Eleições 2022 - Apuração do 1º Turno
Apuração da eleição presidencial do primeiro turno, consumindo API diretamente do TSE.

## URL da API obtida
https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json

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

