return items.map(item => {
  const vaga = item.json;

  const getCampo = (...valores) => {
    for (const valor of valores) {
      if (valor !== undefined && valor !== null && String(valor).trim() !== "") {
        return String(valor).trim();
      }
    }
    return "";
  };

  const titulo = getCampo(vaga.title, vaga.titulo, vaga.Título, vaga.cargo);
  const empresa = getCampo(vaga.company_name, vaga.company, vaga.empresa);
  const descricao = getCampo(vaga.description, vaga.descricao, vaga.Descrição);
  const link = getCampo(vaga.url, vaga.URL, vaga.link);
  const cidade = getCampo(vaga.cidade, vaga.city, vaga.location);
  const pais = getCampo(vaga.pais, vaga.country);
  const modalidade = getCampo(vaga.modalidade, vaga.remote, vaga.remoto);
  const fonte = getCampo(vaga.fonte, "Arbeitnow");

  const camposObrigatorios = {
    cargo: titulo,
    empresa,
    descricao,
    link
  };

  const camposAnaliticos = {
    cidade,
    pais,
    modalidade
  };

  const camposFaltantesObrigatorios = Object.entries(camposObrigatorios)
    .filter(([_, valor]) => !valor)
    .map(([campo]) => campo);

  if (camposFaltantesObrigatorios.length > 0) {
    return null;
  }

  let completude_dados = 0;

  if (titulo) completude_dados += 20;
  if (empresa) completude_dados += 20;
  if (descricao) completude_dados += 20;
  if (link) completude_dados += 20;
  if (cidade) completude_dados += 5;
  if (pais) completude_dados += 5;
  if (modalidade) completude_dados += 10;

  const camposFaltantesAnaliticos = Object.entries(camposAnaliticos)
    .filter(([_, valor]) => !valor)
    .map(([campo]) => campo);

  const campos_faltantes = [
    ...camposFaltantesObrigatorios,
    ...camposFaltantesAnaliticos
  ].join(", ");

  let qualidade_dados = "";

  if (completude_dados >= 90) {
    qualidade_dados = "Alta";
  } else if (completude_dados >= 70) {
    qualidade_dados = "Média";
  } else {
    qualidade_dados = "Baixa";
  }

  const campos_obrigatorios_ok = camposFaltantesObrigatorios.length === 0 ? "Sim" : "Não";

  const texto = [
    titulo,
    empresa,
    descricao,
    cidade,
    pais,
    modalidade,
    fonte
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  // ===============================
  // ENRIQUECIMENTO ANALÍTICO V1
  // ===============================

  const experienciaRegex = [
    /(\d+)\+?\s*(anos|ano)\s+de\s+experi[eê]ncia/g,
    /mínimo\s+de\s+(\d+)\s*(anos|ano)/g,
    /minimo\s+de\s+(\d+)\s*(anos|ano)/g,
    /minimum\s+of\s+(\d+)\s*(years|year)/g,
    /at\s+least\s+(\d+)\s*(years|year)/g,
    /(\d+)\+?\s*(years|year)\s+of\s+experience/g,
    /experience\s+of\s+(\d+)\+?\s*(years|year)/g
  ];

  let anosExperiencia = [];

  for (const regex of experienciaRegex) {
    const matches = [...texto.matchAll(regex)];
    matches.forEach(match => {
      anosExperiencia.push(Number(match[1]));
    });
  }

  const exige_experiencia = anosExperiencia.length > 0 ? "Sim" : "Não";
  const tempo_minimo_experiencia = anosExperiencia.length > 0 ? Math.min(...anosExperiencia) : "";

  let nivel_experiencia = "";

  if (tempo_minimo_experiencia === "") {
    nivel_experiencia = "Não informado";
  } else if (tempo_minimo_experiencia <= 1) {
    nivel_experiencia = "Entrada";
  } else if (tempo_minimo_experiencia <= 3) {
    nivel_experiencia = "Pleno";
  } else if (tempo_minimo_experiencia <= 5) {
    nivel_experiencia = "Sênior";
  } else {
    nivel_experiencia = "Especialista";
  }

  const niveisConhecimento = {
    "Básico": ["básico", "basico", "basic"],
    "Intermediário": ["intermediário", "intermediario", "intermediate"],
    "Avançado": ["avançado", "avancado", "advanced", "strong knowledge", "hands-on experience"],
    "Especialista": ["expert", "specialist", "especialista"]
  };

  let niveisDetectados = [];

  for (const [nivel, termos] of Object.entries(niveisConhecimento)) {
    if (termos.some(termo => texto.includes(termo))) {
      niveisDetectados.push(nivel);
    }
  }

  const nivel_conhecimento_detectado = [...new Set(niveisDetectados)].join(", ");

  const idiomas = {
    "Inglês": ["inglês", "ingles", "english"],
    "Espanhol": ["espanhol", "spanish"],
    "Português": ["português", "portugues", "portuguese"],
    "Alemão": ["alemão", "alemao", "german"],
    "Francês": ["francês", "frances", "french"]
  };

  let idiomasDetectados = [];

  for (const [idioma, termos] of Object.entries(idiomas)) {
    if (termos.some(termo => texto.includes(termo))) {
      idiomasDetectados.push(idioma);
    }
  }

  const idiomas_exigidos = [...new Set(idiomasDetectados)].join(", ");

  const niveisIdioma = {
    "Básico": ["basic english", "inglês básico", "ingles basico", "basic spanish", "espanhol básico", "spanish basic"],
    "Intermediário": ["intermediate english", "inglês intermediário", "ingles intermediario", "intermediate spanish", "espanhol intermediário", "spanish intermediate"],
    "Avançado": ["advanced english", "inglês avançado", "ingles avancado", "advanced spanish", "espanhol avançado", "spanish advanced"],
    "Fluente": ["fluent english", "inglês fluente", "ingles fluente", "fluent spanish", "espanhol fluente", "spanish fluent"]
  };

  let niveisIdiomaDetectados = [];

  for (const [nivel, termos] of Object.entries(niveisIdioma)) {
    if (termos.some(termo => texto.includes(termo))) {
      niveisIdiomaDetectados.push(nivel);
    }
  }

  const nivel_idioma = [...new Set(niveisIdiomaDetectados)].join(", ");

  // ===============================
  // SCORE V2.0
  // ===============================

  let score = 0;
  let categorias_detectadas = [];
  let tecnologias_detectadas = [];
  let termos_detectados = [];
  let penalizacoes_detectadas = [];

  const matriz = {
    cargo: {
      peso: 40,
      termos: [
        "analista de dados",
        "analista de dados pleno",
        "analista de dados senior",
        "analista de dados sênior",
        "data analyst",
        "bi analyst",
        "analista de bi",
        "analista business intelligence",
        "analista de business intelligence",
        "business intelligence analyst",
        "analytics analyst",
        "business analyst",
        "analista de negócios",
        "analista de negocios",
        "mis analyst",
        "reporting analyst",
        "performance analyst",
        "data engineer",
        "data engineering",
        "engenheiro de dados",
        "engenharia de dados",
        "analytics engineer",
        "data warehouse engineer"
      ]
    },
    ferramentas: {
      peso: 30,
      termos: [
        "sql",
        "python",
        "power bi",
        "tableau",
        "looker",
        "looker studio",
        "excel",
        "excel avançado",
        "excel avancado",
        "dax",
        "power query",
        "ssis",
        "ssrs",
        "airflow",
        "apache airflow",
        "spark",
        "apache spark",
        "pyspark",
        "etl",
        "elt",
        "data warehouse",
        "dw",
        "git",
        "github"
      ]
    },
    cloud: {
      peso: 15,
      termos: [
        "aws",
        "azure",
        "google cloud",
        "gcp",
        "snowflake",
        "bigquery",
        "databricks",
        "microsoft fabric",
        "fabric",
        "synapse",
        "data lake",
        "azure data factory",
        "adf",
        "data factory",
        "delta lake",
        "lakehouse",
        "data mesh",
        "data fabric",
        "data architecture",
        "arquitetura de dados"
      ]
    },
    negocio: {
      peso: 10,
      termos: [
        "kpi",
        "kpis",
        "indicadores",
        "métricas",
        "metricas",
        "business metrics",
        "métricas de negócio",
        "metricas de negocio",
        "mapeamento de processos",
        "process mapping",
        "governança",
        "governance",
        "levantamento de requisitos",
        "requirements gathering",
        "modelagem de dados",
        "data modeling",
        "data analytics",
        "estatística",
        "statistics",
        "métricas de produto",
        "product metrics",
        "churn",
        "ltv",
        "cohort analysis",
        "data quality",
        "pipeline de dados",
        "data pipeline"
      ]
    },
    metodologia: {
      peso: 5,
      termos: [
        "scrum",
        "agile",
        "ágil",
        "agil",
        "kanban",
        "product owner",
        "product management"
      ]
    }
  };

  const penalizacoes = [
    "vendas",
    "sales",
    "telemarketing",
    "call center",
    "atendimento",
    "customer service",
    "designer",
    "design",
    "marketing",
    "social media",
    "estágio",
    "estagio",
    "internship"
  ];

  for (const categoria in matriz) {
    const { peso, termos } = matriz[categoria];

    const encontrados = termos.filter(termo => texto.includes(termo));

    if (encontrados.length > 0) {
      categorias_detectadas.push(categoria);
      termos_detectados.push(...encontrados);

      if (categoria === "ferramentas" || categoria === "cloud") {
        tecnologias_detectadas.push(...encontrados);
      }

const pontosCategoria = Math.min(
  peso,
  Math.round((encontrados.length / termos.length) * peso * 4)
);

      score += pontosCategoria;
    }
  }

  const penalizados = penalizacoes.filter(termo => texto.includes(termo));

 if (penalizados.length > 0) {
  penalizacoes_detectadas.push(...penalizados);
  score -= penalizados.length * 3;
}

  score = Math.max(0, Math.min(100, score));

  let faixa_score = "";

  if (score <= 20) {
    faixa_score = "Pouco aderente";
  } else if (score <= 40) {
    faixa_score = "Baixa aderência";
  } else if (score <= 60) {
    faixa_score = "Média aderência";
  } else if (score <= 80) {
    faixa_score = "Boa aderência";
  } else {
    faixa_score = "Excelente aderência";
  }

  return {
  json: {
    ...vaga,

    cargo: titulo,
    empresa,
    descricao,
    link,
    cidade,
    pais,
    modalidade,
    fonte,

    completude_dados,
    qualidade_dados,
    campos_obrigatorios_ok,
    campos_faltantes,

    exige_experiencia,
    tempo_minimo_experiencia,
    nivel_experiencia,
    nivel_conhecimento_detectado,
    idiomas_exigidos,
    nivel_idioma,

    score,
    faixa_score,
    categorias_detectadas: [...new Set(categorias_detectadas)].join(", "),
    tecnologias_detectadas: [...new Set(tecnologias_detectadas)].join(", "),
    termos_detectados: [...new Set(termos_detectados)].join(", "),
    penalizacoes_detectadas: [...new Set(penalizacoes_detectadas)].join(", "),
    modelo_score: "Score v2.1 + Enriquecimento Analítico v1"
  }
};
}).filter(item => item !== null)
