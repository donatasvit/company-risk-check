import fetch from "node-fetch";

export async function handler(event) {
  const name = event.queryStringParameters?.name;
  if (!name) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Company name missing" })
    };
  }

  const res = await fetch(
    "https://webgate.ec.europa.eu/fsd/fsf/public/files/xmlFullSanctionsList_1_1/content"
  );
  const xml = await res.text();

  const match = xml.toLowerCase().includes(name.toLowerCase());

  return {
    statusCode: 200,
    body: JSON.stringify({
      source: "EU_SANCTIONS",
      matched: match
    })
  };
}
