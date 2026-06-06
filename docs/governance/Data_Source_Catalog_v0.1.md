# Data Source Catalog v0.1

## Objetivo

Catalogar oficialmente todas as fontes de dados utilizadas pelo Sistema de Inteligência de Carreira (SIC).

Este documento tem como objetivo centralizar informações sobre:

- Origem dos dados
- Método de coleta
- Status da integração
- Status da homologação
- Campos retornados
- Limitações conhecidas
- Evolução planejada

---

# Visão Geral

| Fonte | Status | Homologação | Prioridade |
|---------|---------|---------|---------|
| Arbeitnow | Produção | Aprovada | Alta |
| Gupy | Produção | Aprovada | Alta |
| InfoJobs | Produção | Aprovada | Alta |
| Recrutei | Desenvolvimento | Pendente | Média |
| Catho | Desenvolvimento | Pendente | Média |

---

# Fonte 01 - Arbeitnow

## Descrição

Portal internacional de vagas com API pública.

## Método de Coleta

```text
HTTP Request API
```

## Tipo

```text
API Pública
```

## Status

```text
Produção
```

## Homologação

```text
Aprovada
```

## Campos Retornados

```text
cargo
empresa
descricao
localizacao
link
data_publicacao
```

## Observações

```text
Primeira fonte homologada do SIC.
Base utilizada durante a construção inicial do workflow.
```

---

# Fonte 02 - Gupy

## Descrição

Portal de recrutamento corporativo amplamente utilizado no Brasil.

## Método de Coleta

```text
HTTP Request + Parsing HTML
```

## Tipo

```text
Scraping Estruturado
```

## Status

```text
Produção
```

## Homologação

```text
Aprovada
```

## Campos Retornados

```text
cargo
empresa
descricao
cidade
modalidade
link
fonte
```

## Observações

```text
Integração homologada durante a SP-011.
```

---

# Fonte 03 - InfoJobs

## Descrição

Portal de vagas nacional.

## Método de Coleta

```text
Listagem HTML
Extração de IDs
Consulta individual por vaga
Normalização
```

## Tipo

```text
Scraping Estruturado
```

## Status

```text
Produção
```

## Homologação

```text
Aprovada
```

## Campos Retornados

```text
empresa
cargo
descricao
cidade
pais
modalidade
salario
link
fonte
data_coleta
```

## Observações

```text
Homologada na SP-013.

Fluxo:
Lista → IDs → Detalhe → Normalização → Score → Google Sheets
```

---

# Fonte 04 - Recrutei

## Descrição

Portal de recrutamento e seleção.

## Método de Coleta

```text
HTTP Request
```

## Tipo

```text
Integração em desenvolvimento
```

## Status

```text
Desenvolvimento
```

## Homologação

```text
Pendente
```

## Observações

```text
Necessita refinamento da coleta e validação dos retornos.
```

---

# Fonte 05 - Catho

## Descrição

Portal de vagas nacional.

## Método de Coleta

```text
HTTP Request
```

## Tipo

```text
Integração em desenvolvimento
```

## Status

```text
Desenvolvimento
```

## Homologação

```text
Pendente
```

## Observações

```text
Portal apresentou restrições relacionadas a políticas de cookies.

Necessário aprofundar estratégia de coleta.
```

---

# Padrão de Campos SIC

Todas as fontes devem convergir para o seguinte modelo:

```text
empresa
cargo
descricao
cidade
pais
modalidade
salario
link
fonte
data_coleta
```

---

# Pipeline Oficial

```text
Coleta
→ Normalização
→ Score v2.1
→ Validação
→ Persistência
→ Dashboard
```

---

# Critérios para Homologação

Uma fonte será considerada homologada quando:

- Retornar vagas válidas
- Possuir normalização completa
- Integrar com Score v2.1
- Persistir corretamente no Google Sheets
- Passar pelos testes funcionais

---

# Roadmap

## SP-014

```text
Homologar Recrutei
Homologar Catho
```

## SP-015

```text
Novas fontes nacionais
Melhorias de deduplicação
```

## SP-016

```text
Fontes internacionais adicionais
Monitoramento automático
```

---

# Status

```text
Documento: Data Source Catalog
Versão: 0.1
Projeto: Sistema de Inteligência de Carreira (SIC)
Status: Publicado
Sprint: SP-013
```
