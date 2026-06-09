return items.map(item => {

  const vaga = item.json;

  return {
    json: {

      empresa: vaga.careerPageName || "",

      cargo: vaga.name || "",

      descricao: vaga.description || "",

      cidade: vaga.city || "",

      pais: vaga.country || "",

      modalidade: vaga.workplaceType || "",

      salario: "",

      link: vaga.jobUrl || "",

      fonte: "Gupy",

      data_coleta: new Date().toLocaleString("pt-BR")

    }
  };

});
