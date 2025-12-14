import fetch from "node-fetch";

export async function handler(event) {
  const country = event.queryStringParameters?.country;
  const sector = event.queryStringParameters?.sector || "H49"; // Transport & storage

  if (!country) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Country code missing (e.g. LT)" })
    };
  }

  try {
    // Eurostat SDMX API – business demography / insolvency proxy
    // Dataset: bd_9bd_sz_cl_r2 (business demography by NACE)
    const url = `https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/bd_9bd_sz_cl_r2?geo=${country}&nace_r2=${sector}&precision=1`;

    const res = await fetch(url);

    if (!res.ok) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Failed to fetch Eurostat data" })
      };
    }

    const json = await res.json();

    // We do NOT interpret deeply – only check if data exists
    const hasData =
      json?.value && Object.keys(json.value).length > 0;

    return {
      statusCode: 200,
      body: JSON.stringify({
        source: "EUROSTAT",
        country: country,
        sector: sector,
        data_available: hasData,
        note:
          "Eurostat data is contextual. It reflects sector/country environment, not individual company status."
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
