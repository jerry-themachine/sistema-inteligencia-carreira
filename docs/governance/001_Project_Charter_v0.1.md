# PROJECT CHARTER V1.0

## Projeto

**Sistema de Inteligência de Carreira (SIC)**

### Patrocinador do Projeto

Jerry William do Nascimento

### Gerente do Projeto

Jerry William do Nascimento

### Consultoria e Arquitetura

Jarvis

---

## 1. Visão do Projeto

Criar uma plataforma de inteligência de carreira capaz de coletar, consolidar, analisar e priorizar oportunidades profissionais de forma automatizada, permitindo tomadas de decisão mais rápidas e estratégicas para recolocação profissional e evolução de carreira.

---

## 2. Problema de Negócio

Atualmente o processo de busca de vagas apresenta desafios:

* Grande volume de vagas dispersas.
* Baixa aderência das oportunidades encontradas.
* Tempo excessivo gasto em pesquisas manuais.
* Falta de visão consolidada do mercado.
* Dificuldade em identificar lacunas de competências.
* Ausência de priorização baseada em dados.

---

## 3. Objetivos Estratégicos

### Objetivo Principal

Automatizar o processo de monitoramento e análise de oportunidades profissionais.

### Objetivos Secundários

* Consolidar múltiplas fontes de vagas.
* Calcular aderência ao perfil profissional.
* Identificar tendências de mercado.
* Apoiar evolução profissional.
* Gerar inteligência para recolocação.
* Criar ativo tecnológico próprio.

---

## 4. Escopo do Projeto

### Dentro do Escopo

* Coleta automática de vagas.
* Integração com múltiplas fontes.
* Armazenamento estruturado.
* Scoring de aderência.
* Dashboard analítico.
* Alertas automáticos.
* Histórico de vagas.
* Recomendações de aprendizado.

### Fora do Escopo (Fase Atual)

* Aplicação mobile.
* Comercialização da solução.
* Marketplace de recrutamento.
* Integração com RH corporativo.
* IA generativa avançada.

---

## 5. MVP (Produto Mínimo Viável)

O MVP será considerado concluído quando:

1. Capturar vagas automaticamente.
2. Consolidar em base única.
3. Aplicar score de aderência.
4. Armazenar resultados.
5. Exibir indicadores básicos.
6. Gerar alertas.

---

## 6. Arquitetura de Alto Nível

```text
Fontes de Vagas
       ↓
Coleta Automatizada
       ↓
Normalização
       ↓
Scoring
       ↓
Google Sheets
       ↓
Dashboard
       ↓
Alertas
```

---

## 7. Fases do Projeto

### Fase 1 – Fundação

**Entregas:**

* Ambiente
* n8n
* Google Sheets
* Persistência

**Status:** Concluída

### Fase 2 – Coleta Real

**Entregas:**

* Gupy
* Indeed
* InfoJobs
* Catho

**Status:** Em andamento

### Fase 3 – Inteligência

**Entregas:**

* Score avançado
* Classificação automática
* Recomendação de estudos

**Status:** Planejada

### Fase 4 – Analytics

**Entregas:**

* Power BI
* KPIs
* Tendências

**Status:** Planejada

### Fase 5 – Automação Avançada

**Entregas:**

* Alertas
* WhatsApp
* Fluxos automáticos

**Status:** Planejada

---

## 8. Indicadores de Sucesso

* Quantidade de vagas coletadas.
* Quantidade de vagas aprovadas.
* Taxa de aderência.
* Tempo economizado na busca.
* Evolução profissional observada.
* Número de candidaturas qualificadas.

---

## 9. Principais Riscos

* Bloqueios de fontes externas.
* Mudanças em APIs.
* Baixa qualidade dos dados.
* Excesso de complexidade prematura.
* Dependência excessiva de uma única fonte.

---

## 10. Critério de Sucesso

O projeto será considerado bem-sucedido quando for capaz de entregar oportunidades relevantes de forma automatizada, reduzindo significativamente o esforço manual de busca e aumentando a qualidade das decisões de carreira.

---

## 11. Próxima Entrega

Implementar a primeira integração com fonte real de vagas e registrar resultados na estrutura:

* vagas_brutas
* vagas_aprovadas
* configuracao
* logs

