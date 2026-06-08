# 003_Operational_Runbook_v0.1

## Document Information

| Campo | Valor |
|---------|---------|
| Documento | 003_Operational_Runbook_v0.1 |
| Projeto | SIC - Sistema de Inteligência de Carreira |
| Categoria | Execution |
| Proprietário | Jerry William do Nascimento |
| Data de Criação | 08/06/2026 |
| Status | Active |

---

# Objetivo

Definir procedimentos operacionais padrão (SOPs) para execução, monitoramento, homologação, manutenção e recuperação do Sistema de Inteligência de Carreira (SIC).

---

# Ambiente Operacional

## Infraestrutura

| Item | Valor |
|---------|---------|
| Sistema Operacional | Windows 11 Pro |
| Plataforma de Automação | n8n |
| Ambiente | Localhost |
| Banco de Persistência | Google Sheets |
| Versionamento | GitHub |
| Linguagem Principal | JavaScript |
| Navegador Homologado | Google Chrome |

---

# Componentes do SIC

## Fontes de Coleta

### InfoJobs

Status:

```text
Operacional
```

Fluxo:

```text
Coleta INFOJOBS - Lista
↓
INFOJOBS - Extrair IDs1
↓
Coleta INFOJOBS - Detalhe
↓
Merge
↓
Normalizar INFOJOBS
```

---

### Recrutei

Status:

```text
Em Evolução
```

Fluxo:

```text
Coleta RECRUTEI
↓
RECRUTEI - Split Registros
↓
Normalizar RECRUTEI
```

---

### Catho

Status:

```text
Em Evolução
```

Fluxo:

```text
Coleta CATHO
↓
CATHO - Split Registros
↓
Normalizar CATHO
```

---

### Gupy

Status:

```text
Em Evolução
```

Fluxo:

```text
Coleta GUPY
↓
GUPY - Split Registros
↓
Normalizar GUPY
```

---

# Procedimento de Execução

## Execução Manual

1. Abrir n8n.
2. Abrir workflow:

```text
Radar de Vagas - Coleta Mult Fonte
```

3. Executar:

```text
SIC - Trigger Manual
```

4. Monitorar execução.

5. Validar conclusão.

---

# Procedimento de Homologação

## Checklist

### Fluxo

- [ ] Workflow executou sem erros.
- [ ] Todos os nós concluíram execução.
- [ ] Não houve timeout.
- [ ] Não houve falha de autenticação.

### Dados

- [ ] Empresa preenchida.
- [ ] Cargo preenchido.
- [ ] Cidade preenchida.
- [ ] Link preenchido.
- [ ] Fonte preenchida.
- [ ] Score calculado.

### Persistência

- [ ] Dados gravados no Google Sheets.
- [ ] Colunas corretas.
- [ ] Sem duplicações inesperadas.

---

# Procedimento de Validação de Links

## InfoJobs

Validar:

- Link abre vaga individual.
- Não direciona para página de busca.
- Não retorna erro 404.
- Não retorna página vazia.

---

# Procedimento de Registro de Incidentes

Quando ocorrer falha:

1. Registrar incidente em:

```text
004_Incident_Log_v0.1.md
```

2. Classificar:

```text
Baixo
Médio
Alto
Crítico
```

3. Registrar causa raiz.

4. Registrar ação corretiva.

---

# Procedimento de Registro de Requests

Quando surgir nova demanda:

Registrar em:

```text
005_Request_Log_v0.1.md
```

Tipos:

```text
BR
FR
CR
SR
GOV
```

---

# Procedimento de Deployment

Antes do Deployment:

- Homologação concluída.
- Evidências registradas.
- Request aprovado.

Após Deployment:

- Registrar em:

```text
002_Deployment_History_v0.1.md
```

---

# Procedimento de Backup

## GitHub

Após homologação:

1. Atualizar documentação.
2. Atualizar evidências.
3. Publicar artefatos.
4. Executar commit.

---

# Procedimento de Rollback

Em caso de falha:

1. Identificar deployment causador.
2. Consultar:

```text
002_Deployment_History_v0.1.md
```

3. Restaurar configuração anterior.

4. Registrar incidente.

---

# Métricas Operacionais

## Indicadores

| Indicador | Objetivo |
|------------|------------|
| Execuções com Sucesso | >95% |
| Incidentes Críticos | 0 |
| Integridade dos Links | 100% |
| Persistência Bem-sucedida | 100% |
| Homologações Aprovadas | 100% |

---

# Histórico de Alterações

| Data | Alteração | Responsável |
|---------|---------|---------|
| 08/06/2026 | Criação inicial do documento | Jerry William do Nascimento |
