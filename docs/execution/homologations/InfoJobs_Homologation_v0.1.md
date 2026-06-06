# InfoJobs Homologation v0.1

## 1. Objetivo

Documentar o processo de homologação da integração da plataforma InfoJobs ao Sistema de Inteligência de Carreira (SIC), registrando arquitetura implementada, problemas encontrados, correções realizadas, resultados obtidos e lições aprendidas.

---

## 2. Escopo

A homologação contemplou:

- Coleta de vagas por pesquisa.
- Extração de identificadores únicos das vagas.
- Consulta detalhada dos anúncios.
- Normalização dos dados.
- Aplicação do Score v2.1.
- Persistência em Google Sheets.
- Validação fim a fim do fluxo.

---

## 3. Arquitetura Implementada

```text
INFOJOBS - Lista
        ↓
INFOJOBS - Extrair IDs
        ↓
INFOJOBS - Detalhe
        ↓
Normalizar INFOJOBS
        ↓
SIC - Score v2.1
        ↓
SIC - Validação Score
        ↓
SIC - Persistência Google Sheets
```

---

## 4. Ambiente de Execução

### Plataforma

- n8n Local
- Windows 11 Pro
- Node.js
- Google Sheets API

### Fonte

- InfoJobs Brasil

### Tipo de Coleta

- HTTP Request
- Extração HTML
- Regex
- Normalização JavaScript

---

## 5. Problemas Encontrados

### P001 - Bloqueio Inicial da Coleta

A página retornava apenas conteúdo parcial e não disponibilizava os detalhes completos das vagas.

### P002 - Erro HTTP 500

A consulta direta ao endpoint de detalhes retornava erro de processamento.

### P003 - Extração de Identificadores

Os identificadores das vagas não estavam disponíveis em formato estruturado.

### P004 - Penalização Excessiva do Score

A lógica de penalização reduzia significativamente a aderência das vagas.

### P005 - Fórmula de Score

A fórmula original não refletia adequadamente a proporção de aderência por categoria.

---

## 6. Soluções Implementadas

### S001 - Headers de Navegador

Foram adicionados:

- User-Agent
- Accept
- Accept-Language
- Referer

para simular navegação legítima.

### S002 - Extração de IDs

Foi implementada extração via Regex para localizar os identificadores presentes no HTML retornado pela pesquisa.

### S003 - Consulta Detalhada

Foi configurado endpoint específico de detalhe utilizando o identificador extraído.

### S004 - Normalização

Implementado tratamento para:

- Cargo
- Empresa
- Cidade
- Modalidade
- Salário
- Descrição
- Link
- Fonte

### S005 - Correção do Score

A fórmula foi ajustada para melhorar proporcionalidade entre:

- Cargo
- Ferramentas
- Cloud
- Negócio

### S006 - Recalibração das Penalizações

A penalização por termo negativo foi reduzida para evitar descarte excessivo de vagas aderentes.

---

## 7. Resultados Obtidos

### Coleta

```text
28 vagas identificadas
28 vagas detalhadas
28 vagas normalizadas
```

### Pontuação

```text
16 vagas avaliadas pelo Score
```

### Aprovação

```text
13 vagas aprovadas
```

### Persistência

```text
13 vagas gravadas com sucesso
```

---

## 8. Campos Persistidos

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
score
faixa_score
categorias_detectadas
tecnologias_detectadas
termos_detectados
penalizacoes_detectadas
```

---

## 9. Decisões Arquiteturais

### DA-009

Homologar InfoJobs como fonte oficial do SIC.

### DA-010

Reduzir penalização do Score para melhorar aderência.

### DA-011

Ajustar fórmula do Score v2.1.

---

## 10. Lições Aprendidas

- A InfoJobs exige comportamento próximo ao de um navegador real.
- A extração indireta por HTML mostrou-se mais confiável que tentativas iniciais de consulta direta.
- A qualidade dos resultados depende fortemente da normalização.
- O Score deve ser calibrado continuamente conforme novas fontes são incorporadas.

---

## 11. Status da Homologação

```text
Status: APROVADA
Sprint: SP-013
Marco: M07
Fonte: InfoJobs
Resultado: Operacional
```

---

## 12. Próximos Passos

### SP-014

- Deduplicação de vagas.
- Refinamento do Score.
- Correção da regex de cidade.
- Evolução da integração Catho.
- Evolução da integração Recrutei.

---

**Data de Homologação:** Junho/2026  
**Projeto:** Sistema de Inteligência de Carreira (SIC)  
**Versão:** 0.1  
**Status:** Aprovado para Produção
