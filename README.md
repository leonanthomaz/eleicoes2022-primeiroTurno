# Eleições 2022 - Apuração do 1º Turno
Apuração da eleição presidencial do primeiro turno, consumindo API diretamente do TSE.

## URL da API obtida
https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json

## Dicionário da API

<b>Datas e Hora</b>
- <b>Hora local</b>: hg  
- <b>Horário local</b>: dg 
<hr/>
<b>Votos</b>:
- <b>Validos</b>: vnom
- <b>Anulados</b>: van
- <b>Anulados sob judice</b>: vansj
- <b>Nulos (totais)</b>: tvn
- <b>Nulos (porcentagem)</b>: ptvn
- <b>Brancos</b>: vb
- <b>Brancos (porcentagem)</b>: pvb
- <b>Votos Totais</b>: tv
<hr/>
<b>Candidato</b>:
- <b>Nome do candidato</b>: vnom
- <b>Partido</b>: van
- <b>Numero</b>: tvn
- <b>Porcentagem obtida</b>: van
- <b>Eleito</b>: vnom
- <b>Total de Votos</b>: vap
<hr/>
<b>Estatisticas gerais</b>:
- <b>Comparecimento</b>: pc
- <b>Porcentagem de abstenções</b>: pa
- <b>Abstenções</b>: a
- <b>Seções (contabilizadas)</b>: s
- <b>Seções (totais apuradas)</b>: st
- <b>Seções (porcentagem apuradas)</b>: pst

