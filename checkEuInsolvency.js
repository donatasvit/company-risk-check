import fetch from "node-fetch";

export async function handler(event) {
  const name = event.queryStringParameters?.name;

  if (!name) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Company name missing" })
    };
  }

  try {
    // Viešas ES nemokumo / teismų pranešimų šaltinis (signalinis)
    const url =
      "https://data.europa.eu/api/hub/search/datasets?q=insolvency";

    const res = await fetch(url);

    if (!res.ok) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Failed to fetch EU insolvency data" })
      };
    }

    const json = await res.json();

    const textBlob = JSON.stringify(json).toLowerCase();
    const matched = textBlob.includes(name.toLowerCase());

    return {
      statusCode: 200,
      body: JSON.stringify({
        source: "EU_INSOLVENCY",
        checked_name: name,
        matched: matched,
        note:
          "Signal-only check. Match does not confirm insolvency without manual review."
      })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Unexpected error",
        details: err.message
      })
    };
  }
}
