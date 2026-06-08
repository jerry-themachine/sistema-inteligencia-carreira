# Workflow Catalog v0.1

## Documento

```text
Projeto: Sistema de Inteligência de Carreira (SIC)
Documento: Workflow Catalog
Versão: 0.1
Status: Publicado
Sprint: SP-013
```

---

# Objetivo

Catalogar oficialmente os workflows, nós e componentes operacionais utilizados no Sistema de Inteligência de Carreira (SIC).

Este documento serve como referência técnica para manutenção, evolução, auditoria e continuidade do projeto.

---

# Visão Geral

O SIC utiliza o n8n como ferramenta principal de orquestração.

O workflow atual executa:

```text
Trigger
→ Coleta de Fontes
→ Extração
→ Normalização
→ Score
→ Validação
→ Persistência
```

---

# Workflow Principal

## Nome

```text
SIC - Radar de Vagas
```

## Objetivo

Coletar vagas de múltiplas fontes, aplicar normalização, calcular aderência e persistir os registros aprovados no Google Sheets.

## Status

```text
Operacional
```

---

# Nós Principais

## 1. SIC - Trigger Manual

### Função

Iniciar manualmente o fluxo de coleta.

### Tipo

```text
Manual Trigger
```

### Status

```text
Operacional
```

---

## 2. ARBEITNOW - Coleta API

### Função

Coletar vagas da fonte Arbeitnow.

### Tipo

```text
HTTP Request
```

### Status

```text
Homologado
```

### Observação

Primeira fonte real utilizada na validação do pipeline SIC.

---

## 3. GUPY - Coleta API

### Função

Coletar vagas da fonte Gupy.

### Tipo

```text
HTTP Request
```

### Status

```text
Homologado
```

---

## 4. GUPY - Split Registros

### Função

Separar registros retornados pela coleta Gupy.

### Tipo

```text
Split Out
```

### Status

```text
Operacional
```

---

## 5. GUPY - Normalização

### Função

Padronizar os dados da Gupy para o modelo SIC.

### Tipo

```text
JavaScript
```

### Status

```text
Operacional
```

---

## 6. INFOJOBS - Lista

### Função

Capturar a página de listagem de vagas da InfoJobs.

### Tipo

```text
HTTP Request
```

### Status

```text
Homologado
```

### Observação

Requer headers de navegador.

---

## 7. INFOJOBS - Extrair IDs

### Função

Extrair identificadores únicos das vagas presentes na listagem.

### Tipo

```text
JavaScript
```

### Status

```text
Homologado
```

---

## 8. INFOJOBS - Detalhe

### Função

Consultar individualmente os detalhes de cada vaga usando o ID extraído.

### Tipo

```text
HTTP Request
```

### Status

```text
Homologado
```

---

## 9. Normalizar INFOJOBS

### Função

Extrair e padronizar os dados da vaga retornada em HTML.

### Tipo

```text
JavaScript
```

### Campos Gerados

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

### Status

```text
Homologado
```

---

## 10. RECRUTEI - Coleta

### Função

Coletar vagas da fonte Recrutei.

### Tipo

```text
HTTP Request
```

### Status

```text
Em desenvolvimento
```

---

## 11. RECRUTEI - Split Registros

### Função

Separar registros retornados pela fonte Recrutei.

### Tipo

```text
JavaScript / Split
```

### Status

```text
Em desenvolvimento
```

---

## 12. Normalizar RECRUTEI

### Função

Padronizar dados da Recrutei para o modelo SIC.

### Tipo

```text
JavaScript
```

### Status

```text
Em desenvolvimento
```

---

## 13. CATHO - Coleta

### Função

Coletar vagas da fonte Catho.

### Tipo

```text
HTTP Request
```

### Status

```text
Em desenvolvimento
```

### Observação

Fonte apresentou restrições relacionadas a cookies e políticas de acesso.

---

## 14. SIC - Score v2.1

### Função

Calcular aderência da vaga ao perfil definido.

### Tipo

```text
JavaScript
```

### Responsabilidades

```text
Detectar categorias
Detectar tecnologias
Detectar termos
Aplicar penalizações
Classificar aderência
```

### Status

```text
Homologado
```

---

## 15. SIC - Validação Score

### Função

Filtrar vagas aprovadas com base no score.

### Tipo

```text
IF
```

### Regra Atual

```text
score >= 10
```

### Status

```text
Operacional
```

---

## 16. SIC - Persistência Google Sheets

### Função

Gravar vagas aprovadas no Google Sheets.

### Tipo

```text
Google Sheets
```

### Status

```text
Operacional
```

---

# Convenção de Nomenclatura

Todos os nós devem seguir o padrão:

```text
[FONTE/SISTEMA] - [FUNÇÃO]
```

Exemplos:

```text
INFOJOBS - Lista
INFOJOBS - Detalhe
SIC - Score v2.1
SIC - Persistência Google Sheets
```

---

# Estados Possíveis

```text
Planejado
Em desenvolvimento
Homologado
Operacional
Descontinuado
```

---

# Governança

Toda alteração em workflow deve:

- Ser registrada em Log de Implementação.
- Ser refletida no Change Log.
- Ser rastreável a uma sprint.
- Manter nomenclatura padronizada.
- Evitar nomes genéricos.

---

# Pendências

```text
Refinar Catho
Refinar Recrutei
Implementar deduplicação
Corrigir regex de cidade InfoJobs
Refinar score
```

---

# Próximas Evoluções

## SP-014

```text
Catho
Recrutei
Deduplicação
Refino do Score
```

## SP-015

```text
Dashboard Power BI
Monitoramento de execução
```

---

# Status

```text
Documento: Workflow Catalog
Versão: 0.1
Projeto: Sistema de Inteligência de Carreira
Status: Publicado
Sprint: SP-013
```
