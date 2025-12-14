import fetch from "node-fetch";

export async function handler(event) {
  const code = event.queryStringParameters?.code;

  if (!code) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Company code missing" })
    };
  }

  try {
    const url = `https://data.gov.lt/public/api/1/datasets?q=${encodeURIComponent(code)}`;
    const res = await fetch(url);

    if (!res.ok) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Failed to fetch LT open data" })
      };
    }

    const json = await res.json();
    const found = Array.isArray(json.data) && json.data.length > 0;

    return {
      statusCode: 200,
      body: JSON.stringify({
        source: "LT_OPENDATA",
        company_found: found,
        raw: found ? json.data[0] : null
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
