return items.map(item => {
  const html = item.json.detail || "";

  const clean = (value) =>
    (value || "")
      .replace(/<[^>]*>/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/&#x([0-9A-F]+);/gi, (_, hex) =>
        String.fromCharCode(parseInt(hex, 16))
      )
      .replace(/\s+/g, " ")
      .trim();

  const cargo = clean(
    (html.match(/js_vacancyHeaderTitle">([\s\S]*?)<\/h2>/i) || [])[1]
  );

  const empresa = clean(
    (html.match(/title="([^"]*?) Trabalhe Conosco"/i) || [])[1]
  );

  const cidade = clean(
    (html.match(/([A-Za-zÀ-ÿ\s]+ - [A-Z]{2})<span/i) || [])[1]
  );

  const salario = clean(
    (html.match(/(Salário a combinar|A combinar|R\$[\s\S]{1,40})/i) || [])[1]
  );

  const modalidade = clean(
    (html.match(/(Presencial|Remoto|Híbrido|Hibrido)/i) || [])[1]
  );

  let descricao = clean(html);

  const inicioDescricao = descricao.search(
    /Buscamos um profissional|ATRIBUIÇÕES|ATRIBUICOES|REQUISITOS/i
  );

  if (inicioDescricao >= 0) {
    descricao = descricao.substring(inicioDescricao).trim();
  }

  return {
    json: {
      empresa,
      cargo,
      descricao,
      cidade,
      pais: "Brasil",
      modalidade,
      salario,
      link: item.json.link_publico || item.json.detalhe_url || "",
      fonte: "InfoJobs",
      data_coleta: new Date().toLocaleString("pt-BR")
    }
  };
});
