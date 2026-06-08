# 002_Deployment_History_v0.1

## Document Information

| Campo | Valor |
|---------|---------|
| Documento | 002_Deployment_History_v0.1 |
| Projeto | SIC - Sistema de Inteligência de Carreira |
| Categoria | Execution |
| Proprietário | Jerry William do Nascimento |
| Data de Criação | 08/06/2026 |
| Status | Active |

---

# Objetivo

Registrar todos os deployments realizados no projeto SIC, garantindo rastreabilidade entre solicitações, implementações, homologações e entradas em produção.

---

# Status Permitidos

| Status |
|----------|
| Planned |
| Approved |
| In Progress |
| Deployed |
| Rolled Back |
| Failed |
| Closed |

---

# Deployment Register

| Deployment ID | Data | Descrição | Request Relacionado | Status |
|--------------|------|------------|---------------------|---------|
| DEP-005 | 08/06/2026 | Correção dos links InfoJobs utilizando Merge Node | CR-001 | Closed |

---

# Deployment Details

---

## DEP-005

### Informações Gerais

| Campo | Valor |
|---------|---------|
| Deployment ID | DEP-005 |
| Data Deployment | 08/06/2026 |
| Ambiente | Produção |
| Status | Closed |
| Sprint | SP-014 |

---

### Origem

| Campo | Valor |
|---------|---------|
| Request Relacionado | CR-001 |
| Incident Relacionado | INC-014 |
| Solicitante | Jerry William do Nascimento |
| Aprovador | Jerry William do Nascimento |

---

### Implementação

#### Objetivo

Corrigir a perda do atributo `link_publico` durante o processamento das vagas InfoJobs.

#### Mudança Implementada

Implementação de Merge Node entre:

- INFOJOBS - Extrair IDs1
- Coleta INFOJOBS - Detalhe

#### Componentes Impactados

- Coleta INFOJOBS - Lista
- INFOJOBS - Extrair IDs1
- Coleta INFOJOBS - Detalhe
- Merge
- Normalizar INFOJOBS

---

### Homologação

| Campo | Valor |
|---------|---------|
| Homologado | Sim |
| Responsável Homologação | Jerry William do Nascimento |
| Data Homologação | 08/06/2026 |

#### Evidência

Validação realizada na planilha Base_Radar_De_Vagas.

Resultado:

- Links direcionam corretamente para a vaga específica.
- Persistência executada com sucesso.
- Fluxo executado sem falhas.

---

### Resultado do Deployment

| Campo | Valor |
|---------|---------|
| Deployment Bem-sucedido | Sim |
| Rollback Necessário | Não |
| Impacto Operacional | Nenhum |
| Status Final | Closed |

---

### Lições Aprendidas

- O fluxo InfoJobs exige preservação dos atributos oriundos da coleta inicial.
- O Merge Node demonstrou ser solução adequada para manter relacionamento entre identificador da vaga e detalhes coletados.
- Validar sempre os links persistidos após alterações estruturais.

---

# Histórico de Alterações

| Data | Alteração | Responsável |
|---------|---------|---------|
| 08/06/2026 | Criação inicial do documento | Jerry William do Nascimento |
