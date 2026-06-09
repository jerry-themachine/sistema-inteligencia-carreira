const html =
  $input.first().json.data ||
  $input.first().json.body ||
  $input.first().json.html ||
  "";

const regex = /data-id="(\d+)"[\s\S]*?data-href="([^"]+)"/g;

const vistos = new Set();
const vagas = [];
let match;

while ((match = regex.exec(html)) !== null) {
  const id = match[1];
  const href = match[2];

  if (!id || !href || vistos.has(id)) continue;

  vistos.add(id);

  const link_publico = href.startsWith("http")
    ? href
    : `https://www.infojobs.com.br${href}`;

  vagas.push({
    json: {
      id,
      detalhe_url: `https://www.infojobs.com.br/mf-publicarea/vacancylist/getdetail?id=${id}`,
      link_publico
    }
  });
}

return vagas;
