import fetch from "node-fetch";
import { parseStringPromise } from "xml2js";

export async function handler(event) {
  const vat = event.queryStringParameters?.vat;
  if (!vat) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "VAT code missing" })
    };
  }

  const country = vat.slice(0, 2);
  const number = vat.slice(2);

  const xml = `
  <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
      <checkVat xmlns="urn:ec.europa.eu:taxud:vies:services:checkVat:types">
        <countryCode>${country}</countryCode>
        <vatNumber>${number}</vatNumber>
      </checkVat>
    </soap:Body>
  </soap:Envelope>`;

  const res = await fetch(
    "https://ec.europa.eu/taxation_customs/vies/services/checkVatService",
    {
      method: "POST",
      headers: { "Content-Type": "text/xml" },
      body: xml
    }
  );

  const text = await res.text();
  const parsed = await parseStringPromise(text, { explicitArray: false });

  const r =
    parsed["soap:Envelope"]["soap:Body"]["checkVatResponse"];

  return {
    statusCode: 200,
    body: JSON.stringify({
      source: "VIES",
      vat_valid: r.valid === "true",
      country: r.countryCode,
      vat_number: r.vatNumber,
      company_name: r.name?.trim() || null,
      address: r.address?.trim() || null
    })
  };
}
