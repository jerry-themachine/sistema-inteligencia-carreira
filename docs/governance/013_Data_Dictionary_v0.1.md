# Data Dictionary v0.1

## Documento

```text
Projeto: Sistema de Inteligência de Carreira (SIC)
Documento: Data Dictionary
Versão: 0.1
Status: Publicado
Sprint: SP-013
```

---

# Objetivo

Documentar formalmente todos os campos utilizados pelo SIC.

Este documento serve como referência para:

- Desenvolvimento
- Governança
- Homologação
- Power BI
- Evolução do Modelo de Dados

---

# Entidade Principal

## VAGA

Representa uma oportunidade de emprego coletada por qualquer fonte integrada ao SIC.

---

# Campos Operacionais

## empresa

### Descrição

Nome da empresa anunciante.

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

### Origem

```text
Fonte de Vagas
```

---

## cargo

### Descrição

Título principal da oportunidade.

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

### Descrição

Texto integral da vaga.

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

### Descrição

Cidade identificada na vaga.

### Tipo

```text
Texto
```

### Exemplo

```text
São Paulo
Curitiba
Remoto
```

---

## pais

### Descrição

País associado à oportunidade.

### Tipo

```text
Texto
```

### Valor Padrão

```text
Brasil
```

---

## modalidade

### Descrição

Modelo de trabalho.

### Tipo

```text
Texto
```

### Valores Permitidos

```text
Remoto
Híbrido
Presencial
Não informado
```

---

## salario

### Descrição

Faixa salarial identificada.

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

### Descrição

URL da vaga original.

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

### Descrição

Origem da coleta.

### Tipo

```text
Texto
```

### Valores Conhecidos

```text
Arbeitnow
Gupy
InfoJobs
Recrutei
Catho
```

---

## data_coleta

### Descrição

Data e hora da coleta.

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

### Descrição

Percentual de preenchimento da vaga.

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

### Descrição

Classificação da qualidade da informação.

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

### Descrição

Validação dos campos mandatórios.

### Valores

```text
Sim
Não
```

---

## campos_faltantes

### Descrição

Lista de atributos ausentes.

### Tipo

```text
Texto
```

---

# Campos de Experiência

## exige_experiencia

### Descrição

Indica exigência explícita de experiência.

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

### Descrição

Tempo mínimo identificado.

### Exemplos

```text
1 ano
2 anos
3 anos
Não informado
```

---

## nivel_experiencia

### Descrição

Senioridade detectada.

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

### Descrição

Nível técnico inferido.

### Valores

```text
Básico
Intermediário
Avançado
```

---

# Campos de Idioma

## idiomas_exigidos

### Descrição

Idiomas identificados na vaga.

### Exemplo

```text
Inglês
Espanhol
```

---

## nivel_idioma

### Descrição

Nível requerido para o idioma.

### Valores

```text
Básico
Intermediário
Avançado
Fluente
```

---

# Campos Analíticos

## score

### Descrição

Pontuação de aderência calculada pelo SIC.

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

### Descrição

Classificação textual do score.

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

### Descrição

Categorias identificadas pelo motor analítico.

### Exemplos

```text
cargo
ferramentas
cloud
negocio
```

---

## tecnologias_detectadas

### Descrição

Tecnologias identificadas na vaga.

### Exemplos

```text
sql
python
power bi
spark
databricks
fabric
```

---

## termos_detectados

### Descrição

Termos encontrados durante o processamento.

### Tipo

```text
Texto Longo
```

---

## penalizacoes_detectadas

### Descrição

Termos que reduzem aderência.

### Exemplos

```text
vendas
estagio
internship
```

---

## modelo_score

### Descrição

Versão do motor analítico utilizado.

### Valor Atual

```text
Score v2.1 + Enriquecimento Analítico v1
```

---

# Campos Derivados

## origem_registro

### Tipo

```text
Calculado
```

### Regra

```text
Gerado a partir do campo fonte
```

---

## data_referencia

### Tipo

```text
Calculado
```

### Regra

```text
Derivado de data_coleta
```

---

# Regras de Governança

## Chave Lógica

```text
empresa + cargo + link
```

---

## Persistência

Apenas vagas aprovadas pela validação serão gravadas.

```text
score >= 10
```

---

## Versionamento

Todo novo campo deve atualizar:

```text
Data_Model
Data_Dictionary
Dashboard_Specification
```

---

# Histórico de Revisões

| Versão | Sprint | Descrição |
|---------|---------|---------|
| 0.1 | SP-013 | Criação inicial do dicionário de dados |

---

# Status

```text
Documento: Data Dictionary
Versão: 0.1
Projeto: SIC
Status: Publicado
Sprint: SP-013
```
