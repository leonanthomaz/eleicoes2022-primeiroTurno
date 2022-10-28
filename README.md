# Eleições 2022 - Apuração do 1º Turno
Apuração da eleição presidencial do primeiro turno, consumindo API diretamente do TSE.

## URL da API obtida
https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json

## Dicionário da API
Datas e Hora:
- Hora local: hg  
- Horário local: dg 

Votos:
- Validos: vnom
- Anulados: van
- Anulados sob judice: vansj
- Nulos (totais): tvn
- Nulos (porcentagem): ptvn
- Brancos: vb
- Brancos (porcentagem): pvb
- Votos Totais: tv

Candidato:
- <b>Nome do candidato</b>: vnom
- Partido: van
- Numero: tvn
- Eleito: vnom
- Porcentagem obtida: van
- Total de Votos: vap

Estatisticas gerais:
- Comparecimento: pc
- Abstenções: a
- Porcentagem de abstenções: pa
- Seções (contabilizadas): s
- Seções (totais apuradas): st
- Seções (porcentagem apuradas): pst

