# Score v2.1 Homologation

## Documento

```text
Sistema: SIC - Sistema de Inteligência de Carreira
Módulo: Motor de Score
Versão: 2.1
Sprint: SP-013
Status: Homologado
```

---

# Objetivo

Validar o correto funcionamento do motor de pontuação utilizado para classificar vagas coletadas pelas fontes integradas ao SIC.

---

# Escopo

Itens avaliados:

- Cálculo de score
- Identificação de categorias
- Identificação de tecnologias
- Identificação de termos encontrados
- Aplicação de penalizações
- Classificação por faixa de aderência
- Persistência dos resultados
- Integração com Google Sheets

---

# Problemas Identificados

## Defeito 01

Descrição:

```text
Vagas contendo termos aderentes retornavam score igual a zero.
```

Impacto:

```text
Classificação incorreta das vagas.
```

Severidade:

```text
Alta
```

Status:

```text
Corrigido
```

---

## Defeito 02

Descrição:

```text
Penalização excessiva para termos negativos.
```

Regra anterior:

```text
-10 pontos por termo
```

Impacto:

```text
Redução exagerada da pontuação final.
```

Status:

```text
Corrigido
```

---

# Correções Aplicadas

## Correção 01

Ajuste da fórmula de cálculo:

Antes:

```text
Resultado insuficiente para refletir aderência real.
```

Depois:

```javascript
Math.min(
  peso,
  Math.round(
    (encontrados.length / termos.length) * peso * 4
  )
)
```

Resultado:

```text
Score passou a refletir corretamente os termos encontrados.
```

---

## Correção 02

Penalização recalibrada.

Antes:

```text
-10 pontos
```

Depois:

```text
-3 pontos
```

Resultado:

```text
Melhor equilíbrio entre aderência e penalização.
```

---

# Testes Executados

## Cenário 01

Fonte:

```text
InfoJobs
```

Cargo:

```text
Analista de Banco de Dados
```

Termos detectados:

```text
SQL
Excel
Excel Avançado
KPIs
Indicadores
```

Categorias detectadas:

```text
Ferramentas
Negócio
```

Resultado:

```text
Score calculado corretamente.
```

Status:

```text
Aprovado
```

---

## Cenário 02

Fonte:

```text
InfoJobs
```

Validação:

```text
Categorias detectadas
```

Resultado:

```text
Ferramentas
Cloud
Negócio
Cargo
```

Status:

```text
Aprovado
```

---

## Cenário 03

Validação:

```text
Tecnologias detectadas
```

Resultado:

```text
SQL
Power BI
Excel
Databricks
Spark
BigQuery
```

Status:

```text
Aprovado
```

---

## Cenário 04

Validação:

```text
Persistência Google Sheets
```

Resultado:

```text
Dados gravados corretamente.
```

Status:

```text
Aprovado
```

---

# Evidências

## Workflow

```text
Coleta InfoJobs
→ Extração de IDs
→ Consulta de Detalhes
→ Normalização
→ Score v2.1
→ Validação
→ Google Sheets
```

---

## Campos Gerados

```text
score
faixa_score
categorias_detectadas
tecnologias_detectadas
termos_detectados
penalizacoes_detectadas
modelo_score
```

---

# Resultado Final

Homologação realizada com sucesso.

Todos os testes executados apresentaram comportamento esperado.

Motor de Score aprovado para uso em produção.

---

# Aprovação

```text
Status: APROVADO
Data: Junho/2026
Sprint: SP-013
Versão: Score v2.1
```

---

# Próximas Evoluções

## Score v2.2

Planejado:

```text
Peso por modalidade
Peso por localização
Peso por salário
Peso por senioridade
```

## Score v3.0

Planejado:

```text
Matching Semântico
Embeddings
IA Generativa
Ranking Inteligente
```

---

Documento homologado.

Projeto: Sistema de Inteligência de Carreira (SIC)
Documento: Score Homologation
Versão: 0.1
Status: Aprovado
