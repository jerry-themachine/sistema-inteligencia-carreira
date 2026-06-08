# Data Model v0.1

## Documento

```text
Projeto: Sistema de Inteligência de Carreira (SIC)
Documento: Data Model
Versão: 0.1
Status: Publicado
Sprint: SP-013
```

---

# Objetivo

Definir oficialmente o modelo de dados utilizado pelo SIC.

Este documento estabelece:

- Estrutura padrão de dados
- Campos obrigatórios
- Campos opcionais
- Campos derivados
- Regras de preenchimento
- Consumo analítico
- Compatibilidade entre fontes

---

# Visão Geral

Todas as fontes de vagas devem convergir para um único modelo de dados.

Objetivos:

```text
Padronização
Escalabilidade
Governança
Análise
Integração com Power BI
```

---

# Modelo Conceitual

```text
Fonte
  ↓
Coleta
  ↓
Normalização
  ↓
Enriquecimento
  ↓
Score
  ↓
Persistência
  ↓
Dashboard
```

---

# Entidade Principal

## VAGA

Representa uma oportunidade de emprego coletada pelo SIC.

---

# Campos Operacionais

## empresa

### Tipo

```text
Texto
```

### Obrigatório

```text
Sim
```

### Exemplo

```text
Telefônica Brasil
```

---

## cargo

### Tipo

```text
Texto
```

### Obrigatório

```text
Sim
```

### Exemplo

```text
Analista de Dados Pleno
```

---

## descricao

### Tipo

```text
Texto Longo
```

### Obrigatório

```text
Sim
```

---

## cidade

### Tipo

```text
Texto
```

### Obrigatório

```text
Não
```

---

## pais

### Tipo

```text
Texto
```

### Obrigatório

```text
Sim
```

### Valor padrão

```text
Brasil
```

---

## modalidade

### Tipo

```text
Texto
```

### Valores esperados

```text
Remoto
Híbrido
Presencial
```

---

## salario

### Tipo

```text
Texto
```

### Exemplos

```text
R$ 6.000,00
A combinar
Não informado
```

---

## link

### Tipo

```text
URL
```

### Obrigatório

```text
Sim
```

---

## fonte

### Tipo

```text
Texto
```

### Exemplos

```text
Arbeitnow
Gupy
InfoJobs
Recrutei
Catho
```

---

## data_coleta

### Tipo

```text
Datetime
```

### Formato

```text
DD/MM/YYYY HH:mm:ss
```

---

# Campos de Qualidade

## completude_dados

### Tipo

```text
Número
```

### Faixa

```text
0 a 100
```

---

## qualidade_dados

### Tipo

```text
Texto
```

### Valores

```text
Alta
Média
Baixa
```

---

## campos_obrigatorios_ok

### Tipo

```text
Texto
```

### Valores

```text
Sim
Não
```

---

## campos_faltantes

### Tipo

```text
Texto
```

### Exemplo

```text
salario
cidade
```

---

# Campos de Experiência

## exige_experiencia

### Tipo

```text
Texto
```

### Valores

```text
Sim
Não
```

---

## tempo_minimo_experiencia

### Tipo

```text
Texto
```

### Exemplos

```text
1 ano
2 anos
3 anos
Não informado
```

---

## nivel_experiencia

### Tipo

```text
Texto
```

### Valores

```text
Júnior
Pleno
Sênior
Especialista
Não informado
```

---

## nivel_conhecimento_detectado

### Tipo

```text
Texto
```

### Exemplos

```text
Básico
Intermediário
Avançado
```

---

# Campos de Idioma

## idiomas_exigidos

### Tipo

```text
Texto
```

### Exemplo

```text
Inglês
```

---

## nivel_idioma

### Tipo

```text
Texto
```

### Valores

```text
Básico
Intermediário
Avançado
Fluente
```

---

# Campos de Score

## score

### Tipo

```text
Número
```

### Faixa

```text
0 a 100
```

---

## faixa_score

### Tipo

```text
Texto
```

### Valores

```text
Pouco aderente
Baixa aderência
Média aderência
Boa aderência
Excelente aderência
```

---

## categorias_detectadas

### Tipo

```text
Texto
```

### Exemplos

```text
cargo
ferramentas
cloud
negocio
```

---

## tecnologias_detectadas

### Tipo

```text
Texto
```

### Exemplos

```text
sql
python
power bi
spark
databricks
```

---

## termos_detectados

### Tipo

```text
Texto Longo
```

---

## penalizacoes_detectadas

### Tipo

```text
Texto
```

### Exemplos

```text
vendas
estagio
internship
```

---

## modelo_score

### Tipo

```text
Texto
```

### Valor Atual

```text
Score v2.1 + Enriquecimento Analítico v1
```

---

# Regras de Governança

## Campos Obrigatórios

```text
empresa
cargo
descricao
link
fonte
pais
```

---

## Regras de Persistência

Uma vaga somente poderá ser persistida quando:

```text
Campos obrigatórios preenchidos
Score aprovado
Validação concluída
```

---

# Compatibilidade de Fontes

| Campo | Arbeitnow | Gupy | InfoJobs | Recrutei | Catho |
|---------|---------|---------|---------|---------|---------|
| empresa | Sim | Sim | Sim | Planejado | Planejado |
| cargo | Sim | Sim | Sim | Planejado | Planejado |
| descricao | Sim | Sim | Sim | Planejado | Planejado |
| cidade | Parcial | Sim | Sim | Planejado | Planejado |
| salario | Não | Parcial | Sim | Planejado | Planejado |
| modalidade | Parcial | Sim | Sim | Planejado | Planejado |

---

# Consumo Power BI

Métricas planejadas:

```text
Vagas por Fonte
Vagas por Cidade
Vagas por Modalidade
Score Médio
Top Tecnologias
Top Empresas
Evolução Temporal
```

---

# Roadmap

## SP-014

```text
Validação de modelo com Recrutei
Validação de modelo com Catho
```

## SP-015

```text
Integração Power BI
```

---

# Status

```text
Documento: Data Model
Versão: 0.1
Projeto: SIC
Status: Publicado
Sprint: SP-013
```
