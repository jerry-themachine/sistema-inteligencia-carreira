# 005_Request_Log_v0.1

## Document Information

| Campo           | Valor                                     |
| --------------- | ----------------------------------------- |
| Documento       | 005_Request_Log_v0.1                      |
| Projeto         | SIC - Sistema de Inteligência de Carreira |
| Categoria       | Execution                                 |
| Proprietário    | Jerry William do Nascimento               |
| Data de Criação | 08/06/2026                                |
| Status          | Active                                    |

---

# Objetivo

Registrar, controlar e rastrear todas as solicitações do projeto SIC durante todo o ciclo de vida da demanda, desde sua criação até o encerramento, garantindo governança, rastreabilidade e histórico de decisões.

---

# Classificação de Requests

| Prefixo | Tipo               | Descrição                                       |
| ------- | ------------------ | ----------------------------------------------- |
| BR      | Business Request   | Solicitação de negócio                          |
| FR      | Feature Request    | Nova funcionalidade                             |
| CR      | Change Request     | Alteração em funcionalidade existente           |
| SR      | Service Request    | Solicitação operacional ou técnica              |
| GOV     | Governance Request | Solicitação relacionada à governança do projeto |

---

# Status Permitidos

| Status             |
| ------------------ |
| Open               |
| Under Analysis     |
| Approved           |
| Rejected           |
| In Progress        |
| Pending Validation |
| Implemented        |
| Deployed           |
| Closed             |
| Transferred        |
| Cancelled          |

---

# Request Register

| ID      | Tipo               | Título                                | Solicitante                 | Responsável Atual | Prioridade | Status | Data Solicitação | Data Encerramento |
| ------- | ------------------ | ------------------------------------- | --------------------------- | ----------------- | ---------- | ------ | ---------------- | ----------------- |
| CR-001  | Change Request     | Preservar link_publico do InfoJobs    | Jerry William do Nascimento | Jarvis            | Alta       | Closed | 08/06/2026       | 08/06/2026        |
| SR-001  | Service Request    | Criar backup dos códigos JS no GitHub | Jerry William do Nascimento | Jarvis            | Média      | Open   | 08/06/2026       | -                 |
| GOV-001 | Governance Request | Implementar gestão formal de Requests | Jerry William do Nascimento | Jarvis            | Média      | Open   | 08/06/2026       | -                 |

---

# Request Details

---

## CR-001

### Informações Gerais

| Campo      | Valor                              |
| ---------- | ---------------------------------- |
| Request ID | CR-001                             |
| Tipo       | Change Request                     |
| Título     | Preservar link_publico do InfoJobs |
| Prioridade | Alta                               |
| Status     | Closed                             |
| Sprint     | SP-014                             |

### Origem

| Campo            | Valor                       |
| ---------------- | --------------------------- |
| Solicitante      | Jerry William do Nascimento |
| Data Solicitação | 08/06/2026                  |
| Canal de Origem  | Sessão de Homologação       |
| Referência       | INC-014                     |

### Responsabilidade

| Campo                     | Valor                       |
| ------------------------- | --------------------------- |
| Responsável Atual         | Jarvis                      |
| Equipe                    | Arquitetura SIC             |
| Responsável Implementação | Jarvis                      |
| Responsável Validação     | Jerry William do Nascimento |

### Execução

| Campo                  | Valor      |
| ---------------------- | ---------- |
| Data Início            | 08/06/2026 |
| Data Conclusão         | 08/06/2026 |
| Deployment Relacionado | DEP-005    |

### Descrição

Alteração da arquitetura do fluxo InfoJobs para preservar o atributo `link_publico` até a persistência dos dados na planilha.

### Justificativa

Os links registrados direcionavam para a página de busca do InfoJobs ao invés da vaga específica.

### Root Cause

Perda do atributo `link_publico` durante o fluxo de processamento.

### Implementação

Implementação de Merge Node entre:

* INFOJOBS - Extrair IDs1
* Coleta INFOJOBS - Detalhe

### Resultado

Links passaram a direcionar corretamente para a vaga individual.

### Transferência

| Campo                | Valor |
| -------------------- | ----- |
| Houve Transferência? | Não   |
| Responsável Anterior | -     |
| Novo Responsável     | -     |
| Motivo               | -     |

### Encerramento

| Campo          | Valor                       |
| -------------- | --------------------------- |
| Resolvido      | Sim                         |
| Data Resolução | 08/06/2026                  |
| Validado Por   | Jerry William do Nascimento |
| Status Final   | Closed                      |

---

## SR-001

### Informações Gerais

| Campo      | Valor                                 |
| ---------- | ------------------------------------- |
| Request ID | SR-001                                |
| Tipo       | Service Request                       |
| Título     | Criar backup dos códigos JS no GitHub |
| Prioridade | Média                                 |
| Status     | Open                                  |
| Sprint     | SP-014                                |

### Origem

| Campo            | Valor                       |
| ---------------- | --------------------------- |
| Solicitante      | Jerry William do Nascimento |
| Data Solicitação | 08/06/2026                  |
| Canal de Origem  | Governança do Projeto       |

### Descrição

Criar estrutura versionada para armazenamento dos scripts JavaScript homologados do SIC.

### Objetivo

Garantir backup, rastreabilidade e recuperação de código.

---

## GOV-001

### Informações Gerais

| Campo      | Valor                                 |
| ---------- | ------------------------------------- |
| Request ID | GOV-001                               |
| Tipo       | Governance Request                    |
| Título     | Implementar gestão formal de Requests |
| Prioridade | Média                                 |
| Status     | Open                                  |
| Sprint     | SP-014                                |

### Origem

| Campo            | Valor                       |
| ---------------- | --------------------------- |
| Solicitante      | Jerry William do Nascimento |
| Data Solicitação | 08/06/2026                  |
| Canal de Origem  | PMO SIC                     |

### Descrição

Implementar processo formal para registro, aprovação, implementação, transferência, validação e encerramento de solicitações do projeto.

### Benefícios Esperados

* Rastreabilidade completa
* Histórico de decisões
* Governança ampliada
* Auditoria simplificada
* Integração com Incident Log, Deployment History e Change Log

---

# Workflow de Gestão de Requests

Request
↓
Análise
↓
Aprovação
↓
Planejamento
↓
Implementação
↓
Teste
↓
Homologação
↓
Deployment
↓
Validação
↓
Encerramento

---

# Histórico de Alterações

| Data       | Alteração                    | Responsável                 |
| ---------- | ---------------------------- | --------------------------- |
| 08/06/2026 | Criação inicial do documento | Jerry William do Nascimento |
