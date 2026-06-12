# Roadmap Sistema de Inteligência de Carreira

**Versão:** 0.1
**Data de Criação:** 31/05/2026

---

# Projeto

**Sistema de Inteligência de Carreira**

**Patrocinador:**
Jerry William do Nascimento

**Gestão:**
Jarvis + Jerry

**Referência:**
Project Charter v0.3

---

# Objetivo do Roadmap

Definir a sequência evolutiva de implementação do Sistema de Inteligência de Carreira, garantindo execução organizada, controle de escopo e evolução incremental.

---



# Status Atual

## Infraestrutura

* [x] WSL
* [x] Ubuntu
* [x] Docker
* [x] Node.js
* [x] n8n

## Google

* [x] Google Cloud
* [x] OAuth
* [x] Google Sheets API
* [x] Persistência validada

## Pipeline Atual

```text
Manual Trigger
↓
HTTP Request
↓
JavaScript
↓
IF
↓
Google Sheets
```

## Status do Pipeline

| Componente   | Status |
| ------------ | ------ |
| Coleta       | ✔      |
| Normalização | ✔      |
| Filtro       | ✔      |
| Persistência | ✔      |
| Governança   | ✔      |

---

# Fase 1 — Implementação da Primeira Fonte Real

## Objetivo

Substituir a API de teste por uma fonte real de vagas.

## Entregáveis

* Integração com primeira fonte real
* Coleta automática
* Alimentação da aba vagas_brutas
* Registro de execução na aba logs

## Critério de Sucesso

* Coletar pelo menos 20 vagas reais
* Persistência automática validada

## Status

**PLANEJADA**

## Prioridade

**ALTA**

---

# Fase 2 — Múltiplas Fontes

## Objetivo

Adicionar novas fontes de vagas.

## Fontes Previstas

* Gupy
* LinkedIn
* InfoJobs
* Catho
* Indeed

## Entregáveis

* Estrutura multifuente
* Padronização dos dados
* Identificação da origem

## Critério de Sucesso

* Coleta simultânea de múltiplas fontes

## Status

**PENDENTE**

---

# Fase 3 — Score Inteligente

## Objetivo

Avaliar aderência das vagas ao perfil profissional.

## Entradas

* Currículo
* LinkedIn
* Skills cadastradas

## Saídas

* Score de aderência
* Ranking de vagas
* Justificativa da pontuação

## Critério de Sucesso

* Todas as vagas classificadas automaticamente

## Status

**PENDENTE**

---

# Fase 4 — Radar de Skills

## Objetivo

Comparar requisitos do mercado com o perfil atual.

## Entregáveis

* Skills mais exigidas
* Gap Analysis
* Tendências

## Critério de Sucesso

* Relatório automático de lacunas

## Status

**PENDENTE**

---

# Fase 5 — Plano de Desenvolvimento

## Objetivo

Transformar lacunas em plano de evolução profissional.

## Entregáveis

* Trilhas de estudo
* Prioridades
* Cronograma semanal

## Status

**PENDENTE**

---

# Fase 6 — Power BI

## Objetivo

Criar camada analítica do sistema.

## Indicadores

* Vagas encontradas
* Vagas aprovadas
* Aderência média
* Skills mais requisitadas
* Evolução mensal

## Status

**PENDENTE**

---

# Fase 7 — Alertas Automáticos

## Objetivo

Notificar oportunidades relevantes.

## Canais Previstos

* WhatsApp
* E-mail
* Telegram (opcional)

## Critério de Sucesso

* Receber alerta em até 5 minutos após detecção

## Status

**PENDENTE**

---

# Fase 8 — Candidatura Assistida

## Objetivo

Auxiliar candidatura automática.

## Funcionalidades

* Geração de currículo adaptado
* Geração de carta de apresentação
* Sugestão de respostas

## Status

**PENDENTE**

---

# Fase 9 — Versão 1.0

## Objetivo

Disponibilizar sistema completo para uso diário.

## Critérios de Aceite

* Coleta funcionando
* Múltiplas fontes funcionando
* Score funcionando
* Dashboard funcionando
* Alertas funcionando

## Resultado Esperado

Sistema operacional para apoio à recolocação profissional.

---

# Riscos Principais

| ID  | Descrição                        |
| --- | -------------------------------- |
| R01 | Mudanças em sites de vagas       |
| R02 | Bloqueios de scraping            |
| R03 | Mudanças em APIs externas        |
| R04 | Limitações de autenticação       |
| R05 | Custos futuros de infraestrutura |

---

# Próximo Marco

**Implementar a Primeira Fonte Real de Vagas**

## Status do Marco

**ATIVO**

## Data de Registro

31/05/2026

# Atualização - Roadmap Executivo e Detalhado

## Resumo

Reestruturação completa do Roadmap do SIC.

## Alterações Realizadas

* Criação da visão executiva por fases.
* Inclusão da linha do tempo Mai/26 a Ago/26.
* Organização por estágios do projeto.
* Inclusão dos responsáveis (Owner).
* Atualização dos status.
* Expansão da aba Roadmap Detalhado.
* Inclusão das sprints SP-001 até SP-023.
* Inclusão de marcos, objetivos e entregas.

## Resultado

Roadmap consolidado como referência oficial de planejamento do SIC.

## Data de Registro

12/06/2026

---

# Atualização do Roadmap

## Objetivo

Atualizar o Roadmap para refletir a evolução real do SIC e consolidar o planejamento futuro do projeto.

## Alterações Realizadas

* Revisão completa do Roadmap Executivo.
* Criação da visão por fases do projeto.
* Consolidação da linha do tempo do SIC.
* Inclusão dos responsáveis (Owner).
* Atualização dos status das entregas.
* Criação do Roadmap Detalhado.
* Inclusão das sprints SP-001 até SP-023.
* Inclusão dos marcos (Milestones).
* Alinhamento com o Project Charter atualizado.
* Consolidação das fases Fundação, Multi-Fonte, Data Warehouse, Data Analytics, Governança e Evolução.

## Resultado

Roadmap consolidado como documento oficial de planejamento, acompanhamento e evolução do Sistema de Inteligência de Carreira.

## Status

**CONCLUÍDO**

## Data de Registro

12/06/2026

---

