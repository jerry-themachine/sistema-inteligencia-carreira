# Technical Decisions Log v0.1

## Documento

```text
Projeto: Sistema de Inteligência de Carreira (SIC)
Documento: Technical Decisions Log
Versão: 0.1
Status: Publicado
Sprint: SP-013
```

---

# Objetivo

Registrar as principais decisões técnicas e arquiteturais adotadas durante o desenvolvimento do SIC.

Este documento busca responder:

```text
O que foi decidido?
Por que foi decidido?
Quando foi decidido?
Qual o impacto da decisão?
```

---

# TD-001

## Título

Uso do n8n como plataforma principal de automação.

## Sprint

```text
SP-010
```

## Decisão

Utilizar n8n local como orquestrador principal do projeto.

## Motivação

```text
Baixo custo
Rapidez de implementação
Grande capacidade de integração
Baixa curva de manutenção
```

## Impacto

```text
Positivo
```

## Status

```text
Ativo
```

---

# TD-002

## Título

Google Sheets como camada inicial de persistência.

## Sprint

```text
SP-010
```

## Decisão

Utilizar Google Sheets como base operacional.

## Motivação

```text
Facilidade de acesso
Baixa complexidade
Integração nativa com n8n
Rápida visualização dos dados
```

## Impacto

```text
Positivo
```

## Status

```text
Ativo
```

---

# TD-003

## Título

Arquitetura Multi-Fontes.

## Sprint

```text
SP-010
```

## Decisão

Permitir integração simultânea de múltiplos portais de vagas.

## Motivação

```text
Aumentar cobertura
Reduzir dependência de uma única fonte
Expandir oportunidades encontradas
```

## Impacto

```text
Estratégico
```

## Status

```text
Ativo
```

---

# TD-004

## Título

Modelo de Dados Unificado.

## Sprint

```text
SP-010
```

## Decisão

Todas as fontes devem convergir para um único schema.

## Motivação

```text
Facilitar análises
Reduzir complexidade
Padronizar dashboards
```

## Status

```text
Ativo
```

---

# TD-005

## Título

Implementação do Score de Aderência.

## Sprint

```text
SP-011
```

## Decisão

Criar mecanismo de classificação automática das vagas.

## Motivação

```text
Reduzir triagem manual
Priorizar vagas relevantes
Aumentar produtividade
```

## Status

```text
Ativo
```

---

# TD-006

## Título

Evolução para Score v2.1.

## Sprint

```text
SP-013
```

## Decisão

Expandir o score para incluir categorias analíticas.

## Componentes

```text
Cargo
Ferramentas
Cloud
Negócio
Penalizações
```

## Status

```text
Ativo
```

---

# TD-007

## Título

Threshold mínimo de aprovação.

## Sprint

```text
SP-013
```

## Decisão

Definir score mínimo para persistência.

## Regra

```text
score >= 10
```

## Motivação

```text
Eliminar ruído
Preservar oportunidades relevantes
```

## Status

```text
Ativo
```

---

# TD-008

## Título

Arquitetura InfoJobs baseada em múltiplas etapas.

## Sprint

```text
SP-013
```

## Decisão

Implementar fluxo:

```text
Lista
→ IDs
→ Detalhe
→ Normalização
→ Score
→ Persistência
```

## Motivação

```text
Portal não disponibiliza API pública
Necessidade de enriquecimento dos dados
```

## Status

```text
Homologado
```

---

# TD-009

## Título

Uso de JavaScript para normalização.

## Sprint

```text
SP-010 a SP-013
```

## Decisão

Utilizar nós Code em JavaScript para transformação dos dados.

## Motivação

```text
Flexibilidade
Rapidez de ajustes
Compatibilidade com n8n
```

## Status

```text
Ativo
```

---

# TD-010

## Título

Estrutura documental baseada em governança.

## Sprint

```text
SP-012
```

## Decisão

Criar diretórios especializados no GitHub.

## Estrutura

```text
discovery
execution
governance
history
```

## Motivação

```text
Organização
Rastreabilidade
Escalabilidade documental
```

## Status

```text
Ativo
```

---

# TD-011

## Título

Criação da pasta de homologações.

## Sprint

```text
SP-013
```

## Decisão

Centralizar evidências de homologação.

## Estrutura

```text
docs/execution/homologations
```

## Motivação

```text
Separação clara entre execução e validação
```

## Status

```text
Ativo
```

---

# Decisões Futuras Planejadas

## SP-014

```text
Homologação Recrutei
Homologação Catho
```

---

## SP-015

```text
Power BI
Dashboard Executivo
```

---

## SP-016

```text
Deduplicação automática
```

---

## SP-017

```text
Monitoramento e alertas
```

---

# Histórico de Revisões

| Versão | Sprint | Descrição |
|----------|----------|----------|
| 0.1 | SP-013 | Criação inicial do documento |

---

# Status

```text
Documento: Technical Decisions Log
Versão: 0.1
Projeto: SIC
Status: Publicado
Sprint: SP-013
```
