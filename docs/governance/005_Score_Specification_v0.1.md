# Score Specification v0.1

## 1. Objetivo

Documentar oficialmente o modelo de pontuação utilizado pelo Sistema de Inteligência de Carreira (SIC) para avaliar a aderência entre vagas coletadas e o perfil profissional do usuário.

---

## 2. Visão Geral

O Score v2.1 foi desenvolvido para:

- Identificar aderência técnica.
- Identificar aderência funcional.
- Priorizar vagas relevantes.
- Reduzir falsos positivos.
- Melhorar a eficiência da candidatura.

O modelo utiliza análise baseada em palavras-chave, categorias ponderadas e penalizações.

---

## 3. Modelo Atual

```text
Versão: v2.1
Complemento: Enriquecimento Analítico v1
Status: Produção
```

---

## 4. Categorias Avaliadas

### Cargo

Peso:

```text
40 pontos
```

Objetivo:

Identificar compatibilidade entre cargo da vaga e perfil profissional.

Exemplos:

```text
Analista de Dados
Data Analyst
BI Analyst
Business Analyst
Analytics Engineer
Data Engineer
Engenheiro de Dados
```

---

### Ferramentas

Peso:

```text
30 pontos
```

Objetivo:

Identificar tecnologias e ferramentas utilizadas.

Exemplos:

```text
SQL
Python
Power BI
Excel
DAX
Power Query
Tableau
Looker
Spark
PySpark
ETL
ELT
SSIS
SSRS
```

---

### Cloud

Peso:

```text
15 pontos
```

Objetivo:

Identificar ambientes modernos de dados.

Exemplos:

```text
AWS
Azure
GCP
Google Cloud
BigQuery
Snowflake
Databricks
Microsoft Fabric
Synapse
Data Lake
Delta Lake
Lakehouse
ADF
```

---

### Negócio

Peso:

```text
15 pontos
```

Objetivo:

Identificar contexto analítico e indicadores.

Exemplos:

```text
KPIs
Indicadores
Dashboards
Analytics
Métricas
Data Quality
Governança
Modelagem
Business Intelligence
```

---

## 5. Fórmula de Pontuação

Para cada categoria:

```text
(encontrados / termos) × peso × 4
```

Limitado ao peso máximo da categoria.

Implementação:

```text
Math.min(
  peso,
  Math.round(
    (encontrados.length / termos.length) * peso * 4
  )
)
```

---

## 6. Penalizações

Objetivo:

Reduzir pontuação de vagas pouco aderentes.

Exemplos:

```text
vendas
sales
estágio
internship
social media
```

Regra atual:

```text
-3 pontos por termo penalizado
```

---

## 7. Faixas de Classificação

### Pouco aderente

```text
0 - 20
```

### Baixa aderência

```text
21 - 40
```

### Média aderência

```text
41 - 60
```

### Boa aderência

```text
61 - 80
```

### Excelente aderência

```text
81 - 100
```

---

## 8. Dados Produzidos

O motor gera:

```text
score
faixa_score
categorias_detectadas
tecnologias_detectadas
termos_detectados
penalizacoes_detectadas
```

---

## 9. Correções Realizadas na SP-013

### Correção 01

Problema:

```text
Score retornando zero mesmo com termos detectados.
```

Causa:

```text
Fórmula de cálculo inadequada.
```

Resultado:

```text
Pontuação passou a refletir corretamente a aderência.
```

---

### Correção 02

Problema:

```text
Penalização excessiva.
```

Regra anterior:

```text
-10 pontos
```

Nova regra:

```text
-3 pontos
```

Resultado:

```text
Melhor equilíbrio entre aderência e penalização.
```

---

## 10. Exemplo Real

Vaga:

```text
Analista de Dados
SQL
Excel
KPIs
Indicadores
```

Resultado:

```text
Categorias:
- Ferramentas
- Negócio

Tecnologias:
- SQL
- Excel

Faixa:
Pouco aderente
```

---

## 11. Governança

Toda alteração do Score deve:

1. Ser registrada no RAID Log.
2. Ser registrada no Change Log.
3. Possuir homologação.
4. Possuir evidência de testes.

---

## 12. Roadmap

### v2.2

Planejado:

```text
Peso por senioridade
Peso por localização
Peso por modalidade
Peso por salário
```

---

### v3.0

Planejado:

```text
IA Generativa
Embeddings
Matching Semântico
Ranking Inteligente
```

---

## Status

```text
Versão: 2.1
Sprint: SP-013
Marco: M07
Status: Aprovado
```

---

**Projeto:** Sistema de Inteligência de Carreira (SIC)  
**Documento:** Score Specification  
**Versão:** 0.1  
**Status:** Aprovado
