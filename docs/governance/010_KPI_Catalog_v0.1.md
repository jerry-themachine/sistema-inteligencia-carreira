# KPI Catalog v0.1

## Documento

```text
Projeto: Sistema de Inteligência de Carreira (SIC)
Documento: KPI Catalog
Versão: 0.1
Status: Publicado
Sprint: SP-013
```

---

# Objetivo

Catalogar os indicadores oficiais do SIC para análise operacional, tática e estratégica.

---

# KPI 01 - Total de Vagas

## Definição

Quantidade total de vagas persistidas.

## Fórmula

```text
COUNT(Vagas)
```

## Tipo

```text
Volume
```

---

# KPI 02 - Vagas por Fonte

## Definição

Distribuição de vagas por origem.

## Agrupamento

```text
fonte
```

---

# KPI 03 - Vagas por Modalidade

## Definição

Distribuição das modalidades de trabalho.

## Valores

```text
Remoto
Híbrido
Presencial
```

---

# KPI 04 - Score Médio

## Definição

Média dos scores calculados.

## Fórmula

```text
AVG(score)
```

---

# KPI 05 - Vagas Aprovadas

## Definição

Quantidade de vagas que passaram pela validação.

## Regra

```text
score >= 10
```

---

# KPI 06 - Top Empresas

## Definição

Empresas com maior número de vagas.

---

# KPI 07 - Top Tecnologias

## Definição

Tecnologias mais citadas.

## Fonte

```text
tecnologias_detectadas
```

---

# KPI 08 - Top Cidades

## Definição

Localidades com maior volume de oportunidades.

---

# KPI 09 - Evolução de Coletas

## Definição

Quantidade de vagas coletadas ao longo do tempo.

## Campo

```text
data_coleta
```

---

# KPI 10 - Distribuição por Faixa de Score

## Categorias

```text
Pouco aderente
Baixa aderência
Média aderência
Boa aderência
Excelente aderência
```

---

# Dashboard Roadmap

## Fase 1

```text
Visão Geral
```

## Fase 2

```text
Análise de Mercado
```

## Fase 3

```text
Radar de Carreira
```

---

# Status

```text
Documento: KPI Catalog
Versão: 0.1
Projeto: SIC
Status: Publicado
Sprint: SP-013
```
