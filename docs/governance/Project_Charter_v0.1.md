PROJECT CHARTER V_01
Projeto
Sistema de Inteligência de Carreira (SIC)
Patrocinador do Projeto
Jerry William do Nascimento
Gerente do Projeto
Jerry William do Nascimento
Consultoria e Arquitetura
Jarvis
________________________________________
1. VISÃO DO PROJETO
Criar uma plataforma de inteligência de carreira capaz de coletar, consolidar, analisar e priorizar oportunidades profissionais de forma automatizada, permitindo tomadas de decisão mais rápidas e estratégicas para recolocação profissional e evolução de carreira.
________________________________________
2. PROBLEMA DE NEGÓCIO
Atualmente o processo de busca de vagas apresenta desafios:
•	Grande volume de vagas dispersas.
•	Baixa aderência das oportunidades encontradas.
•	Tempo excessivo gasto em pesquisas manuais.
•	Falta de visão consolidada do mercado.
•	Dificuldade em identificar lacunas de competências.
•	Ausência de priorização baseada em dados.
________________________________________
3. OBJETIVOS ESTRATÉGICOS
Objetivo Principal
Automatizar o processo de monitoramento e análise de oportunidades profissionais.
Objetivos Secundários
•	Consolidar múltiplas fontes de vagas.
•	Calcular aderência ao perfil profissional.
•	Identificar tendências de mercado.
•	Apoiar evolução profissional.
•	Gerar inteligência para recolocação.
•	Criar ativo tecnológico próprio.
________________________________________
4. ESCOPO DO PROJETO
Dentro do Escopo
•	Coleta automática de vagas.
•	Integração com múltiplas fontes.
•	Armazenamento estruturado.
•	Scoring de aderência.
•	Dashboard analítico.
•	Alertas automáticos.
•	Histórico de vagas.
•	Recomendações de aprendizado.
Fora do Escopo (Fase Atual)
•	Aplicação mobile.
•	Comercialização da solução.
•	Marketplace de recrutamento.
•	Integração com RH corporativo.
•	IA generativa avançada.
________________________________________
5. MVP (PRODUTO MÍNIMO VIÁVEL)
O MVP será considerado concluído quando:
1.	Capturar vagas automaticamente.
2.	Consolidar em base única.
3.	Aplicar score de aderência.
4.	Armazenar resultados.
5.	Exibir indicadores básicos.
6.	Gerar alertas.
________________________________________
6. ARQUITETURA DE ALTO NÍVEL
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
________________________________________
7. FASES DO PROJETO
Fase 1 – Fundação
•	Ambiente
•	n8n
•	Google Sheets
•	Persistência
Status: Concluída
Fase 2 – Coleta Real
•	Gupy
•	Indeed
•	InfoJobs
•	Catho
Status: Em andamento
Fase 3 – Inteligência
•	Score avançado
•	Classificação automática
•	Recomendação de estudos
Status: Planejada
Fase 4 – Analytics
•	Power BI
•	KPIs
•	Tendências
Status: Planejada
Fase 5 – Automação Avançada
•	Alertas
•	WhatsApp
•	Fluxos automáticos
Status: Planejada
________________________________________
8. INDICADORES DE SUCESSO
•	Quantidade de vagas coletadas.
•	Quantidade de vagas aprovadas.
•	Taxa de aderência.
•	Tempo economizado na busca.
•	Evolução profissional observada.
•	Número de candidaturas qualificadas.
________________________________________
9. PRINCIPAIS RISCOS
•	Bloqueios de fontes externas.
•	Mudanças em APIs.
•	Baixa qualidade dos dados.
•	Excesso de complexidade prematura.
•	Dependência excessiva de uma única fonte.
________________________________________
10. CRITÉRIO DE SUCESSO
O projeto será considerado bem-sucedido quando for capaz de entregar oportunidades relevantes de forma automatizada, reduzindo significativamente o esforço manual de busca e aumentando a qualidade das decisões de carreira.
________________________________________
11. PRÓXIMA ENTREGA
Implementar a primeira integração com fonte real de vagas e registrar resultados na estrutura:
•	vagas_brutas
•	vagas_aprovadas
•	configuracao
•	logs


