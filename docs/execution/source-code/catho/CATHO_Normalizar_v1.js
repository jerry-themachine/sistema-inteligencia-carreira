return items.map(item => {
  const vaga = typeof item.json.data === "string"
    ? JSON.parse(item.json.data)
    : item.json.data;

  return {
    json: {
      empresa: vaga.c?.cn || "",
      cargo: vaga.o?.t || "",
      descricao: vaga.o?.ld || "",
      cidade: vaga.o?.cins?.[0] || "",
      pais: vaga.o?.cntrs?.[0] || "Brasil",
      modalidade: vaga.o?.lset || "",
      salario: vaga.o?.sn || "",
      link: vaga.o?.ur ? "https://www.catho.com.br" + vaga.o.ur : "",
      fonte: "Catho",
      data_coleta: new Date().toLocaleString("pt-BR")
    }
  };
});
