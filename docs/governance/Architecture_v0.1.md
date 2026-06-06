# System Architecture v0.1

## Documento

```text
Projeto: Sistema de Inteligência de Carreira (SIC)
Documento: Architecture
Versão: 0.1
Status: Publicado
Sprint: SP-013
```

---

# Objetivo

Documentar oficialmente a arquitetura do Sistema de Inteligência de Carreira (SIC), incluindo seus componentes, fluxos de processamento, integrações e camadas de dados.

---

# Visão Geral

O SIC foi desenvolvido para automatizar a coleta, normalização, classificação e armazenamento de vagas de emprego provenientes de múltiplas fontes.

Principais objetivos:

- Automatizar coleta de vagas.
- Reduzir esforço manual.
- Priorizar vagas aderentes.
- Centralizar dados.
- Gerar indicadores para tomada de decisão.

---

# Arquitetura Lógica

```text
Fontes de Dados
       │
       ▼
Coleta de Vagas
       │
       ▼
Normalização
       │
       ▼
Score v2.1
       │
       ▼
Validação
       │
       ▼
Persistência
       │
       ▼
Google Sheets
       │
       ▼
Power BI
```

---

# Camadas da Arquitetura

## Camada 1 - Coleta

Responsável pela captura das vagas.

Fontes atuais:

```text
Arbeitnow
Gupy
InfoJobs
```

Fontes em desenvolvimento:

```text
Recrutei
Catho
```

---

## Camada 2 - Extração

Responsável por:

- Ler HTML
- Ler APIs
- Extrair identificadores
- Construir URLs de detalhe

Exemplo:

```text
InfoJobs
Lista → IDs → Detalhes
```

---

## Camada 3 - Normalização

Objetivo:

Padronizar todos os dados para o modelo SIC.

Campos padrão:

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

## Camada 4 - Enriquecimento

Responsável por gerar atributos analíticos.

Exemplos:

```text
completude_dados
qualidade_dados
campos_obrigatorios_ok
nivel_experiencia
idiomas_exigidos
```

---

## Camada 5 - Score

Motor analítico responsável por calcular aderência.

Modelo atual:

```text
Score v2.1
Enriquecimento Analítico v1
```

Categorias avaliadas:

```text
Cargo
Ferramentas
Cloud
Negócio
```

Resultado:

```text
score
faixa_score
categorias_detectadas
tecnologias_detectadas
```

---

## Camada 6 - Validação

Objetivo:

Eliminar registros sem aderência mínima.

Regra atual:

```text
Score >= 10
```

Somente vagas aprovadas seguem para persistência.

---

## Camada 7 - Persistência

Objetivo:

Armazenar vagas aprovadas.

Tecnologia:

```text
Google Sheets
```

Planilha principal:

```text
Base_Radar_De_Vagas
```

Aba:

```text
vagas_brutas
```

---

# Componentes

## n8n

Responsável por:

```text
Orquestração
Execução
Integrações
Transformações
```

---

## Google Sheets

Responsável por:

```text
Persistência operacional
Histórico de vagas
Base analítica
```

---

## Power BI

Responsável por:

```text
Dashboard
Indicadores
Visualização
Análises
```

Status:

```text
Planejado
```

---

# Fluxos Homologados

## Arbeitnow

```text
Trigger
→ API
→ Normalização
→ Score
→ Persistência
```

Status:

```text
Homologado
```

---

## Gupy

```text
Trigger
→ Coleta
→ Normalização
→ Score
→ Persistência
```

Status:

```text
Homologado
```

---

## InfoJobs

```text
Trigger
→ Lista
→ Extração de IDs
→ Consulta Detalhada
→ Normalização
→ Score
→ Persistência
```

Status:

```text
Homologado
```

---

# Requisitos Não Funcionais

## Performance

```text
Processamento automatizado
Baixo tempo de execução
```

## Escalabilidade

```text
Novas fontes devem ser adicionadas sem alterar a arquitetura principal.
```

## Governança

```text
Toda mudança deve ser documentada.
```

---

# Roadmap Arquitetural

## SP-014

```text
Recrutei
Catho
```

## SP-015

```text
Dashboard Power BI
```

## SP-016

```text
Deduplicação avançada
```

## SP-017

```text
Monitoramento automatizado
```

## SP-018

```text
Matching Semântico
IA Generativa
```

---

# Status

```text
Documento: Architecture
Versão: 0.1
Projeto: SIC
Status: Publicado
```
