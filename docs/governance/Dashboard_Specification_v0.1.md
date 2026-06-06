# Dashboard Specification v0.1

## Documento

```text
Projeto: Sistema de Inteligência de Carreira (SIC)
Documento: Dashboard Specification
Versão: 0.1
Status: Publicado
Sprint: SP-013
```

---

# Objetivo

Definir a estrutura oficial do Dashboard Power BI do SIC.

Este documento descreve:

- Páginas
- Indicadores
- Filtros
- Visualizações
- Navegação
- Evoluções futuras

---

# Visão Geral

O Dashboard SIC tem como objetivo transformar os dados coletados em informações estratégicas para tomada de decisão.

Principais benefícios:

```text
Identificação de oportunidades
Análise de mercado
Monitoramento de aderência
Acompanhamento de tendências
```

---

# Estrutura Geral

```text
Página 01 - Visão Executiva
Página 02 - Mercado de Trabalho
Página 03 - Tecnologias
Página 04 - Empresas
Página 05 - Score e Aderência
Página 06 - Evolução Temporal
```

---

# Página 01 - Visão Executiva

## Objetivo

Apresentar visão consolidada do ambiente de vagas.

## KPIs

```text
Total de Vagas
Score Médio
Empresas Únicas
Cidades Únicas
Tecnologias Detectadas
```

## Visuais

```text
Cards
Gráfico de Barras
Mapa
Tabela Resumida
```

---

# Página 02 - Mercado de Trabalho

## Objetivo

Analisar comportamento das oportunidades.

## KPIs

```text
Vagas por Cidade
Vagas por Modalidade
Vagas por Fonte
```

## Visuais

```text
Barras
Pizza
Treemap
Mapa
```

---

# Página 03 - Tecnologias

## Objetivo

Monitorar demanda tecnológica.

## KPIs

```text
Top Tecnologias
Top Ferramentas
Top Clouds
```

## Campos Utilizados

```text
tecnologias_detectadas
termos_detectados
```

## Visuais

```text
Ranking
Barras
Nuvem de Palavras
```

---

# Página 04 - Empresas

## Objetivo

Analisar empresas contratantes.

## KPIs

```text
Top Empresas
Quantidade de Vagas
Participação %
```

## Visuais

```text
Tabela
Barras
Treemap
```

---

# Página 05 - Score e Aderência

## Objetivo

Monitorar qualidade das oportunidades.

## KPIs

```text
Score Médio
Maior Score
Menor Score
```

## Faixas

```text
Pouco aderente
Baixa aderência
Média aderência
Boa aderência
Excelente aderência
```

## Visuais

```text
Histograma
Barras
Cards
```

---

# Página 06 - Evolução Temporal

## Objetivo

Analisar crescimento das coletas.

## KPIs

```text
Vagas por Dia
Vagas por Semana
Vagas por Mês
```

## Campo Base

```text
data_coleta
```

## Visuais

```text
Linha
Área
Tendência
```

---

# Filtros Globais

## Fonte

```text
Arbeitnow
Gupy
InfoJobs
Recrutei
Catho
```

---

## Modalidade

```text
Remoto
Híbrido
Presencial
```

---

## Cidade

```text
cidade
```

---

## Faixa Score

```text
faixa_score
```

---

## Tecnologia

```text
tecnologias_detectadas
```

---

# Drill Through Planejado

## Empresa

Permitir navegação detalhada para:

```text
Empresa
Quantidade de vagas
Tecnologias
Modalidades
```

---

## Tecnologia

Permitir navegação detalhada para:

```text
Tecnologia
Empresas
Cidades
Vagas relacionadas
```

---

# Modelo de Atualização

## Frequência

```text
Diária
```

## Fonte

```text
Google Sheets
```

## Processo

```text
Google Sheets
→ Power BI
→ Atualização
→ Dashboard
```

---

# Roadmap

## Fase 01

```text
Dashboard Operacional
```

---

## Fase 02

```text
Análise de Mercado
```

---

## Fase 03

```text
Radar de Carreira
```

---

## Fase 04

```text
Machine Learning
Matching Semântico
IA Generativa
```

---

# Critérios de Sucesso

```text
Atualização automática
Baixo tempo de resposta
Visual limpo
Alta rastreabilidade
Escalabilidade
```

---

# Status

```text
Documento: Dashboard Specification
Versão: 0.1
Projeto: SIC
Status: Publicado
Sprint: SP-013
```
